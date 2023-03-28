import router from "next/router";
import { MouseEvent, useState } from "react";

import axios from "@utils/useApi";
import { useTranslation } from "@utils/useTranslation";

import { useAuthContext } from "src/context/authContext";
import { useCommonContext } from "src/context/commonContext";

export const useHome = () => {
  const { t } = useTranslation();
  const [modalSubscId, setModalSubscId] = useState<string | null>(null);
  const { isModalOpen, toggleIsModalOpen } = useCommonContext();
  const { user } = useAuthContext();

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
        router.push(`/home/${user?.uid}`);
      })
      .catch(() => {
        alert(t.ERROR_FAILED_TO_DELETE);
      })
      .finally(() => {
        toggleIsModalOpen(false);
      });
  };

  return {
    isModalOpen,
    modalSubscId,
    handleOpen,
    handleClose,
    handleDelete,
  };
};

export default useHome;
