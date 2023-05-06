import { useRouter } from "next/router";

import { useTranslation } from "next-export-i18n";

import { useCommonContext } from "src/context/commonContext";

export const useSignUpCompleteModal = () => {
  const { t } = useTranslation();

  return { t };
};

export const useOkayButton = () => {
  const router = useRouter();
  const { toggleIsModalOpen } = useCommonContext();

  const handleClick = () => {
    toggleIsModalOpen(false);
    router.push("/login");
  };

  return { handleClick };
};
