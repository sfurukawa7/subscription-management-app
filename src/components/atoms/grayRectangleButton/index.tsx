import styles from "./styles.module.css";

type GrayRectangleButtonProps = {
  content: string;
  handleClick: () => void;
  className: string;
  type: "button" | "submit" | "reset";
};

const GrayRectangleButton = (props: GrayRectangleButtonProps) => {
  return (
    <button
      className={`${styles.grayRectangleButton} ${props.className}`}
      onClick={() => props.handleClick()}
      type={props.type}>
      {props.content}
    </button>
  );
};

export default GrayRectangleButton;
