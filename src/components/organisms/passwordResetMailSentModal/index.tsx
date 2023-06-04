import Description from "@atoms/description";
import RectangleButton from "@atoms/rectangleButton";
import Title from "@atoms/title";

import { useOkayButton, usePasswordResetMailSentModal } from "./hooks";
import styles from "./styles.module.sass";

const PasswordResetMailSentModal = () => {
  const { t } = usePasswordResetMailSentModal();

  return (
    <>
      <div className={styles["modal-overlay"]}>
        <div className={styles["modal-content"]}>
          <Title
            content={t("LOGIN.PASSWORD_RESET.MODAL.TITLE")}
            className={styles["title"]}
            isBold={true}
          />
          <Description
            content={t("LOGIN.PASSWORD_RESET.MODAL.BODY")}
            className={styles["description"]}
          />
          <OkayButton content={t("LOGIN.PASSWORD_RESET.MODAL.BUTTON")} />
        </div>
      </div>
    </>
  );
};

const OkayButton = (props: { content: string }) => {
  const { handleClick } = useOkayButton();

  return (
    <RectangleButton
      content={props.content}
      handleClick={handleClick}
      className={styles["okay-button"]}
      type="button"
    />
  );
};

export default PasswordResetMailSentModal;
