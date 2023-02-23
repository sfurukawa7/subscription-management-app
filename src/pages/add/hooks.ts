import { useForm } from "react-hook-form";

import { useTranslation } from "@utils/useTranslation";

export const useAddSubscription = () => {
  const { t } = useTranslation();

  return { t };
};

export type SubscriptionFormData = {
  service: string;
  price: number;
  paymentDate: string;
  frequency: string;
};

export const useAddSubscriptionBody = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SubscriptionFormData>({
    mode: "onSubmit",
    defaultValues: { service: "", price: 0, paymentDate: "", frequency: "" },
  });

  return { register, handleSubmit, control, errors };
};
