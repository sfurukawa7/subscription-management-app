import Title from "@atoms/title";
import PaymentScheduleTable from "@organisms/pymentScheduleTable";
import { useTranslation } from "@utils/useTranslation";

import styles from "./styles.module.css";

const PaymentSchedule = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.container}>
        <Title
          content={t.HOME_PAYMENT_SCHEDULE}
          className={styles.title}
        />
        <PaymentScheduleTable className={styles.dt} />
      </div>
    </>
  );
};

export default PaymentSchedule;
