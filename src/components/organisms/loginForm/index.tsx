import RoundedRectangleButton from "@atoms/roundedRectangelButton";
import SmallText from "@atoms/smallText";
import Title from "@atoms/title";
import LoginInput from "@molecules/loginInput";

import { useLogin } from "./hooks";
import styles from "./styles.module.css";

const LoginForm = () => {
  const { register, handleFormSubmit } = useLogin();

  return (
    <div className={styles.container}>
      <Title
        content="Login"
        className={styles.title}
      />
      <TopLine />
      <form onSubmit={handleFormSubmit}>
        <EmailInput register={register} />
        <PasswordInput register={register} />
        <LoginButton />
      </form>
      <ResetPasswordLink />
      <BottomLine />
      <SignUpLink />
    </div>
  );
};

const EmailInput = (props: { register: any }) => {
  return (
    <>
      <LoginInput
        iconPrefix="fas"
        iconName="user"
        placeholder="E-Mail"
        className={styles.emailInput}
        label="email"
        register={props.register}
      />
    </>
  );
};

const PasswordInput = (props: { register: any }) => {
  return (
    <>
      <LoginInput
        iconPrefix="fas"
        iconName="lock"
        placeholder="Password"
        className={styles.passwordInput}
        label="password"
        register={props.register}
      />
    </>
  );
};

const LoginButton = () => {
  return (
    <>
      <RoundedRectangleButton
        content="Login"
        handleClick={() => {}}
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
      href="/signUp"
      className={styles.signUpLink}
    />
  );
};

export default LoginForm;
