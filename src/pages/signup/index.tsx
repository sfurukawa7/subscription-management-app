import SignUpCompleteModal from "@organisms/signUpCompleteModal";
import SignUpForm from "@organisms/signUpForm";

import { useSignUp } from "./hooks";
import styles from "./styles.module.css";

const SignUp = () => {
  const { isSignUpCompleteModalOpen, setIsSignUpCompleteModalOpen } = useSignUp();

  return (
    <main className={styles.main}>
      <SignUpForm onAfterSignUp={() => setIsSignUpCompleteModalOpen(true)} />
      {isSignUpCompleteModalOpen && <SignUpCompleteModal />}
      {isSignUpCompleteModalOpen && <Backdrop />}
    </main>
  );
};

const Backdrop = () => {
  return <div className={styles.modalBackdrop} />;
};

export default SignUp;
