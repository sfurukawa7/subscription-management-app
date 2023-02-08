import { useTranslation } from "@utils/useTranslation";

export const useHome = () => {
  const { t } = useTranslation();

  return { t };
};
