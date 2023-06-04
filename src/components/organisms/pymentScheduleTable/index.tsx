import { MouseEvent } from "react";

import { useTranslation } from "next-export-i18n";

import TableBody from "@organisms/tableBody";
import TableHead from "@organisms/tableHead";

import styles from "./styles.module.sass";

type PaymentScheduleTableProps = {
  className: string;
  paymentTableList: {
    nextPaymentDate: string;
    service: string;
    price: string;
    subscId: string;
  }[];
  handleOpen: (subscId: string) => (e: MouseEvent<HTMLButtonElement>) => void;
};

const PaymentScheduleTable = (props: PaymentScheduleTableProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles["container"]}>
      <div className={styles["scroll-div"]}>
        <table className={`${styles["table"]} ${props.className}`}>
          <TableHead
            headFirstItem={t("HOME.PAYMENT_DATE")}
            headSecondItem={t("HOME.SERVICE")}
            headThirdItem={t("HOME.PRICE")}
            className={styles["table-head-row"]}
          />
          <TableBody
            subscriptionList={props.paymentTableList}
            className={styles["table-body-row"]}
            handleOpen={props.handleOpen}
          />
        </table>
      </div>
    </div>
  );
};

export default PaymentScheduleTable;
