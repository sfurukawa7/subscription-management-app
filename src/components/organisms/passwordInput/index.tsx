import { LoginForms } from "loginForms";
import { ControllerRenderProps } from "react-hook-form";

import LoginInput from "@molecules/loginInput";
import { useTranslation } from "@utils/useTranslation";

type PasswordInputProps = {
  field: ControllerRenderProps<LoginForms, "password">;
  className: string;
};

const PasswordInput = (props: PasswordInputProps) => {
  const { t } = useTranslation();

  return (
    <>
      <LoginInput
        prefix="fas"
        iconName="lock"
        placeholder={t.COMMON_PASSWORD}
        className={props.className}
        label="password"
        {...props.field}
      />
    </>
  );
};

export default PasswordInput;
