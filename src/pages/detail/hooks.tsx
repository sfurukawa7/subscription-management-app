import router from "next/router";
import { useEffect } from "react";

import { Subscription } from "subscription";

import axios from "@utils/useApi";
import { useTranslation } from "@utils/useTranslation";

export const useSubscriptionDetail = () => {
  useEffect(() => {
    const hoge = async () => {
      await axios
        .get("/subsc/20")
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.error(err.code);
        })
        .finally(() => {
          console.log("finally");
        });
    };
    hoge();
  }, []);

  const { t } = useTranslation();

  const handleClose = () => {
    router.push("/home");
  };

  const data: Subscription = {
    service: "Apple Music",
    price: 990,
    nextPaymentDate: "2023-03-01",
    paymentFrequency: "month",
    genre: "music",
    remark: "test",
  };

  return { t, handleClose, data };
};
