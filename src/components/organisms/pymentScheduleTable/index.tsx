import TableBody from "@organisms/tableBody";
import TableHead from "@organisms/tableHead";
import { useTranslation } from "@utils/useTranslation";

import styles from "./styles.module.css";

type PaymentScheduleTableProps = {
  className: string;
  subscriptionList: { service: string; price: string; frequency: string }[];
};

const PaymentScheduleTable = (props: PaymentScheduleTableProps) => {
  const { t } = useTranslation();

  const subscriptionList = [
    { service: "Jan.14", price: "Amazon Prime", frequency: "￥800" },
    { service: "Jan.13", price: "Netflix", frequency: "￥800" },
    { service: "Jan.12", price: "Disney Plus", frequency: "￥800" },
    { service: "Jan.11", price: "Spotify", frequency: "￥800" },
    { service: "Jan.16", price: "Youtube Premium", frequency: "￥800" },
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

// export const getStaticProps = () => {
//   const subscriptionList = [
//     { service: "Jan.14", price: "Amazon Prime", frequency: "/month" },
//     { service: "Jan.13", price: "Netflix", frequency: "/month" },
//     { service: "Jan.12", price: "Disney Plus", frequency: "/month" },
//     { service: "Jan.11", price: "Spotify", frequency: "/month" },
//     { service: "Jan.16", price: "Youtube Premium", frequency: "/month" },
//   ];

//   return { props: { subscriptionList } };
// };
