import TableBody from "@organisms/tableBody";
import TableHead from "@organisms/tableHead";
import { useTranslation } from "@utils/useTranslation";

import styles from "./styles.module.css";
type SubscriptionTableProps = {
  className: string;
  subscTableList: defineType[];
  handleOpen: (subscId: string) => void;
};

type defineType = { [key: string]: string };

const SubscriptionTable = (props: SubscriptionTableProps) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.scrollDiv}>
          <table className={`${styles.table} ${props.className}`}>
            <TableHead
              headFirstItem={t.HOME_SERVICE}
              headSecondItem={t.HOME_PRICE}
              headThirdItem={t.HOME_frequency}
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
    </>
  );
};

export default SubscriptionTable;
