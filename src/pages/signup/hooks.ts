import { useCommonContext } from "src/context/commonContext";

export const useSignUp = () => {
  const { isModalOpen } = useCommonContext();

  return { isModalOpen };
};
