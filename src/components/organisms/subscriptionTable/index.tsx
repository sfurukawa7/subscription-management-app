import { MouseEvent } from "react";

import { useTranslation } from "next-export-i18n";

import TableBody from "@organisms/tableBody";
import TableHead from "@organisms/tableHead";

import styles from "./styles.module.sass";
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
    <div className={styles["container"]}>
      <div className={styles["scroll-div"]}>
        <table className={`${styles["table"]} ${props.className}`}>
          <TableHead
            headFirstItem={t("HOME.SERVICE")}
            headSecondItem={t("HOME.PRICE")}
            headThirdItem={t("HOME.FREQUENCY")}
            className={styles["table-head-row"]}
          />
          <TableBody
            subscriptionList={props.subscTableList}
            className={styles["table-body-row"]}
            handleOpen={props.handleOpen}
          />
        </table>
      </div>
    </div>
  );
};

export default SubscriptionTable;
