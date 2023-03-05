import TableBody from "@organisms/tableBody";
import TableHead from "@organisms/tableHead";
import { useTranslation } from "@utils/useTranslation";

import styles from "./styles.module.css";
type SubscriptionTableProps = {
  className: string;
};

const SubscriptionTable = (props: SubscriptionTableProps) => {
  const { t } = useTranslation();

  const subscriptionList = [
    { service: "amazon prime", price: "￥500", frequency: "/month" },
    { service: "netflix", price: "￥900", frequency: "/month" },
    { service: "Disney Plus", price: "￥1000", frequency: "/month" },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.scrollDiv}>
          <table className={`${styles.table} ${props.className}`}>
            <TableHead
              headFirstItem={t.HOME_SERVICE}
              headSecondItem={t.HOME_PRICE}
              headThirdItem={t.HOME_frequency}
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

export default SubscriptionTable;
