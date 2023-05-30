import RectangleButton from "@atoms/rectangleButton";

import { useEditSubscModal } from "./hooks";
import styles from "./styles.module.sass";

type EditSubscModalProps = {
  handleClose: () => void;
  handleDelete: () => void;
  modalSubscId: string | null;
  handleEdit: () => void;
};

const EditSubscModal = (props: EditSubscModalProps) => {
  const { t } = useEditSubscModal();

  return (
    <>
      <div className={styles["modal-overlay"]}>
        <div className={styles["modal-content"]}>
          <EditButton
            content={t("HOME.EDIT_BUTTON")}
            handleEdit={props.handleEdit}
          />
          <DeleteButton
            content={t("HOME.DELETE_BUTTON")}
            handleDelete={props.handleDelete}
          />
          <CloseButton
            content={t("HOME.CLOSE_BUTTON")}
            handleClose={props.handleClose}
          />
        </div>
      </div>
    </>
  );
};

const DeleteButton = (props: { content: string; handleDelete: () => void }) => {
  return (
    <RectangleButton
      content={props.content}
      handleClick={props.handleDelete}
      className={styles["delete-button"]}
      type="button"
    />
  );
};

const EditButton = (props: { content: string; handleEdit: () => void }) => {
  return (
    <RectangleButton
      content={props.content}
      handleClick={props.handleEdit}
      className={styles["edit-button"]}
      type="button"
    />
  );
};

const CloseButton = (props: { content: string; handleClose: () => void }) => {
  return (
    <RectangleButton
      content={props.content}
      handleClick={props.handleClose}
      className={styles["close-button"]}
      type="button"
    />
  );
};

export default EditSubscModal;
