import { useRouter } from "next/router";

import { useTranslation } from "@utils/useTranslation";

export const useSignupCompletionModal = () => {
  const { t } = useTranslation();

  return { t };
};

export const useOkayButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/login");
  };

  return { handleClick };
};
