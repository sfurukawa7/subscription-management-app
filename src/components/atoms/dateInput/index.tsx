import { ControllerRenderProps } from "react-hook-form";

import styles from "./styles.module.css";

type DateInputProps = Partial<ControllerRenderProps> & { label: string };

const DateInput = (props: DateInputProps) => {
  return (
    <div>
      <label htmlFor={props.label} />
      <input
        {...props}
        type="date"
        id={props.label}
        className={styles.dateInput}
      />
    </div>
  );
};

export default DateInput;
