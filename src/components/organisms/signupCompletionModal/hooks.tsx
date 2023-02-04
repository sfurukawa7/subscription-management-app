import { useRouter } from "next/router";

export const useOkayButton = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/login");
  };

  return { handleClick };
};
