import { LoginForms } from "loginForms";
import { ControllerRenderProps } from "react-hook-form";

import LoginInput from "@molecules/loginInput";

type EmailInputProps = {
  field: ControllerRenderProps<LoginForms, "email">;
  className: string;
};

const EmailInput = (props: EmailInputProps) => {
  return (
    <>
      <LoginInput
        iconPrefix="fas"
        iconName="user"
        placeholder="E-Mail"
        className={props.className}
        label="email"
        {...props.field}
      />
    </>
  );
};

export default EmailInput;
