import { useForm } from "react-hook-form";

import { getDateOptions, getFrequencyOptions } from "@utils/getSelectBoxOptions";
import { useTranslation } from "@utils/useTranslation";

export const useAddSubscription = () => {
  const { t } = useTranslation();

  return { t };
};

export type SubscriptionFormData = {
  service: string;
  price: number;
  paymentDate: string;
  paymentFrequency: string;
};

export const useAddSubscriptionBody = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SubscriptionFormData>({
    mode: "onSubmit",
    defaultValues: { service: "", price: 0, paymentDate: "", paymentFrequency: "" },
  });

  const { locale } = useTranslation();
  const dateOptions = getDateOptions(locale);
  console.log(dateOptions);
  const frequencyOptions = getFrequencyOptions(locale);

  return { register, handleSubmit, control, errors, dateOptions, frequencyOptions };
};
