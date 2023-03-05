import { useHome } from "@pages/home/hooks";
import { useTranslation } from "@utils/useTranslation";

export const usePasswordInput = () => {
  const { t } = useTranslation();

  return { t };
};
