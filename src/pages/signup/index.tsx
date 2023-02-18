import SignUpCompleteModal from "@organisms/signUpCompleteModal";
import SignUpForm from "@organisms/signUpForm";

import { useSignUp } from "./hooks";
import styles from "./styles.module.css";

import Modal from "src/components/templates/modal";

const SignUp = () => {
  const { isModalOpen } = useSignUp();

  return (
    <main className={styles.main}>
      <SignUpForm />
      <Modal isOpen={isModalOpen}>
        <SignUpCompleteModal />
      </Modal>
    </main>
  );
};

export default SignUp;
