import Head from "next/head";

import EditSubscModal from "@organisms/editSubscModal";
import PaymentSchedule from "@organisms/paymentSchedule";
import SubscriptionWrap from "@organisms/subscription";

import { useHome } from "./hooks";
import styles from "./styles.module.css";

import Layout from "src/components/templates/layout";
import Modal from "src/components/templates/modal";

const Home = () => {
  const { t, data, isModalOpen, modalSubscId, handleOpen, handleClose, handleDelete, handleEdit } =
    useHome();

  return (
    <Layout showNav={true}>
      <Head>
        <title>{t("HOME.HEADER")}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.body}>
          <PaymentSchedule
            subscriptionList={data}
            handleOpen={handleOpen}
          />
          <SubscriptionWrap
            subscriptionList={data}
            handleOpen={handleOpen}
          />
          <Modal isOpen={isModalOpen}>
            <EditSubscModal
              handleClose={handleClose}
              handleDelete={handleDelete}
              modalSubscId={modalSubscId}
              handleEdit={handleEdit}
            />
          </Modal>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
