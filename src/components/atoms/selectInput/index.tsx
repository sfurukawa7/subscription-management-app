import { ControllerRenderProps } from "react-hook-form";

import styles from "./styles.module.css";

type SelectInputProps = Partial<ControllerRenderProps> & { label: string; options: string[] };

const SelectInput = (props: SelectInputProps) => {
  return (
    <div>
      <label htmlFor={props.label} />
      <select
        {...props}
        id={props.label}
        className={styles.selectInput}>
        {props.options.map((i) => {
          return (
            <option
              key={i}
              value={i}>
              {i}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;
