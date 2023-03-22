import Link from "next/link";

import RoundedRectangleButton from "@atoms/roundedRectangleButton";
import Title from "@atoms/title";
// import SubscriptionTable from "@organisms/subscriptionTable";
import SubscriptionTable from "@organisms/subscriptionTable";
import { useTranslation } from "@utils/useTranslation";

import styles from "./styles.module.css";

type SubscriptionWrapProps = {
  subscriptionList: { service: string; price: string; paymentFrequency: string; subscId: string }[];
  handleOpen: (subscId: string) => void;
};

type defineType = { service?: string; price?: string; frequency?: string; subscId: string };

const SubscriptionWrap = (props: SubscriptionWrapProps) => {
  const { t } = useTranslation();

  const subscTableList: defineType[] = props.subscriptionList.map((v) => ({
    service: v.service,
    price: v.price,
    frequency: v.paymentFrequency,
    subscId: v.subscId,
  }));

  return (
    <>
      <div className={styles.container}>
        <Title
          content={t.HOME_SUBSCRIPTION}
          className={styles.title}
        />
        <AddSubscriptionButton content={t.ADD_SUBSCRIPTION} />
        <SubscriptionTable
          className={styles.dt}
          subscTableList={subscTableList}
          handleOpen={props.handleOpen}
        />
      </div>
    </>
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
          className={styles.addSubscriptionButton}
          type="submit"
          disabled={false}
        />
      </Link>
    </>
  );
};

export default SubscriptionWrap;
