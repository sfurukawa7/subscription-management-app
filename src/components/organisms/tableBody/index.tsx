import TableRow from "@atoms/tableRow";

import styles from "./styles.module.css";

type TableBodyProps = {
  subscriptionList: Array<defineType>;
  className: string;
};

type defineType = { service: string; price: string; frequency: string };

const TableBody = (props: TableBodyProps) => {
  return (
    <tbody>
      {props.subscriptionList?.map((obj) => {
        return (
          <TableRow
            subscription={obj}
            className={styles.tableBodyRow}
            key={obj.service}
          />
        );
      })}
    </tbody>
  );
};

export default TableBody;
