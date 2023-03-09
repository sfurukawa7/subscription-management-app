import styles from "./styles.module.css";

type RectangleButtonProps = {
  content: string;
  handleClick?: () => void;
  className: string;
  type: "button" | "submit" | "reset";
  form?: string;
};

const RectangleButton = (props: RectangleButtonProps) => {
  return (
    <button
      className={`${styles.rectangleButton} ${props.className}`}
      onClick={props.handleClick}
      type={props.type}
      form={props.form}>
      {props.content}
    </button>
  );
};

export default RectangleButton;
