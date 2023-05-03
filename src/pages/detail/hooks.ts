import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useTranslation } from "next-export-i18n";
import { Subscription } from "subscription";

import axios from "@utils/useApi";

import { useAuthContext } from "src/context/authContext";

export const useSubscriptionDetail = () => {
  const router = useRouter();
  const { subscId } = router.query;
  const { user } = useAuthContext();
  const { t } = useTranslation();
  const [data, setData] = useState<Subscription | null>(null);

  const handleClose = () => {
    router.push(`/home/${user?.uid}`);
  };

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

  return { t, data, handleClose };
};
