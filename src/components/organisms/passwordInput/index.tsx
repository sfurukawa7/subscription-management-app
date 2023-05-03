import { LoginForms } from "loginForms";
import { useTranslation } from "next-export-i18n";
import { ControllerRenderProps } from "react-hook-form";

import LoginInput from "@molecules/loginInput";

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
        placeholder={t("COMMON.PASSWORD")}
        className={props.className}
        label="password"
        {...props.field}
      />
    </>
  );
};

export default PasswordInput;
