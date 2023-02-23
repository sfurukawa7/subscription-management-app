import styles from "./styles.module.css";

type SubscriptionTableProps = {
  contentService: string;
  contentExamplePrice: string;
  contentFrequence: string;
  contentExampleService: string;
  contentPrice: string;
  contentExampleFrequence: string;
  className: string;
};

const SubscriptionTable = (props: SubscriptionTableProps) => {
  return (
    <>
      <div className={styles.container}>
        <table className={`${styles.table} ${props.className}`}>
          <thead className={`${styles.tableHead} ${props.className}`}>
            <tr className={`${styles.tableHeadRow} ${props.className}`}>
              <th className={`${styles.tableHeader} ${styles.tableRow} ${props.className}`}>
                {props.contentService}
              </th>
              <th className={`${styles.tableHeader} ${styles.tableRow} ${props.className}`}>
                {props.contentPrice}
              </th>
              <th className={`${styles.tableHeader} ${styles.tableRow} ${props.className}`}>
                {props.contentFrequence}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${styles.tableDetail} ${styles.tableRow} ${props.className}`}>
                {props.contentExampleService}
              </td>
              <td className={`${styles.tableDetail} ${styles.tableRow} ${props.className}`}>
                {props.contentExamplePrice}
              </td>
              <td className={`${styles.tableDetail} ${styles.tableRow} ${props.className}`}>
                {props.contentExampleFrequence}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SubscriptionTable;
