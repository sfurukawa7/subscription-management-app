import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";

import { useTranslation } from "next-export-i18n";
import { APIGetSubscriptionList, SubscriptionList } from "subscription";

import axios from "@utils/useApi";

import { useCommonContext } from "src/context/commonContext";

export const useHome = () => {
  const router = useRouter();
  const { uid } = router.query;
  const { t } = useTranslation();
  const [modalSubscId, setModalSubscId] = useState<string | null>(null);
  const [data, setData] = useState<SubscriptionList>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { isModalOpen, toggleIsModalOpen } = useCommonContext();

  const handleOpen = (subscId: string) => (e: MouseEvent<HTMLButtonElement>) => {
    // 3点リーダーボタンを押したときに、行クリックのイベントが発火しないようにする
    e.stopPropagation();
    toggleIsModalOpen(true);
    setModalSubscId(subscId);
  };

  const handleClose = () => {
    toggleIsModalOpen(false);
    setModalSubscId(null);
  };

  const handleDelete = async () => {
    await axios
      .delete(`/subsc/${modalSubscId}`)
      .then(() => {
        setIsLoading(true);
      })
      .catch(() => {
        alert(t("ERROR.FAILED_TO_DELETE"));
      })
      .finally(() => {
        toggleIsModalOpen(false);
      });
  };

  const handleEdit = () => {
    toggleIsModalOpen(false);
    router.push(`/edit/${modalSubscId}`);
  };

  useEffect(() => {
    if (uid && isLoading) {
      axios
        .get<APIGetSubscriptionList>(`/subsc?user_id=${uid}`)
        .then((res) => {
          const fetchedData: SubscriptionList = res.data.map((v) => ({
            service: v.subsc_name,
            price: Number(v.price),
            nextPaymentDate: v.next_payment_date,
            paymentFrequency: v.payment_frequency,
            subscId: v.subsc_id,
          }));
          setData(fetchedData);
        })
        .catch(() => {
          alert(t("ERROR.FAILED_TO_FETCH"));
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    // tを含めると無限ループになるので、eslint-disable-next-lineを使用
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, setIsLoading, uid]);

  return {
    t,
    data,
    isModalOpen,
    modalSubscId,
    handleOpen,
    handleClose,
    handleDelete,
    handleEdit,
  };
};

export default useHome;
