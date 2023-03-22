import Title from "@atoms/title";
import PaymentScheduleTable from "@organisms/pymentScheduleTable";
import { compareTwoDate } from "@utils/compareTwoDate";
import { useTranslation } from "@utils/useTranslation";

import styles from "./styles.module.css";

type PaymentScheduleProps = {
  subscriptionList: defineType[];
  handleOpen: (subscId: string) => void;
};

type defineType = { [key: string]: string };

const PaymentSchedule = (props: PaymentScheduleProps) => {
  const { t } = useTranslation();

  const paymentTableList: defineType[] = props.subscriptionList
    .map((v) => ({
      nextPaymentDate: v.nextPaymentDate,
      service: v.service,
      price: v.price,
      subscId: v.subscId,
    }))
    .sort((a, b) => compareTwoDate(a.nextPaymentDate, b.nextPaymentDate));

  return (
    <>
      <div className={styles.container}>
        <Title
          content={t.HOME_PAYMENT_SCHEDULE}
          className={styles.title}
        />
        <PaymentScheduleTable
          className={styles.dt}
          paymentTableList={paymentTableList}
          handleOpen={props.handleOpen}
        />
      </div>
    </>
  );
};

export default PaymentSchedule;
