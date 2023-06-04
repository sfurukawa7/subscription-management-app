import Link from "next/link";
import { MouseEvent } from "react";

import { useTranslation } from "next-export-i18n";
import { SubscriptionList } from "subscription";

import RoundedRectangleButton from "@atoms/roundedRectangleButton";
import Title from "@atoms/title";
import SubscriptionTable from "@organisms/subscriptionTable";

import styles from "./styles.module.sass";

type SubscriptionWrapProps = {
  subscriptionList: SubscriptionList;
  handleOpen: (subscId: string) => (e: MouseEvent<HTMLButtonElement>) => void;
};

const SubscriptionWrap = (props: SubscriptionWrapProps) => {
  const { t } = useTranslation();

  const subscTableList = props.subscriptionList.map((v) => ({
    service: v.service,
    price: String(v.price),
    frequency: v.paymentFrequency,
    subscId: v.subscId,
  }));

  return (
    <div className={styles["container"]}>
      <div className={styles["header"]}>
        <Title
          content={t("HOME.SUBSCRIPTION")}
          className={styles["title"]}
        />
        <AddSubscriptionButton content={t("HOME.ADD_SUBSCRIPTION")} />
      </div>
      <SubscriptionTable
        className={styles["dt"]}
        subscTableList={subscTableList}
        handleOpen={props.handleOpen}
      />
    </div>
  );
};

const AddSubscriptionButton = (props: { content: string }) => {
  return (
    <>
      <Link href="/add">
        <RoundedRectangleButton
          content={props.content}
          handleClick={() => {
            return;
          }}
          className={styles["add-subscription-button"]}
          type="submit"
          disabled={false}
        />
      </Link>
    </>
  );
};

export default SubscriptionWrap;
