import styles from "./styles.module.sass";

type DescriptionProps = {
  content: string;
  className?: string;
};

const Description = (props: DescriptionProps) => {
  return (
    <>
      <span className={`${styles["description"]} ${props.className}`}>{props.content}</span>
    </>
  );
};

export default Description;
