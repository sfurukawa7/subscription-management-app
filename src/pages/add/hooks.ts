import router from "next/router";

import { useForm } from "react-hook-form";

import { getFrequencyOptions } from "@utils/getSelectBoxOptions";
import { useTranslation } from "@utils/useTranslation";

import { useCommonContext } from "src/context/commonContext";

export type SubscriptionFormData = {
  service: string;
  price: number;
  paymentDate: string;
  paymentFrequency: string;
  genre: string;
  note: string;
};

export const useAddSubscription = () => {
  const { t } = useTranslation();
  const { isSubmitting, toggleIsSubmitting } = useCommonContext();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SubscriptionFormData>({
    mode: "onSubmit",
    defaultValues: {
      service: "",
      price: 0,
      paymentDate: new Date().toISOString().split("T")[0],
      paymentFrequency: "",
      genre: "",
      note: "",
    },
  });

  const { locale } = useTranslation();
  const frequencyOptions = getFrequencyOptions(locale);

  const handleCancel = () => {
    router.push("/home");
  };

  const handleAdd = handleSubmit((data) => {
    toggleIsSubmitting(true);
    console.log(data);
  });

  return { t, handleSubmit, control, errors, frequencyOptions, handleCancel, handleAdd };
};
