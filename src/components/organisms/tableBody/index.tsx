import styles from "./styles.module.css";

type TableBodyProps = {
  subscriptionList: defineType[];
  className: string;
};

type defineType = { service: string; price: string; frequence: string };

const TableBody = (props: TableBodyProps) => {
  return (
    <tbody>
      {props.subscriptionList?.map((subscription) => {
        return (
          <tr
            className={`${styles.tableBody} ${props.className}`}
            key={subscription.service}>
            <td className={`${styles.tableBodyRow} ${props.className}`}>{subscription.service}</td>
            <td className={`${styles.tableBodyRow} ${props.className}`}>{subscription.price}</td>
            <td className={`${styles.tableBodyRow} ${props.className}`}>
              {subscription.frequence}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
