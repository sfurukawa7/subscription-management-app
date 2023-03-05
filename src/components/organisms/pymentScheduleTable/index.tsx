import TableBody from "@organisms/tableBody";
import TableHead from "@organisms/tableHead";
import { useTranslation } from "@utils/useTranslation";

import styles from "./styles.module.css";

type PaymentScheduleTableProps = {
  className: string;
  paymentTableList: defineType[];
};

type defineType = { service: string; price: string; frequency: string };

const PaymentScheduleTable = (props: PaymentScheduleTableProps) => {
  const { t } = useTranslation();

  return (
    <>
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
            />
          </table>
        </div>
      </div>
    </>
  );
};

export default PaymentScheduleTable;
