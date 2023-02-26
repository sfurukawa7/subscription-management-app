import Head from "next/head";

import { Subscription } from "subscription";

import RectangleButton from "@atoms/rectangleButton";
import Title from "@atoms/title";
import MenuBar from "@molecules/menuBar";
import { Translation } from "@utils/useTranslation";

import { useSubscriptionDetail } from "./hooks";
import styles from "./styles.module.css";

type SubscriptionDetailProps = { sample: string };

const SubscriptionDetail = (props: SubscriptionDetailProps) => {
  const { t, handleClose, data } = useSubscriptionDetail();

  useSubscriptionDetail();

  return (
    <>
      <Head>
        <title>{t.DETAIL_SUBSCRIPTION_HEADER}</title>
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
        <Title
          content={t.DETAIL_SUBSCRIPTION_TITLE}
          className={styles.title}
        />
        <SubscriptionDetailBody
          t={t}
          data={data}
        />
        <SubscriptionDetailFooter
          t={t}
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

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   await axios
//     .get("/sucsc/1")
//     .then((res) => {
//       console.log(res.data);
//     })
//     .catch((err) => {
//       console.error(err.code);
//     });

//   return { props: { sample: "sample" } };
// };

export default SubscriptionDetail;
