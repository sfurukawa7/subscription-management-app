import router from "next/router";

import { useForm } from "react-hook-form";

import { getFrequencyOptions } from "@utils/getSelectBoxOptions";
import { useTranslation } from "@utils/useTranslation";

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

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SubscriptionFormData>({
    mode: "onSubmit",
    defaultValues: {
      service: "",
      price: 0,
      paymentDate: "",
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
    console.log(data);
  });

  return { t, handleSubmit, control, errors, frequencyOptions, handleCancel, handleAdd };
};
