import styles from "./styles.module.css";

type TitleProps = { content: string; className: string };

const Title = (props: TitleProps) => {
  return <div className={`${styles.title} ${props.className}`}>{props.content}</div>;
};

export default Title;
