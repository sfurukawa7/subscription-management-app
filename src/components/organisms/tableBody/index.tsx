import TableRow from "@atoms/tableRow";

import styles from "./styles.module.css";

type TableBodyProps = {
  subscriptionList: Array<defineType>;
  className: string;
  handleOpen: (subscId: string) => void;
};

type defineType = { [key: string]: string };

const TableBody = (props: TableBodyProps) => {
  return (
    <tbody>
      {props.subscriptionList?.map((body, index) => {
        // subscIdを除いたオブジェクトを作成
        const { subscId, ...data } = body;

        return (
          <TableRow
            subscription={data}
            className={styles.tableBodyRow}
            key={`body${index}`}
            handleOpen={() => props.handleOpen(subscId)}
            subscId={subscId}
          />
        );
      })}
    </tbody>
  );
};

export default TableBody;
