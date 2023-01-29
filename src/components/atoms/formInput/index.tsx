import styles from "./styles.module.css";

type FormInputProps = { placeholder: string; label: string; register: any };

const FormInput = (props: FormInputProps) => {
  return (
    <>
      <label htmlFor={props.label} />
      <input
        id={props.label}
        className={styles.formInput}
        placeholder={props.placeholder}
        {...props.register(props.label)}
      />
    </>
  );
};

export default FormInput;
