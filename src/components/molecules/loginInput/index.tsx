import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

import FormIcon from "@atoms/formIcon";
import FormInput from "@atoms/formInput";

import styles from "./styles.module.css";

type LoginInputProps = {
  iconPrefix: IconPrefix;
  iconName: IconName;
  placeholder: string;
  className: string;
};

const LoginInput = (props: LoginInputProps) => {
  return (
    <div className={`${styles.loginInput} ${props.className}`}>
      <FormInput placeholder={props.placeholder} />
      <FormIcon
        iconPrefix={props.iconPrefix}
        iconName={props.iconName}
      />
    </div>
  );
};

export default LoginInput;
