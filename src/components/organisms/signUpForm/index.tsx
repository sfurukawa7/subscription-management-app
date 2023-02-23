import { Controller } from "react-hook-form";

import ErrorMessage from "@atoms/errorMessage";
import RoundedRectangleButton from "@atoms/roundedRectangleButton";
import Title from "@atoms/title";
import EmailInput from "@organisms/emailInput";
import PasswordInput from "@organisms/passwordInput";

import { useSignUpForm } from "./hooks";
import styles from "./styles.module.css";

const SignUpForm = () => {
  const { control, errors, handleFormSubmit, t, isSubmitting } = useSignUpForm();

  return (
    <div className={styles.container}>
      <Title
        content={t.SIGNUP_TITLE}
        className={styles.title}
      />
      <TopLine />
      <form onSubmit={handleFormSubmit}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: t.ERROR_EMAIL_REQUIRED,
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: t.ERROR_INVALID_EMAIL,
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
            required: t.ERROR_PASSWORD_REQUIRED,
            minLength: {
              value: 6,
              message: t.ERROR_PASSWORD_LENGTH,
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
        <SignUpButton
          content={t.SIGNUP_BUTTON}
          disabled={isSubmitting}
        />
      </form>
      <BottomLine />
    </div>
  );
};

const SignUpButton = (props: { content: string; disabled: boolean }) => {
  return (
    <>
      <RoundedRectangleButton
        content={props.content}
        handleClick={() => {
          return;
        }}
        className={styles.signupButton}
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

export default SignUpForm;
