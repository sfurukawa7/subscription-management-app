const tCommon = {
  COMMON_EMAIL: "Email",
  COMMON_PASSWORD: "Password",
};

const tLogin = {
  LOGIN_HEADER: "Submane - Login",
  LOGIN_TITLE: "Login",
  LOGIN_RESET_PASSWORD_LINK: "Forgot your password?",
  LOGIN_BUTTON: "Login",
  LOGIN_LINK: "Continue with email",
  LOGIN_SIGNUP_LINK: "Don’t have an account yet? Sign up",
  PASSWORD_RESET_BUTTON: "Send reset link",
  PASSWORD_RESET_MODAL_TITLE: "Reset Password",
  PASSWORD_RESET_MODAL_BODY:
    "An e-mail has been sent to your email address. Check the inbox of your email account.",
  PASSWORD_RESET_MODAL_BUTTON: "OK",
};

const tSignUp = {
  SIGNUP_HEADER: "Submane - Sign up",
  SIGNUP_TITLE: "Sign up",
  SIGNUP_BUTTON: "Sign up",
  SIGNUP_MODAL_TITLE: "Welcome!",
  SIGNUP_MODAL_BODY: "You’re all set up and ready to manage your favorite service!",
  SIGNUP_MODAL_BUTTON: "OK",
};

const tError = {
  ERROR_INVALID_EMAIL: "Invalid email address",
  ERROR_WRONG_PASSWORD: "Your password is incorrect",
  ERROR_EMAIL_REQUIRED: "Email is required",
  ERROR_PASSWORD_REQUIRED: "Password is required",
  ERROR_DEFAULT: "Unexpected error",
  ERROR_EMAIL_ALREADY_IN_USE: "This email is already in use",
  ERROR_PASSWORD_LENGTH: "Password must have at least 6 characters",
  ERROR_USER_NOT_FOUND: "This user is not found",
};

const t = { ...tCommon, ...tLogin, ...tSignUp, ...tError };

export default t;
