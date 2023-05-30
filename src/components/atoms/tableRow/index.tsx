import { MouseEvent } from "react";

import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useTableRow } from "./hooks";
import styles from "./styles.module.sass";

type TableRowProps = {
  className: string;
  subscription: {
    [key: string]: string;
  };
  handleOpen: (e: MouseEvent<HTMLButtonElement>) => void;
  subscId: string;
};

const TableRow = (props: TableRowProps) => {
  const { handleClick } = useTableRow(props.subscId);

  return (
    <tr
      onClick={handleClick}
      className={`${styles["table-body"]} ${props.className}`}>
      {Object.keys(props.subscription).map((key, index) => {
        let content;
        if (key == "nextPaymentDate") {
          content = props.subscription[key].split("-").slice(1).join("/");
        } else if (key == "price") {
          content = "¥" + props.subscription[key];
        } else {
          content = props.subscription[key];
        }

        return (
          <td
            className={`${styles["table-body-row"]} ${props.className}`}
            key={`td${index}`}>
            <span
              key={`td${index}`}
              className={`${styles["link"]} ${props.className}`}>
              {content}
            </span>
          </td>
        );
      })}
      <td className={`${styles["table-body-row"]} ${props.className}`}>
        <button
          className={`${styles["button"]} ${props.className}`}
          onClick={props.handleOpen}>
          <FontAwesomeIcon
            icon={faEllipsis}
            style={{
              fontSize: "large",
              marginTop: "8px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
