import { useCommonContext } from "src/context/commonContext";

export const useLogin = () => {
  const { isModalOpen } = useCommonContext();

  return { isModalOpen };
};
