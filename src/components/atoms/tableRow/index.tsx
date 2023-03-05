import Link from "next/link";

import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./styles.module.css";

type TableRowProps = {
  subscription: { [key: string]: string; service: string; price: string; frequency: string };
  className: string;
};

const TableRow = (props: TableRowProps) => {
  return (
    <tr className={`${styles.tableBody} ${props.className}`}>
      <>
        {Object.keys(props.subscription).map((key) => {
          return (
            <td
              className={`${styles.tableBodyRow} ${props.className}`}
              key={props.subscription.service}>
              {props.subscription[key]}
            </td>
          );
        })}
      </>
      <td className={`${styles.tableBodyRow} ${props.className}`}>
        <Link href="/detail/">
          <FontAwesomeIcon
            icon={faEllipsis}
            style={{ fontSize: "large", marginTop: "8px", marginLeft: "10px", marginRight: "10px" }}
          />
        </Link>
      </td>
    </tr>
  );
};

export default TableRow;
