import Link from "next/link";
import { useContext } from "react";

import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SubscModalIdContext } from "@pages/home/hooks";
import { useHome } from "@pages/home/hooks";

import styles from "./styles.module.css";

import { useCommonContext } from "src/context/commonContext";

type TableRowProps = {
  className: string;
  subscription: {
    [key: string]: string;
    service: string;
    price: string;
    frequency: string;
    subscId?: string;
  };
};

const TableRow = (props: TableRowProps) => {
  const { toggleIsModalOpen } = useCommonContext();
  const subscId = props.subscription.subscId;
  const { modalSubscId, handleModalSubscId } = useHome();
  delete props.subscription.subscId;

  return (
    <tr className={`${styles.tableBody} ${props.className}`}>
      <>
        {Object.keys(props.subscription).map((key, index) => {
          if (key == "price") {
            props.subscription[key] = "￥" + props.subscription[key];
          }
          if (key == "nextPaymentDate") {
            props.subscription[key] =
              props.subscription[key].slice(5, 7) + "/" + props.subscription[key].slice(8, 10);
          }

          return (
            <td
              className={`${styles.tableBodyRow} ${props.className}`}
              key={`td${index}`}>
              <a
                key={`td${index}`}
                href={`/detail/${subscId}`}
                className={`${styles.link} ${props.className}`}>
                {props.subscription[key]}
              </a>
            </td>
          );
        })}
      </>
      <td className={`${styles.tableBodyRow} ${props.className}`}>
        <button
          className={`${styles.button} ${props.className}`}
          onClick={() => {
            handleModalSubscId(subscId);
            toggleIsModalOpen(true);
            console.log("tableRow", subscId);

            return modalSubscId;
          }}>
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
