import RoundedRectangleButton from "@atoms/roundedRectangelButton";
import SmallText from "@atoms/smallText";
import Title from "@atoms/title";
import LoginInput from "@molecules/loginInput";

import styles from "./styles.module.css";

const LoginForm = () => {
  return (
    <div className={styles.container}>
      <Title
        content="Login"
        className={styles.title}
      />
      <TopLine />
      <EmailInput />
      <PasswordInput />
      <ResetPasswordLink />
      <LoginButton />
      <BottomLine />
      <SignUpLink />
    </div>
  );
};

const EmailInput = () => {
  return (
    <>
      <LoginInput
        iconPrefix="fas"
        iconName="user"
        placeholder="E-Mail"
        className={styles.emailInput}
      />
    </>
  );
};

const PasswordInput = () => {
  return (
    <>
      <LoginInput
        iconPrefix="fas"
        iconName="lock"
        placeholder="Password"
        className={styles.passwordInput}
      />
    </>
  );
};

const LoginButton = () => {
  return (
    <>
      <RoundedRectangleButton
        content="Login"
        handleClick={() => console.log("Hello")}
        className={styles.loginButton}
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
      href="/signUp"
      className={styles.signUpLink}
    />
  );
};

export default LoginForm;
