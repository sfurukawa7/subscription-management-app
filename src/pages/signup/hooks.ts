import { useState } from "react";

export const useSignup = () => {
  const [showCompletionModal, setShowCompletionModal] = useState<boolean>();

  return { showCompletionModal, setShowCompletionModal };
};
