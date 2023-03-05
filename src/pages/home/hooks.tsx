import { useState } from "react";

import { useTranslation } from "@utils/useTranslation";

import { useCommonContext } from "src/context/commonContext";

export const useHome = () => {
  const [modalSubscId, setModalSubscId] = useState<string | undefined>("0");
  const { isModalOpen } = useCommonContext();
  const { t } = useTranslation();

  const handleModalSubscId = (subscId: string | undefined) => {
    setModalSubscId(subscId);
  };

  return { isModalOpen, t, modalSubscId, handleModalSubscId, setModalSubscId };
};

export default useHome;
