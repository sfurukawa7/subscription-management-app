import Head from "next/head";

import { GetServerSideProps } from "next";
import { APIGetSubscriptionList, SubscriptionList } from "subscription";

import MenuBar from "@molecules/menuBar";
import EditSubscModal from "@organisms/editSubscModal";
import PaymentSchedule from "@organisms/paymentSchedule";
import SubscriptionWrap from "@organisms/subscription";
import axios from "@utils/useApi";
import { getTranslation, Translation } from "@utils/useTranslation";

import Modal from "src/components/templates/modal";

import { useHome } from "./hooks";
import styles from "./styles.module.css";

type HomeProps = {
  t: Translation;
  data: SubscriptionList;
};

const Home = (props: HomeProps) => {
  const { isModalOpen, modalSubscId, handleOpen, handleClose, handleDelete } = useHome();

  return (
    <>
      <Head>
        <title>{props.t.HOME_HEADER}</title>
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
        <MenuBar className={styles.menuBar} />
        <div className={styles.body}>
          <PaymentSchedule
            subscriptionList={props.data}
            handleOpen={handleOpen}
          />
          <SubscriptionWrap
            subscriptionList={props.data}
            handleOpen={handleOpen}
          />
          <Modal isOpen={isModalOpen}>
            <EditSubscModal
              handleClose={handleClose}
              handleDelete={handleDelete}
              modalSubscId={modalSubscId}
            />
          </Modal>
        </div>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { lang, uid } = context.query;
  const t = getTranslation(lang);

  if (uid) {
    const data = await axios
      .get<APIGetSubscriptionList>(`/subsc?user_id=${uid}`)
      .then((res) => {
        const fetchedData = res.data;

        return fetchedData.map((v) => ({
          service: v.subsc_name,
          price: Number(v.price),
          nextPaymentDate: v.next_payment_date,
          paymentFrequency: v.payment_frequency,
          subscId: v.subsc_id,
        }));
      })
      .catch(() => {
        console.log(t.ERROR_FAILED_TO_FETCH);

        return [];
      });

    return { props: { t, data } };
  } else {
    return { props: { t, data: [] } };
  }
};

export default Home;
