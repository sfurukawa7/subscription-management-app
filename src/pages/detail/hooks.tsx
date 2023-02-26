import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Subscription } from "subscription";

import axios from "@utils/useApi";
import { useTranslation } from "@utils/useTranslation";

export const useSubscriptionDetail = () => {
  const router = useRouter();
  const { subscId } = router.query;
  const [data, setData] = useState<Subscription | null>();
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      if (subscId) {
        await axios
          .get(`/subsc/${subscId}`)
          .then((res) => {
            const fetchedData = res.data[0];

            const newData: Subscription = {
              service: fetchedData.subsc_name,
              price: Number(fetchedData.price),
              nextPaymentDate: fetchedData.next_payment_date,
              paymentFrequency: fetchedData.payment_frequency,
              genre: fetchedData.genre,
              remark: fetchedData.remark,
            };
            setData(newData);
          })
          .catch((err) => {
            alert(t.ERROR_FAILED_TO_FETCH);
          });
      }
    };

    fetchData();
  }, [t, subscId]);

  const handleClose = () => {
    router.push("/home");
  };

  return { t, handleClose, data };
};
