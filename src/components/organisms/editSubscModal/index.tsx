import { useEffect } from "react";

import RectangleButton from "@atoms/rectangleButton";
import { useHome } from "@pages/home/hooks";

import { useDeleteButton, useCloseButton, useEditButton, useEditSubscModal } from "./hooks";
import styles from "./styles.module.css";

const EditSubscModal = () => {
  const { t } = useEditSubscModal();

  return (
    <>
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <EditButton content={t.HOME_EDIT_BUTTON} />
          <DeleteButton content={t.HOME_DELETE_BUTTON} />
          <CloseButton content={t.HOME_CLOSE_BUTTON} />
          <p>s</p>
        </div>
      </div>
    </>
  );
};

const DeleteButton = (props: { content: string }) => {
  const { handleClick } = useDeleteButton();

  return (
    <RectangleButton
      content={props.content}
      handleClick={handleClick}
      className={styles.deleteButton}
      type="button"
    />
  );
};

const EditButton = (props: { content: string }) => {
  const { handleClick } = useEditButton();

  return (
    <RectangleButton
      content={props.content}
      handleClick={handleClick}
      className={styles.editButton}
      type="button"
    />
  );
};

const CloseButton = (props: { content: string }) => {
  const { handleClick } = useCloseButton();

  return (
    <RectangleButton
      content={props.content}
      handleClick={handleClick}
      className={styles.closeButton}
      type="button"
    />
  );
};

export default EditSubscModal;
