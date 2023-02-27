import styles from "./styles.module.css";

type TableHeadProps = {
  headFirstItem: string;
  headSecondItem: string;
  headThirdItem: string;
  className: string;
  colSpan: string;
};

const TableHead = (props: TableHeadProps) => {
  return (
    <>
      <thead className={`${styles.tableHead} ${props.className}`}>
        <tr className={`${styles.tableHeadtr} ${props.className}`}>
          <th className={`${styles.tableHeadRow} ${props.className}`}>{props.headFirstItem}</th>
          <th className={`${styles.tableHeadRow} ${props.className}`}>{props.headSecondItem}</th>
          <th
            colSpan={2}
            className={`${styles.tableHeadRow} ${props.className}`}>
            {props.headThirdItem}
          </th>
        </tr>
      </thead>
    </>
  );
};

export default TableHead;
