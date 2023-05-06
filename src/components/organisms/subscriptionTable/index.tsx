import { MouseEvent } from "react";

import { useTranslation } from "next-export-i18n";

import TableBody from "@organisms/tableBody";
import TableHead from "@organisms/tableHead";

import styles from "./styles.module.css";
type SubscriptionTableProps = {
  className: string;
  subscTableList: {
    service: string;
    price: string;
    frequency: string;
    subscId: string;
  }[];
  handleOpen: (subscId: string) => (e: MouseEvent<HTMLButtonElement>) => void;
};

const SubscriptionTable = (props: SubscriptionTableProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.scrollDiv}>
        <table className={`${styles.table} ${props.className}`}>
          <TableHead
            headFirstItem={t("HOME.SERVICE")}
            headSecondItem={t("HOME.PRICE")}
            headThirdItem={t("HOME.FREQUENCY")}
            className={styles.tableHeadRow}
          />
          <TableBody
            subscriptionList={props.subscTableList}
            className={styles.tableBodyRow}
            handleOpen={props.handleOpen}
          />
        </table>
      </div>
    </div>
  );
};

export default SubscriptionTable;
