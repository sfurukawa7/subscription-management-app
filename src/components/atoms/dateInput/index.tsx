import { ControllerRenderProps } from "react-hook-form";

import styles from "./styles.module.sass";

type DateInputProps = Partial<ControllerRenderProps> & { label: string };

const DateInput = (props: DateInputProps) => {
  return (
    <div className={styles["container"]}>
      <label htmlFor={props.label} />
      <input
        {...props}
        type="date"
        id={props.label}
        className={styles["date-input"]}
      />
    </div>
  );
};

export default DateInput;
