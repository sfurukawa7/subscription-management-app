import { useRouter } from "next/router";

import { useAuthContext } from "src/context/authContext";

export const useSubscriptionDetail = () => {
  const router = useRouter();
  const { user } = useAuthContext();

  const handleClose = () => {
    router.push(`/home/${user?.uid}`);
  };

  return { handleClose };
};
