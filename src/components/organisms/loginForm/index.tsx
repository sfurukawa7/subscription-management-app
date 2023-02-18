import { Controller } from "react-hook-form";

import ErrorMessage from "@atoms/errorMessage";
import RoundedRectangleButton from "@atoms/roundedRectangleButton";
import SmallText from "@atoms/smallText";
import Title from "@atoms/title";
import EmailInput from "@organisms/emailInput";
import PasswordInput from "@organisms/passwordInput";

import { useLogin } from "./hooks";
import styles from "./styles.module.css";

const LoginForm = () => {
  const {
    t,
    control,
    errors,
    handleFormSubmit,
    isSubmitting,
    isResettingEmail,
    handlePasswordResetLink,
    handleLoginLink,
    handlePasswordReset,
  } = useLogin();

  return (
    <div className={styles.container}>
      <Title
        content={t.LOGIN_TITLE}
        className={styles.title}
      />
      <TopLine />
      <form onSubmit={handleFormSubmit}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: t.ERROR_EMAIL_REQUIRED,
          }}
          render={({ field }) => (
            <EmailInput
              field={field}
              className={styles.emailInput}
            />
          )}
        />
        {errors.email && (
          <ErrorMessage
            content={errors.email.message ?? ""}
            className={styles.emailErrorMessage}
          />
        )}
        {isResettingEmail && (
          <PasswordResetButton
            content={t.PASSWORD_RESET_BUTTON}
            disabled={isSubmitting}
            handleClick={handlePasswordReset}
          />
        )}
        {!isResettingEmail && (
          <>
            <Controller
              name="password"
              control={control}
              rules={{ required: t.ERROR_PASSWORD_REQUIRED }}
              render={({ field }) => (
                <PasswordInput
                  field={field}
                  className={styles.passwordInput}
                />
              )}
            />
            {errors.password && (
              <ErrorMessage
                content={errors.password.message ?? ""}
                className={styles.passwordErrorMessage}
              />
            )}
            <LoginButton
              content={t.LOGIN_BUTTON}
              disabled={isSubmitting}
            />
          </>
        )}
      </form>
      {isResettingEmail ? (
        <LoginLink
          content={t.LOGIN_LINK}
          handleClick={handleLoginLink}
        />
      ) : (
        <PasswordResetLink
          content={t.LOGIN_RESET_PASSWORD_LINK}
          handleClick={handlePasswordResetLink}
        />
      )}
      <BottomLine />
      <SignUpLink content={t.LOGIN_SIGNUP_LINK} />
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
        className={styles.loginButton}
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
        className={styles.loginButton}
        type="submit"
        disabled={props.disabled}
      />
    </>
  );
};

const TopLine = () => {
  return <div className={styles.topLine} />;
};

const BottomLine = () => {
  return <div className={styles.bottomLine} />;
};

const LoginLink = (props: { content: string; handleClick: () => void }) => {
  return (
    <SmallText
      content={props.content}
      onClick={props.handleClick}
      className={styles.resetPasswordLink}
    />
  );
};

const PasswordResetLink = (props: { content: string; handleClick: () => void }) => {
  return (
    <SmallText
      content={props.content}
      onClick={props.handleClick}
      className={styles.resetPasswordLink}
    />
  );
};

const SignUpLink = (props: { content: string }) => {
  return (
    <SmallText
      content={props.content}
      href="/signup"
      className={styles.signUpLink}
    />
  );
};

export default LoginForm;
