import RoundedRectangleButton from "@atoms/roundedRectangleButton";
import Title from "@atoms/title";
import SignupInput from "@molecules/loginInput";

import { useSignupForm } from "./hooks";
import styles from "./styles.module.css";

type SignupFormOProps = {
  onAfterSignup: () => void;
};

const SignupForm = (props: SignupFormOProps) => {
  const { register, handleFormSubmit } = useSignupForm(props.onAfterSignup);

  return (
    <div className={styles.container}>
      <Title
        content="Sign Up"
        className={styles.title}
      />
      <TopLine />
      <form onSubmit={handleFormSubmit}>
        <EmailInput register={register} />
        <PasswordInput register={register} />
        <SignupButton />
      </form>
      <BottomLine />
    </div>
  );
};

const EmailInput = (props: { register: any }) => {
  return (
    <>
      <SignupInput
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
      <SignupInput
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

const SignupButton = () => {
  return (
    <>
      <RoundedRectangleButton
        content="Sign up"
        handleClick={() => {}}
        className={styles.signupButton}
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

export default SignupForm;
