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
  const { control, errors, handleFormSubmit } = useLogin();

  return (
    <div className={styles.container}>
      <Title
        content="Login"
        className={styles.title}
      />
      <TopLine />
      <form onSubmit={handleFormSubmit}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "E-mail is required",
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
        <Controller
          name="password"
          control={control}
          rules={{ required: "Password is required" }}
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
        <LoginButton />
      </form>
      <ResetPasswordLink />
      <BottomLine />
      <SignUpLink />
    </div>
  );
};

const LoginButton = () => {
  return (
    <>
      <RoundedRectangleButton
        content="Login"
        handleClick={() => {
          return;
        }}
        className={styles.loginButton}
        type="submit"
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

const ResetPasswordLink = () => {
  return (
    <SmallText
      content="Forgot your password?"
      href="/resetPassword"
      className={styles.resetPasswordLink}
    />
  );
};

const SignUpLink = () => {
  return (
    <SmallText
      content="Don’t have an account yet? Sign up"
      href="/signup"
      className={styles.signUpLink}
    />
  );
};

export default LoginForm;
