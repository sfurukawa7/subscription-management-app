import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useTranslation } from "next-export-i18n";
import { useForm } from "react-hook-form";
import { Subscription } from "subscription";

import { getFrequencyOptions } from "@utils/getSelectBoxOptions";
import axios from "@utils/useApi";

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
  subsc_id: string;
};

export const useEditSubscription = () => {
  const { t } = useTranslation();
  const { isSubmitting, toggleIsSubmitting } = useCommonContext();
  const { user } = useAuthContext();
  const router = useRouter();
  const { subscId } = router.query;
  const [data, setData] = useState<Subscription | null>(null);

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
        alert(t("ERROR.FAILED_TO_UPDATE"));
      })
      .finally(() => {
        toggleIsSubmitting(false);
      });
  };

  const handleUpdate = submit((data) => {
    if (!user) return;
    if (typeof subscId !== "string") return;

    const req: APISubscriptionRequest = {
      user_id: user.uid,
      subsc_name: data.service,
      genre: data.genre,
      price: data.price,
      payment_frequency: data.paymentFrequency,
      payment_date: data.paymentDate,
      remark: data.remark,
      subsc_id: subscId,
    };

    updateSubscription(req);
  });

  useEffect(() => {
    if (subscId) {
      axios
        .get(`/subsc/${subscId}`)
        .then((res) => {
          const fetchedData = res.data[0];

          setData({
            service: fetchedData.subsc_name,
            price: Number(fetchedData.price),
            nextPaymentDate: fetchedData.next_payment_date,
            paymentFrequency: fetchedData.payment_frequency,
            genre: fetchedData.genre,
            remark: fetchedData.remark,
          });
        })
        .catch(() => {});
    }
  }, [subscId]);

  return { t, control, errors, frequencyOptions, handleCancel, handleUpdate, isSubmitting };
};
