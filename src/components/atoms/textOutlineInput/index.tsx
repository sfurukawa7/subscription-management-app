import { ControllerRenderProps } from "react-hook-form";

import styles from "./styles.module.sass";

type TextOutlineInputProps = Partial<ControllerRenderProps> & {
  placeholder: string;
  label: string;
  type?: string;
};

const TextOutlineInput = (props: TextOutlineInputProps) => {
  return (
    <div className={styles["container"]}>
      <label htmlFor={props.label} />
      <input
        {...props}
        id={props.label}
        type={props.type ?? "string"}
        className={styles["text-outline-input"]}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextOutlineInput;
