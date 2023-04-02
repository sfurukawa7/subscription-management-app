import RectangleButton from "@atoms/rectangleButton";

import { useEditSubscModal } from "./hooks";
import styles from "./styles.module.css";

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
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <EditButton
            content={t.HOME_EDIT_BUTTON}
            handleEdit={props.handleEdit}
          />
          <DeleteButton
            content={t.HOME_DELETE_BUTTON}
            handleDelete={props.handleDelete}
          />
          <CloseButton
            content={t.HOME_CLOSE_BUTTON}
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
      className={styles.deleteButton}
      type="button"
    />
  );
};

const EditButton = (props: { content: string; handleEdit: () => void }) => {
  return (
    <RectangleButton
      content={props.content}
      handleClick={props.handleEdit}
      className={styles.editButton}
      type="button"
    />
  );
};

const CloseButton = (props: { content: string; handleClose: () => void }) => {
  return (
    <RectangleButton
      content={props.content}
      handleClick={props.handleClose}
      className={styles.closeButton}
      type="button"
    />
  );
};

export default EditSubscModal;
