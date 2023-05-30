import styles from "./styles.module.sass";

type ErrorMessageProps = {
  content: string;
  className: string;
};
const ErrorMessage = (props: ErrorMessageProps) => {
  return <p className={`${styles["error-message"]} ${props.className}`}>{props.content}</p>;
};

export default ErrorMessage;
