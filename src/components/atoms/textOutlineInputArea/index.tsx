import { ControllerRenderProps } from "react-hook-form";

import styles from "./styles.module.sass";

type TextOutlineInputAreaProps = Partial<ControllerRenderProps> & {
  placeholder: string;
  label: string;
};

const TextOutlineInputArea = (props: TextOutlineInputAreaProps) => {
  return (
    <div className={styles["container"]}>
      <label htmlFor={props.label} />
      <textarea
        {...props}
        id={props.label}
        className={styles["text-outline-input"]}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextOutlineInputArea;
