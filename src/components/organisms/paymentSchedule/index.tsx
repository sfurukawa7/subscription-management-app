import Title from "@atoms/title";
import PaymentScheduleTable from "@organisms/pymentScheduleTable";
import { useTranslation } from "@utils/useTranslation";

import styles from "./styles.module.css";

type PaymentScheduleProps = {
  subscriptionList: { service: string; price: string; nextPaymentDate: string }[];
};

type defineType = { service?: string; price?: string; nextPaymentDate?: string };

const PaymentSchedule = (props: PaymentScheduleProps) => {
  const { t } = useTranslation();
  const paymentTableList: defineType[] = [];
  props.subscriptionList.map((v) => {
    const paymentTableItem: defineType = Object.assign({});
    paymentTableItem.nextPaymentDate = v.nextPaymentDate;
    paymentTableItem.service = v.service;
    paymentTableItem.price = v.price;
    paymentTableList.push(paymentTableItem);
  });

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
        />
      </div>
    </>
  );
};

export default PaymentSchedule;
