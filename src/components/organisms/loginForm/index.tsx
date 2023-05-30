import { Controller } from "react-hook-form";

import ErrorMessage from "@atoms/errorMessage";
import RoundedRectangleButton from "@atoms/roundedRectangleButton";
import SmallText from "@atoms/smallText";
import Title from "@atoms/title";
import EmailInput from "@organisms/emailInput";
import PasswordInput from "@organisms/passwordInput";

import { useLogin } from "./hooks";
import styles from "./styles.module.sass";

const LoginForm = () => {
  const {
    t,
    control,
    errors,
    handleFormSubmit,
    isSubmitting,
    isResettingPassword,
    handlePasswordResetLink,
    handleLoginLink,
    handlePasswordReset,
  } = useLogin();

  return (
    <div className={styles["container"]}>
      <Title
        content={t("LOGIN.TITLE")}
        className={styles["title"]}
      />
      <TopLine />
      <form onSubmit={handleFormSubmit}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: t("ERROR.EMAIL_REQUIRED"),
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
        {isResettingPassword && (
          <PasswordResetButton
            content={t("LOGIN.PASSWORD_RESET.BUTTON")}
            disabled={isSubmitting}
            handleClick={handlePasswordReset}
          />
        )}
        {!isResettingPassword && (
          <>
            <Controller
              name="password"
              control={control}
              rules={{ required: t("ERROR.PASSWORD_REQUIRED ") }}
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
            <LoginButton
              content={t("LOGIN.BUTTON")}
              disabled={isSubmitting}
            />
          </>
        )}
      </form>
      {isResettingPassword ? (
        <LoginLink
          content={t("LOGIN.LINK")}
          handleClick={handleLoginLink}
        />
      ) : (
        <PasswordResetLink
          content={t("LOGIN.RESET_PASSWORD_LINK")}
          handleClick={handlePasswordResetLink}
        />
      )}
      <BottomLine />
      <SignUpLink content={t("LOGIN.SIGN_UP_LINK")} />
    </div>
  );
};

const PasswordResetButton = (props: {
  content: string;
  disabled: boolean;
  handleClick: () => void;
}) => {
  return (
    <>
      <RoundedRectangleButton
        content={props.content}
        handleClick={props.handleClick}
        className={styles["login-button"]}
        type="button"
        disabled={props.disabled}
      />
    </>
  );
};

const LoginButton = (props: { content: string; disabled: boolean }) => {
  return (
    <>
      <RoundedRectangleButton
        content={props.content}
        handleClick={() => {
          return;
        }}
        className={styles["login-button"]}
        type="submit"
        disabled={props.disabled}
      />
    </>
  );
};

const TopLine = () => {
  return <div className={styles["top-line"]} />;
};

const BottomLine = () => {
  return <div className={styles["bottom-line"]} />;
};

const LoginLink = (props: { content: string; handleClick: () => void }) => {
  return (
    <SmallText
      content={props.content}
      onClick={props.handleClick}
      className={styles["reset-password-link"]}
    />
  );
};

const PasswordResetLink = (props: { content: string; handleClick: () => void }) => {
  return (
    <SmallText
      content={props.content}
      onClick={props.handleClick}
      className={styles["reset-password-link"]}
    />
  );
};

const SignUpLink = (props: { content: string }) => {
  return (
    <SmallText
      content={props.content}
      href="/signup"
      className={styles["signUpLink"]}
    />
  );
};

export default LoginForm;
