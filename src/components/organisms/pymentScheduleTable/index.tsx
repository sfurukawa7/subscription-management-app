import { useTranslation } from "@utils/useTranslation";

import styles from "./styles.module.css";

type PaymentScheduleTableProps = {
  contentExampleDate: string;
  contentExampleService: string;
  contentExamplePrice: string;
  contentDate: string;
  contentService: string;
  contentPrice: string;
  className: string;
};

const PaymentScheduleTable = (props: PaymentScheduleTableProps) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.container}>
        <table className={`${styles.table} ${props.className}`}>
          <thead className={`${styles.tableHead} ${props.className}`}>
            <tr className={`${styles.tableHeadRow} ${props.className}`}>
              <th className={`${styles.tableHeader} ${styles.tableRow} ${props.className}`}>
                {props.contentDate}
              </th>
              <th className={`${styles.tableHeader} ${styles.tableRow} ${props.className}`}>
                {props.contentService}
              </th>
              <th className={`${styles.tableHeader} ${styles.tableRow} ${props.className}`}>
                {props.contentPrice}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${styles.tableDetail} ${styles.tableRow} ${props.className}`}>
                {props.contentExampleDate}
              </td>
              <td className={`${styles.tableDetail} ${styles.tableRow} ${props.className}`}>
                {props.contentExampleService}
              </td>
              <td className={`${styles.tableDetail} ${styles.tableRow} ${props.className}`}>
                {props.contentExamplePrice}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PaymentScheduleTable;
