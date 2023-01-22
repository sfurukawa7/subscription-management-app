import styles from "./styles.module.css";

type FormInputProps = { placeholder: string };

const FormInput = (props: FormInputProps) => {
  return (
    <>
      <input
        className={styles.formInput}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default FormInput;
