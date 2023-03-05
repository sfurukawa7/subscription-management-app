import { useTranslation } from "@utils/useTranslation";

export const useEmailInput = () => {
  const { t } = useTranslation();

  return { t };
};
