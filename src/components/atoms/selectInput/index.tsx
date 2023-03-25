import { ControllerRenderProps } from "react-hook-form";

import styles from "./styles.module.css";

type SelectInputProps = Partial<ControllerRenderProps> & {
  label: string;
  options: { key: string; value: string }[];
};

const SelectInput = (props: SelectInputProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor={props.label} />
      <select
        {...props}
        id={props.label}
        className={styles.selectInput}>
        {props.options.map((i) => {
          return (
            <option
              key={i.key}
              value={i.value}>
              {i.key}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;
