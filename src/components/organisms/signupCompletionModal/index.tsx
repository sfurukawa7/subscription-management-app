import Description from "@atoms/description";
import RectangleButton from "@atoms/rectangleButton";
import Title from "@atoms/title";

import { useOkayButton, useSignupCompletionModal } from "./hooks";
import styles from "./styles.module.css";

const SignupCompletionModal = () => {
  const { t } = useSignupCompletionModal();

  return (
    <>
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <Title
            content={t.SIGNUP_MODAL_TITLE}
            className={styles.title}
            isBold={true}
          />
          <Description
            content={t.SIGNUP_MODAL_BODY}
            className={styles.description}
          />
          <OkayButton content={t.SIGNUP_MODAL_BUTTON} />
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
      className={styles.okayButton}
      type="button"
    />
  );
};

export default SignupCompletionModal;
