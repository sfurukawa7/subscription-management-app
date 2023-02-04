import { ControllerRenderProps } from "react-hook-form";

import styles from "./styles.module.css";

type FormInputProps = ControllerRenderProps & { placeholder: string; label: string };

const FormInput = (props: FormInputProps) => {
  return (
    <>
      <label htmlFor={props.label} />
      <input
        {...props}
        type={props.label === "password" ? "password" : "text"}
        id={props.label}
        className={styles.formInput}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default FormInput;
