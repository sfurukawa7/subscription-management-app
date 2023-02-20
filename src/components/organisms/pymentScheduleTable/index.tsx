import TableBody from "@organisms/tableBody";
import TableHead from "@organisms/tableHead";
import { useTranslation } from "@utils/useTranslation";

import styles from "./styles.module.css";

type PaymentScheduleTableProps = {
  className: string;
};

const PaymentScheduleTable = (props: PaymentScheduleTableProps) => {
  const { t } = useTranslation();

  const subscriptionList = [
    { service: "amazon prime", price: "￥500", frequence: "/month", date: "Jan. 13" },
    { service: "netflix", price: "￥900", frequence: "/month", date: "Jan. 13" },
    { service: "Disney Plus", price: "￥1000", frequence: "/month", date: "Jan. 13" },
    { service: "Disne Plus", price: "￥1000", frequence: "/month", date: "Jan. 13" },
    { service: "Disy Plus", price: "￥1000", frequence: "/month", date: "Jan. 13" },
  ];

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
              subscriptionList={subscriptionList}
              className={styles.tableBodyRow}
            />
          </table>
        </div>
      </div>
    </>
  );
};

export default PaymentScheduleTable;
