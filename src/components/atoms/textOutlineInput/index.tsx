import { ControllerRenderProps } from "react-hook-form";

import styles from "./styles.module.css";

type TextOutlineInputProps = Partial<ControllerRenderProps> & {
  placeholder: string;
  label: string;
};

const TextOutlineInput = (props: TextOutlineInputProps) => {
  return (
    <div>
      <label htmlFor={props.label} />
      <input
        {...props}
        id={props.label}
        className={styles.textOutlineInput}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextOutlineInput;
