import { useRouter } from "next/router";

export const useSubscriptionDetail = () => {
  const router = useRouter();

  const handleClose = () => {
    router.push("/home");
  };

  return { handleClose };
};
