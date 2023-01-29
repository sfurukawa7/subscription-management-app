import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

import FormIcon from "@atoms/formIcon";
import FormInput from "@atoms/formInput";

import styles from "./styles.module.css";

type LoginInputProps = {
  iconPrefix: IconPrefix;
  iconName: IconName;
  placeholder: string;
  className: string;
  label: string;
  register: any;
};

const LoginInput = (props: LoginInputProps) => {
  return (
    <div className={`${styles.loginInput} ${props.className}`}>
      <FormInput
        placeholder={props.placeholder}
        register={props.register}
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
