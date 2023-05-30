import LoginForm from "@organisms/loginForm";
import PasswordResetMailSentModal from "@organisms/passwordResetMailSentModal";

import { useLogin } from "./hooks";
import styles from "./styles.module.css";

import Layout from "src/components/templates/layout";
import Modal from "src/components/templates/modal";

const Login = () => {
  const { isModalOpen, t } = useLogin();

  return (
    <Layout title={t("LOGIN.HEADER")}>
      <main className={styles.main}>
        <LoginForm />
        <Modal isOpen={isModalOpen}>
          <PasswordResetMailSentModal />
        </Modal>
      </main>
    </Layout>
  );
};

export default Login;
