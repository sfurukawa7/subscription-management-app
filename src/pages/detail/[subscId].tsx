import Head from "next/head";

import { GetServerSideProps } from "next";
import { Subscription } from "subscription";

import RectangleButton from "@atoms/rectangleButton";
import Title from "@atoms/title";
import MenuBar from "@molecules/menuBar";
import axios from "@utils/useApi";
import { getTranslation, Translation } from "@utils/useTranslation";

import { useSubscriptionDetail } from "./hooks";
import styles from "./styles.module.css";

type SubscriptionDetailProps = { t: Translation; data: Subscription | null };

const SubscriptionDetail = (props: SubscriptionDetailProps) => {
  const { handleClose } = useSubscriptionDetail();

  return (
    <>
      <Head>
        <title>{props.t.DETAIL_SUBSCRIPTION_HEADER}</title>
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
        <div className={styles.container}>
          <Title
            content={props.t.DETAIL_SUBSCRIPTION_TITLE}
            className={styles.title}
          />
          {props.data && (
            <SubscriptionDetailBody
              t={props.t}
              data={props.data}
            />
          )}
        </div>
        <SubscriptionDetailFooter
          t={props.t}
          handleClose={handleClose}
        />
      </main>
    </>
  );
};

type SubscriptionDetailBodyProps = {
  t: Translation;
  data: Subscription;
};

const SubscriptionDetailBody = (props: SubscriptionDetailBodyProps) => {
  return (
    <div className={styles.body}>
      <DetailCell
        title={props.t.COMMON_SERVICE}
        content={props.data.service}
      />
      <DetailCell
        title={props.t.COMMON_PRICE}
        content={`¥${props.data.price}`}
      />
      <DetailCell
        title={props.t.COMMON_NEXT_PAYMENT_DATE}
        content={props.data.nextPaymentDate}
      />
      <DetailCell
        title={props.t.COMMON_PAYMENT_FREQUENCY}
        content={props.data.paymentFrequency}
      />
      <DetailCell
        title={props.t.COMMON_GENRE}
        content={props.data.genre}
      />
      <DetailCell
        title={props.t.COMMON_REMARK}
        content={props.data.remark}
      />
    </div>
  );
};

const DetailCell = (props: { title: string; content: string }) => {
  return (
    <div className={styles.detailCell}>
      <div className={styles.detailCellTitle}>{props.title}</div>
      <div className={styles.detailCellContent}>{props.content}</div>
    </div>
  );
};

type SubscriptionDetailFooterProps = {
  t: Translation;
  handleClose: () => void;
};

const SubscriptionDetailFooter = (props: SubscriptionDetailFooterProps) => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerButton}>
        <RectangleButton
          type="button"
          content={props.t.DETAIL_SUBSCRIPTION_BUTTON}
          className={styles.addButton}
          handleClick={props.handleClose}
        />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query, locale }) => {
  const { subscId } = query;
  const t = getTranslation(locale);

  if (subscId) {
    const data = await axios
      .get(`/subsc/${subscId}`)
      .then((res) => {
        const fetchedData = res.data[0];

        return {
          service: fetchedData.subsc_name,
          price: Number(fetchedData.price),
          nextPaymentDate: fetchedData.next_payment_date,
          paymentFrequency: fetchedData.payment_frequency,
          genre: fetchedData.genre,
          remark: fetchedData.remark,
        };
      })
      .catch(() => {
        alert(t.ERROR_FAILED_TO_FETCH);

        return null;
      });

    return { props: { t, data } };
  } else {
    return { props: { t, data: null } };
  }
};

export default SubscriptionDetail;
