import { useTranslation } from "next-export-i18n";

import { useCommonContext } from "src/context/commonContext";

export const useSignUp = () => {
  const { isModalOpen } = useCommonContext();
  const { t } = useTranslation();

  return { isModalOpen, t };
};
