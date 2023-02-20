import RoundedRectangleButton from "@atoms/roundedRectangleButton";
import Title from "@atoms/title";
import { useTranslation } from "@utils/useTranslation";

import styles from "./styles.module.css";

type SubscriptionDetailProps = {
  className: string;
};

const SubscriptionDetail = (props: SubscriptionDetailProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Title
        content={t.DETAIL_TITLE}
        className={styles.title}
      />
      <div className={styles.container} />
      <CloseDetailButton content={t.DETAIL_CLOSE} />
    </>
  );
};

const CloseDetailButton = (props: { content: string }) => {
  return (
    <>
      <RoundedRectangleButton
        content={props.content}
        handleClick={() => {
          return;
        }}
        className={styles.closeDetailButton}
        type="submit"
      />
    </>
  );
};

export default SubscriptionDetail;
