import { LoginForms } from "loginForms";
import { ControllerRenderProps } from "react-hook-form";

import LoginInput from "@molecules/loginInput";

type PasswordInputProps = {
  field: ControllerRenderProps<LoginForms, "password">;
  className: string;
};

const PasswordInput = (props: PasswordInputProps) => {
  return (
    <>
      <LoginInput
        iconPrefix="fas"
        iconName="lock"
        placeholder="Password"
        className={props.className}
        label="password"
        {...props.field}
      />
    </>
  );
};

export default PasswordInput;
