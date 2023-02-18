import { useState } from "react";

export const useSignUp = () => {
  const [isSignUpCompleteModalOpen, setIsSignUpCompleteModalOpen] = useState<boolean>();

  return { isSignUpCompleteModalOpen, setIsSignUpCompleteModalOpen };
};
