import Head from 'next/head';

import LoginForm from '@organisms/loginForm';
import PasswordResetMailSentModal from '@organisms/passwordResetMailSentModal';

import { useLogin } from './hooks';
import styles from './styles.module.css';

import Layout from 'src/components/templates/layout';
import Modal from 'src/components/templates/modal';

const Login = () => {
  const { isModalOpen, t } = useLogin();

  return (
    <Layout>
      <Head>
        <title>{t('LOGIN.HEADER')}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
