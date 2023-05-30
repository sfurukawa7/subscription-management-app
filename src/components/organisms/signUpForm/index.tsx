import { Controller } from "react-hook-form";

import ErrorMessage from "@atoms/errorMessage";
import RoundedRectangleButton from "@atoms/roundedRectangleButton";
import Title from "@atoms/title";
import EmailInput from "@organisms/emailInput";
import PasswordInput from "@organisms/passwordInput";

import { useSignUpForm } from "./hooks";
import styles from "./styles.module.sass";

const SignUpForm = () => {
  const { control, errors, handleFormSubmit, t, isSubmitting } = useSignUpForm();

  return (
    <div className={styles["container"]}>
      <Title
        content={t("SIGN_UP.TITLE")}
        className={styles["title"]}
      />
      <TopLine />
      <form onSubmit={handleFormSubmit}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: t("ERROR.EMAIL_REQUIRED"),
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: t("ERROR.INVALID_EMAIL"),
            },
          }}
          render={({ field }) => (
            <EmailInput
              field={field}
              className={styles["email-input"]}
            />
          )}
        />
        {errors.email && (
          <ErrorMessage
            content={errors.email.message ?? ""}
            className={styles["email-error-message"]}
          />
        )}
        <Controller
          name="password"
          control={control}
          rules={{
            required: t("ERROR.PASSWORD_REQUIRED"),
            minLength: {
              value: 6,
              message: t("ERROR.PASSWORD_LENGTH"),
            },
          }}
          render={({ field }) => (
            <PasswordInput
              field={field}
              className={styles["password-input"]}
            />
          )}
        />
        {errors.password && (
          <ErrorMessage
            content={errors.password.message ?? ""}
            className={styles["password-error-message"]}
          />
        )}
        <SignUpButton
          content={t("SIGN_UP.BUTTON")}
          disabled={isSubmitting}
        />
      </form>
      <BottomLine />
    </div>
  );
};

const SignUpButton = (props: { content: string; disabled: boolean }) => {
  return (
    <RoundedRectangleButton
      content={props.content}
      handleClick={() => {
        return;
      }}
      className={styles["signup-button"]}
      type="submit"
      disabled={props.disabled}
    />
  );
};

const TopLine = () => {
  return <div className={styles["top-line"]} />;
};

const BottomLine = () => {
  return <div className={styles["bottom-line"]} />;
};

export default SignUpForm;
