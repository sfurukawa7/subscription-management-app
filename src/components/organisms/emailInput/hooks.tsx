import { useTranslation } from "next-export-i18n";

export const useEmailInput = () => {
  const { t } = useTranslation();

  return { t };
};
