import { useRouter } from "next/router";

import { useHome } from "@pages/home/hooks";
import { useTranslation } from "@utils/useTranslation";

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
