import router from "next/router";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { useTranslation } from "next-export-i18n";
import { useForm } from "react-hook-form";

import { getFrequencyOptions } from "@utils/getSelectBoxOptions";
import axios from "@utils/useApi";

import { useAuthContext } from "src/context/authContext";
import { useCommonContext } from "src/context/commonContext";

dayjs.extend(utc);
dayjs.extend(timezone);

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
      paymentDate: dayjs().tz("Asia/Tokyo").format("YYYY-MM-DD"),
      paymentFrequency: "month",
      genre: "",
      remark: "",
    },
  });

  const { locale } = useTranslation();
  const frequencyOptions = getFrequencyOptions(locale);

  const handleCancel = () => {
    router.push(`/home/${user?.uid}`);
  };

  const addSubscription = async (req: APISubscriptionRequest) => {
    toggleIsSubmitting(true);

    await axios
      .post("/subsc", req)
      .then(() => {
        router.push(`/home/${user?.uid}`);
      })
      .catch(() => {
        alert(t("ERROR.FAILED_TO_ADD"));
      })
      .finally(() => {
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
