import styles from "./styles.module.sass";

type TitleProps = { content: string; className: string; isBold?: boolean };

const Title = (props: TitleProps) => {
  return (
    <div className={`${styles["title"]} ${props.className} ${props.isBold && styles.bold}`}>
      {props.content}
    </div>
  );
};

export default Title;
