import styles from "./styles.module.css";

type ErrorMessageProps = {
  content: string;
  className: string;
};
const ErrorMessage = (props: ErrorMessageProps) => {
  return <p className={`${styles.errorMessage} ${props.className}`}>{props.content}</p>;
};

export default ErrorMessage;
