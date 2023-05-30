import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { ControllerRenderProps } from "react-hook-form";

import FormIcon from "@atoms/formIcon";
import FormInput from "@atoms/formInput";

import styles from "./styles.module.sass";

type LoginInputProps = ControllerRenderProps & {
  prefix: IconPrefix;
  iconName: IconName;
  placeholder: string;
  className: string;
  label: string;
};

const LoginInput = (props: LoginInputProps) => {
  return (
    <div className={`${styles["login-input"]} ${props.className}`}>
      <FormInput
        {...props}
        placeholder={props.placeholder}
        label={props.label}
      />
      <FormIcon
        prefix={props.prefix}
        iconName={props.iconName}
      />
    </div>
  );
};

export default LoginInput;
