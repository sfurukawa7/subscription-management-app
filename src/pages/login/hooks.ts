import { useTranslation } from "@utils/useTranslation";

import { useCommonContext } from "src/context/commonContext";

export const useLogin = () => {
  const { isModalOpen } = useCommonContext();
  const { t } = useTranslation();

  return { isModalOpen, t };
};
