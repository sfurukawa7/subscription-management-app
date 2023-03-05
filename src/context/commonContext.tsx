import { ReactNode, createContext, useState, useContext } from "react";

export type CommonContextProps = {
  isModalOpen: boolean;
  toggleIsModalOpen: (next: boolean) => void;
  isSubmitting: boolean;
  toggleIsSubmitting: (next: boolean) => void;
};

const CommonContext = createContext<CommonContextProps>({
  isModalOpen: false,
  toggleIsModalOpen: () => {},
  isSubmitting: false,
  toggleIsSubmitting: () => {},
});

export const useCommonContext = () => {
  return useContext(CommonContext);
};

type CommonProviderProps = {
  children: ReactNode;
};

export const CommonProvider = (props: CommonProviderProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const toggleIsModalOpen = (next: boolean) => setIsModalOpen(next);
  const toggleIsSubmitting = (next: boolean) => setIsSubmitting(next);

  return (
    <CommonContext.Provider
      value={{ isModalOpen, toggleIsModalOpen, isSubmitting, toggleIsSubmitting }}>
      {props.children}
    </CommonContext.Provider>
  );
};
