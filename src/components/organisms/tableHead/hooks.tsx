import { useTranslation } from "next-export-i18n";

export const usePasswordInput = () => {
  const { t } = useTranslation();

  return { t };
};
