import { useRouter } from "next/router";

import { useTranslation } from "next-export-i18n";

import { useHome } from "@pages/home/hooks";

import { useCommonContext } from "src/context/commonContext";

export const useEditSubscModal = () => {
  const { t } = useTranslation();

  return { t };
};

export const useDeleteButton = () => {
  const router = useRouter();
  const { modalSubscId } = useHome();
  const { toggleIsModalOpen } = useCommonContext();

  const handleClick = () => {
    toggleIsModalOpen(false);
    router.push(`/home/${modalSubscId}`);
  };

  return { handleClick };
};

export const useCloseButton = () => {
  const { toggleIsModalOpen } = useCommonContext();

  const handleClick = () => {
    toggleIsModalOpen(false);
  };

  return { handleClick };
};

export const useEditButton = () => {
  const { toggleIsModalOpen } = useCommonContext();

  const handleClick = () => {
    toggleIsModalOpen(false);
  };

  return { handleClick };
};
