import { ControllerRenderProps } from "react-hook-form";

import styles from "./styles.module.css";

type TextOutlineInputAreaProps = Partial<ControllerRenderProps> & {
  placeholder: string;
  label: string;
};

const TextOutlineInputArea = (props: TextOutlineInputAreaProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor={props.label} />
      <textarea
        {...props}
        id={props.label}
        className={styles.textOutlineInput}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextOutlineInputArea;
