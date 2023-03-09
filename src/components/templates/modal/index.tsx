import { ReactNode } from "react";

import Backdrop from "@atoms/backdrop";

type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
};

const Modal = (props: ModalProps) => {
  return (
    <>
      {props.isOpen && props.children}
      {props.isOpen && <Backdrop />}
    </>
  );
};

export default Modal;
