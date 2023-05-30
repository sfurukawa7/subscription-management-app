import styles from "./styles.module.sass";

// make type for props
type MediumTextProps = {
  content: string;
  className: string;
};

const MediumText = (props: MediumTextProps) => {
  return <span className={`${styles["medium-text"]} ${props.className}`}>{props.content}</span>;
};

export default MediumText;
