import RoundedRectangleButton from "@atoms/roundedRectangleButton";
import Title from "@atoms/title";
import SubscriptionTable from "@organisms/subscriptionTable";
import { useTranslation } from "@utils/useTranslation";

import styles from "./styles.module.css";

const Subscription = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.container}>
        <Title
          content={t.HOME_SUBSCRIPTION}
          className={styles.title}
        />
        <AddSubscriptionButton content={t.ADD_SUBSCRIPTION} />
        <SubscriptionTable className={styles.dt} />
      </div>
    </>
  );
};

const AddSubscriptionButton = (props: { content: string }) => {
  return (
    <>
      <RoundedRectangleButton
        content={props.content}
        handleClick={() => {
          return;
        }}
        className={styles.addSubscriptionButton}
        type="submit"
      />
    </>
  );
};

export default Subscription;
