import styles from "./styles.module.css";

// make type for props
type MediumTextProps = {
  content: string;
  className: string;
};

const MediumText = (props: MediumTextProps) => {
  return <span className={`${styles.mediumText} ${props.className}`}>{props.content}</span>;
};

export default MediumText;
