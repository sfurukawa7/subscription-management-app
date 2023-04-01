import { MouseEvent } from "react";

import TableBody from "@organisms/tableBody";
import TableHead from "@organisms/tableHead";
import { useTranslation } from "@utils/useTranslation";

import styles from "./styles.module.css";

type PaymentScheduleTableProps = {
  className: string;
  paymentTableList: {
    nextPaymentDate: string;
    service: string;
    price: string;
    subscId: string;
  }[];
  handleOpen: (subscId: string) => (e: MouseEvent<HTMLButtonElement>) => void;
};

const PaymentScheduleTable = (props: PaymentScheduleTableProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.scrollDiv}>
        <table className={`${styles.table} ${props.className}`}>
          <TableHead
            headFirstItem={t.HOME_PAYMENT_DATE}
            headSecondItem={t.HOME_SERVICE}
            headThirdItem={t.HOME_PRICE}
            className={styles.tableHeadRow}
          />
          <TableBody
            subscriptionList={props.paymentTableList}
            className={styles.tableBodyRow}
            handleOpen={props.handleOpen}
          />
        </table>
      </div>
    </div>
  );
};

export default PaymentScheduleTable;
