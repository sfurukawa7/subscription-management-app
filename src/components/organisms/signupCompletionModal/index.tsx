import Description from "@atoms/description";
import RectangleButton from "@atoms/rectangleButton";
import Title from "@atoms/title";

import { useOkayButton } from "./hooks";
import styles from "./styles.module.css";

const SignupCompletionModal = () => {
  return (
    <>
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <Title
            content="Welcome!"
            className={styles.title}
            isBold={true}
          />
          <Description
            content="You’re all set up and ready to manage your favorite service!"
            className={styles.description}
          />
          <OkayButton />
        </div>
      </div>
    </>
  );
};

const OkayButton = () => {
  const { handleClick } = useOkayButton();

  return (
    <RectangleButton
      content="OK"
      handleClick={handleClick}
      className={styles.okayButton}
      type="button"
    />
  );
};

export default SignupCompletionModal;
