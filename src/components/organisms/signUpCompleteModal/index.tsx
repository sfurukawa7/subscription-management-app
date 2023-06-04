import Description from "@atoms/description";
import RectangleButton from "@atoms/rectangleButton";
import Title from "@atoms/title";

import { useOkayButton, useSignUpCompleteModal } from "./hooks";
import styles from "./styles.module.sass";

const SignUpCompleteModal = () => {
  const { t } = useSignUpCompleteModal();

  return (
    <>
      <div className={styles["modal-overlay"]}>
        <div className={styles["modal-content"]}>
          <Title
            content={t("SIGN_UP.MODAL.TITLE")}
            className={styles["title"]}
            isBold={true}
          />
          <Description
            content={t("SIGN_UP.MODAL.BODY")}
            className={styles["description"]}
          />
          <OkayButton content={t("SIGN_UP.MODAL.BUTTON")} />
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

export default SignUpCompleteModal;
