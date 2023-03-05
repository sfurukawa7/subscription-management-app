import SignupCompletionModal from "@organisms/signupCompletionModal";
import SignupForm from "@organisms/signupForm";

import { useSignup } from "./hooks";
import styles from "./styles.module.css";

const SignUp = () => {
  const { showCompletionModal, setShowCompletionModal } = useSignup();

  return (
    <main className={styles.main}>
      <SignupForm onAfterSignup={() => setShowCompletionModal(true)} />
      {showCompletionModal && <SignupCompletionModal />}
      {showCompletionModal && <Backdrop />}
    </main>
  );
};

const Backdrop = () => {
  return <div className={styles.modalBackdrop} />;
};

export default SignUp;
