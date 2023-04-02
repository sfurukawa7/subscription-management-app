import router from "next/router";

import { useForm } from "react-hook-form";
import { Subscription } from "subscription";

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

export const useEditSubscription = (data: Subscription | null) => {
  const { t } = useTranslation();
  const { isSubmitting, toggleIsSubmitting } = useCommonContext();
  const { user } = useAuthContext();

  const initialData: SubscriptionFormData =
    data != null
      ? {
          service: data.service,
          price: data.price,
          paymentDate: data.nextPaymentDate,
          paymentFrequency: data.paymentFrequency,
          genre: data.genre,
          remark: data.remark,
        }
      : {
          service: "",
          price: 0,
          paymentDate: new Date().toISOString().split("T")[0],
          paymentFrequency: "month",
          genre: "",
          remark: "",
        };

  const {
    handleSubmit: submit,
    control,
    formState: { errors },
  } = useForm<SubscriptionFormData>({
    mode: "onSubmit",
    defaultValues: initialData,
  });

  const { locale } = useTranslation();
  const frequencyOptions = getFrequencyOptions(locale);

  const handleCancel = () => {
    router.push(`/home/${user?.uid}`);
  };

  const updateSubscription = async (req: APISubscriptionRequest) => {
    toggleIsSubmitting(true);

    await axios
      .post("/subsc", req)
      .then(() => {
        router.push(`/home/${user?.uid}`);
      })
      .catch(() => {
        alert(t.ERROR_FAILED_TO_ADD);
      })
      .finally(() => {
        toggleIsSubmitting(false);
      });
  };

  const handleUpdate = submit((data) => {
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

    updateSubscription(req);
  });

  return { t, control, errors, frequencyOptions, handleCancel, handleUpdate, isSubmitting };
};
