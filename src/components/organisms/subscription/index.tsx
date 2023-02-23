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
        <SubscriptionTable
          className={styles.dt}
          contentService={t.HOME_SERVICE}
          contentPrice={t.HOME_PRICE}
          contentFrequence={t.HOME_FREQUENCE}
          contentExampleService={t.HOME_EXAMPLE}
          contentExamplePrice={t.HOME_EXAMPLE_PRICE}
          contentExampleFrequence={t.HOME_EXAMPLE_FREQUENCE}
        />
      </div>
    </>
  );
};

export default Subscription;
