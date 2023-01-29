import styles from "./styles.module.css";

type RoundedRectangleButtonProps = { content: string; handleClick: () => void; className: string };

const RoundedRectangleButton = (props: RoundedRectangleButtonProps) => {
  return (
    <button
      className={`${styles.roundedRectangleButton} ${props.className}`}
      onClick={() => props.handleClick()}>
      {props.content}
    </button>
  );
};

export default RoundedRectangleButton;
