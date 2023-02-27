import router from "next/router";

import { useForm } from "react-hook-form";

import { getFrequencyOptions } from "@utils/getSelectBoxOptions";
import axios from "@utils/useApi";
import { useTranslation } from "@utils/useTranslation";

import { useAuthContext } from "src/context/authContext";
import { useCommonContext } from "src/context/commonContext";

export type SubscriptionFormData = {
  service: string;
  price: number;
  paymentDate: string;
  paymentFrequency: "month" | "year";
  genre: string;
  remark: string;
};

type APISubscriptionRequest = {
  user_id: string;
  subsc_name: string;
  genre: string;
  price: number;
  payment_frequency: "month" | "year";
  payment_date: string;
  remark: string;
};

export const useAddSubscription = () => {
  const { t } = useTranslation();
  const { isSubmitting, toggleIsSubmitting } = useCommonContext();
  const { user } = useAuthContext();

  const {
    handleSubmit: submit,
    control,
    formState: { errors },
  } = useForm<SubscriptionFormData>({
    mode: "onSubmit",
    defaultValues: {
      service: "",
      price: 0,
      paymentDate: new Date().toISOString().split("T")[0],
      paymentFrequency: "month",
      genre: "",
      remark: "",
    },
  });

  const { locale } = useTranslation();
  const frequencyOptions = getFrequencyOptions(locale);

  const handleCancel = () => {
    router.push("/home");
  };

  const addSubscription = async (req: APISubscriptionRequest) => {
    toggleIsSubmitting(true);

    await axios
      .post("/subsc", req)
      .then(() => {
        router.push("/home");
      })
      .catch((err) => {
        alert(t.ERROR_FAILED_TO_ADD);
      })
      .finally(() => {
        console.log(req);
        toggleIsSubmitting(false);
      });
  };

  const handleAdd = submit((data) => {
    if (!user) return;

    const req: APISubscriptionRequest = {
      user_id: user.uid,
      subsc_name: data.service,
      genre: data.genre,
      price: data.price,
      payment_frequency: data.paymentFrequency,
      payment_date: data.paymentDate,
      remark: data.remark,
    };

    addSubscription(req);
  });

  return { t, control, errors, frequencyOptions, handleCancel, handleAdd, isSubmitting };
};
