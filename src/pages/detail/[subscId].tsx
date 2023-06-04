import Head from "next/head";

import { useTranslation } from "next-export-i18n";
import { Subscription } from "subscription";

import RectangleButton from "@atoms/rectangleButton";
import Title from "@atoms/title";
import MenuBar from "@molecules/menuBar";

import { useSubscriptionDetail } from "./hooks";
import styles from "./styles.module.sass";

const SubscriptionDetail = () => {
  const { t, data, handleClose } = useSubscriptionDetail();

  return (
    <>
      <Head>
        <title>{t("SUBSCRIPTION_DETAIL.HEADER")}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main className={styles["main"]}>
        <MenuBar className={styles["menu-bar"]} />
        <div className={styles["container"]}>
          <Title
            content={t("SUBSCRIPTION_DETAIL.TITLE")}
            className={styles["title"]}
          />
          {data && <SubscriptionDetailBody data={data} />}
        </div>
        <SubscriptionDetailFooter handleClose={handleClose} />
      </main>
    </>
  );
};

type SubscriptionDetailBodyProps = {
  data: Subscription;
};

const SubscriptionDetailBody = (props: SubscriptionDetailBodyProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles["body"]}>
      <DetailCell
        title={t("COMMON.SERVICE")}
        content={props.data.service}
      />
      <DetailCell
        title={t("COMMON.PRICE")}
        content={`¥${props.data.price}`}
      />
      <DetailCell
        title={t("COMMON.NEXT_PAYMENT_DATE")}
        content={props.data.nextPaymentDate}
      />
      <DetailCell
        title={t("COMMON.PAYMENT_FREQUENCY")}
        content={props.data.paymentFrequency}
      />
      <DetailCell
        title={t("COMMON.GENRE")}
        content={props.data.genre}
      />
      <DetailCell
        title={t("COMMON.REMARK")}
        content={props.data.remark}
      />
    </div>
  );
};

const DetailCell = (props: { title: string; content: string }) => {
  return (
    <div className={styles["detail-cell"]}>
      <div className={styles["detail-cell-title"]}>{props.title}</div>
      <div className={styles["detail-cell-content"]}>{props.content}</div>
    </div>
  );
};

type SubscriptionDetailFooterProps = {
  handleClose: () => void;
};

const SubscriptionDetailFooter = (props: SubscriptionDetailFooterProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles["footer"]}>
      <div className={styles["footer-button"]}>
        <RectangleButton
          type="button"
          content={t("SUBSCRIPTION_DETAIL.BUTTON")}
          className={styles["add-button"]}
          handleClick={props.handleClose}
        />
      </div>
    </div>
  );
};

export default SubscriptionDetail;
