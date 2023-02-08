// import { ControllerRenderProps } from "react-hook-form";

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
        <PaymentScheduleTable
          contentDate={t.HOME_PAYMENT_DATE}
          contentService={t.HOME_SERVICE}
          contentPrice={t.HOME_PRICE}
          contentExampleDate={t.HOME_EXAMPLE_DATE}
          contentExampleService={t.HOME_EXAMPLE}
          contentExamplePrice={t.HOME_EXAMPLE_PRICE}
          className={styles.dt}
        />
      </div>
    </>
  );
};

export default PaymentSchedule;
