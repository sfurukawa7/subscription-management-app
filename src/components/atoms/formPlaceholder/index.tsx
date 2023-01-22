import styles from "./styles.module.css";

type FormPlaceholderProps = { content: string };

const FormPlaceholder = (props: FormPlaceholderProps) => {
  return <p className={styles.formPlaceholder}>{props.content}</p>;
};

export default FormPlaceholder;
