const tCommon = {
  COMMON_EMAIL: "E-mail",
  COMMON_PASSWORD: "Password",
};

const tLogin = {
  LOGIN_TITLE: "Login",
  LOGIN_RESET_PASSWORD_LINK: "Forgot your password?",
  LOGIN_BUTTON: "Login",
  LOGIN_SIGNUP_LINK: "Don’t have an account yet? Sign up",
};

const tSignup = {
  SIGNUP_TITLE: "Sign up",
  SIGNUP_BUTTON: "Sign up",
  SIGNUP_MODAL_TITLE: "Welcome!",
  SIGNUP_MODAL_BODY: "You’re all set up and ready to manage your favorite service!",
  SIGNUP_MODAL_BUTTON: "OK",
};

const tError = {
  ERROR_INVALID_EMAIL: "Invalid e-mail address",
  ERROR_WRONG_PASSWORD: "Your password is incorrect",
  ERROR_EMAIL_REQUIRED: "E-mail is required",
  ERROR_PASSWORD_REQUIRED: "Password is required",
  ERROR_DEFAULT: "Unexpected error",
  ERROR_EMAIL_ALREADY_IN_USE: "This e-mail is already in use",
  ERROR_PASSWORD_LENGTH: "Password must have at least 6 characters",
  ERROR_USER_NOT_FOUND: "This user is not found",
};

const t = { ...tCommon, ...tLogin, ...tSignup, ...tError };

export default t;
