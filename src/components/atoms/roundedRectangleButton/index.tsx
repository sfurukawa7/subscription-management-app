import styles from "./styles.module.sass";

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
      className={`${styles["rounded-rectangle-button"]} ${props.className}`}
      onClick={() => props.handleClick()}
      type={props.type}
      disabled={props.disabled}>
      {props.content}
    </button>
  );
};

export default RoundedRectangleButton;
