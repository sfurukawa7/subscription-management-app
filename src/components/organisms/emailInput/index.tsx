import { LoginForms } from "loginForms";
import { ControllerRenderProps } from "react-hook-form";

import LoginInput from "@molecules/loginInput";

import { useEmailInput } from "./hooks";

type EmailInputProps = {
  field: ControllerRenderProps<LoginForms, "email">;
  className: string;
};

const EmailInput = (props: EmailInputProps) => {
  const { t } = useEmailInput();

  return (
    <>
      <LoginInput
        prefix="fas"
        iconName="user"
        placeholder={t("COMMON.EMAIL")}
        className={props.className}
        label="email"
        {...props.field}
      />
    </>
  );
};

export default EmailInput;
