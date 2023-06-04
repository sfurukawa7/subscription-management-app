import styles from "./styles.module.sass";

type GrayRectangleButtonProps = {
  content: string;
  handleClick: () => void;
  className: string;
  type: "button" | "submit" | "reset";
};

const GrayRectangleButton = (props: GrayRectangleButtonProps) => {
  return (
    <button
      className={`${styles["gray-rectangle-button"]} ${props.className}`}
      onClick={() => props.handleClick()}
      type={props.type}>
      {props.content}
    </button>
  );
};

export default GrayRectangleButton;
