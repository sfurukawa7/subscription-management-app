import styles from "./styles.module.css";

type RoundedRectangleButtonProps = {
  content: string;
  handleClick: () => void;
  className: string;
  type: "button" | "submit" | "reset";
};

const RoundedRectangleButton = (props: RoundedRectangleButtonProps) => {
  return (
    <button
      className={`${styles.roundedRectangleButton} ${props.className}`}
      onClick={() => props.handleClick()}
      type={props.type}>
      {props.content}
    </button>
  );
};

export default RoundedRectangleButton;
