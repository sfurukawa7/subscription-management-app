import { Controller } from "react-hook-form";

import ErrorMessage from "@atoms/errorMessage";
import RoundedRectangleButton from "@atoms/roundedRectangleButton";
import Title from "@atoms/title";
import EmailInput from "@organisms/emailInput";
import PasswordInput from "@organisms/passwordInput";

import { useSignupForm } from "./hooks";
import styles from "./styles.module.css";

type SignupFormOProps = {
  onAfterSignup: () => void;
};

const SignupForm = (props: SignupFormOProps) => {
  const { control, errors, handleFormSubmit } = useSignupForm(props.onAfterSignup);

  return (
    <div className={styles.container}>
      <Title
        content="Sign Up"
        className={styles.title}
      />
      <TopLine />
      <form onSubmit={handleFormSubmit}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "E-mail is required",
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid e-mail address",
            },
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
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must have at least 6 characters",
            },
          }}
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
        <SignupButton />
      </form>
      <BottomLine />
    </div>
  );
};

const SignupButton = () => {
  return (
    <>
      <RoundedRectangleButton
        content="Sign up"
        handleClick={() => {
          return;
        }}
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
