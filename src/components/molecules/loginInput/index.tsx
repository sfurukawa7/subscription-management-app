import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { ControllerRenderProps } from "react-hook-form";

import FormIcon from "@atoms/formIcon";
import FormInput from "@atoms/formInput";

import styles from "./styles.module.css";

type LoginInputProps = ControllerRenderProps & {
  iconPrefix: IconPrefix;
  iconName: IconName;
  placeholder: string;
  className: string;
  label: string;
};

const LoginInput = (props: LoginInputProps) => {
  return (
    <div className={`${styles.loginInput} ${props.className}`}>
      <FormInput
        {...props}
        placeholder={props.placeholder}
        label={props.label}
      />
      <FormIcon
        iconPrefix={props.iconPrefix}
        iconName={props.iconName}
      />
    </div>
  );
};

export default LoginInput;
