import styles from "./styles.module.sass";

type TableHeadProps = {
  headFirstItem: string;
  headSecondItem: string;
  headThirdItem: string;
  className: string;
};

const TableHead = (props: TableHeadProps) => {
  return (
    <>
      <thead className={`${styles["table-head"]} ${props.className}`}>
        <tr className={`${styles["table-head-tr"]} ${props.className}`}>
          <th className={`${styles["table-head-row"]} ${props.className}`}>
            {props.headFirstItem}
          </th>
          <th className={`${styles["table-head-row"]} ${props.className}`}>
            {props.headSecondItem}
          </th>
          <th
            colSpan={2}
            className={`${styles["table-head-row"]} ${props.className}`}>
            {props.headThirdItem}
          </th>
        </tr>
      </thead>
    </>
  );
};

export default TableHead;
