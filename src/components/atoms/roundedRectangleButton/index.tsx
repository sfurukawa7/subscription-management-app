import styles from "./styles.module.css";

type RoundedRectangleButtonProps = {
  content: string;
  handleClick: () => void;
  className: string;
  type: "button" | "submit" | "reset";
  disabled: boolean;
};

const RoundedRectangleButton = (props: RoundedRectangleButtonProps) => {
  return (
    <button
      className={`${styles.roundedRectangleButton} ${props.className}`}
      onClick={() => props.handleClick()}
      type={props.type}
      disabled={props.disabled}>
      {props.content}
    </button>
  );
};

export default RoundedRectangleButton;
