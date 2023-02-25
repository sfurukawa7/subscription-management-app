const tCommon = {
  COMMON_EMAIL: "Email",
  COMMON_PASSWORD: "Password",
  COMMON_SERVICE: "Service",
  COMMON_PRICE: "Price",
  COMMON_PAYMENT_DATE: "Payment Date",
  COMMON_PAYMENT_FREQUENCY: "Payment Frequency",
  COMMON_GENRE: "Genre",
  COMMON_NOTE: "Note",
  COMMON_CANCEL: "Cancel",
  COMMON_DATE: "",
  COMMON_MONTH: "ヶ月",
  COMMON_YEAR: "年",
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
  ERROR_SERVICE_REQUIRED: "Service name is required",
  ERROR_PRICE_REQUIRED: "Price is required",
  ERROR_PAYMENT_DATE_REQUIRED: "Payment date is required",
  ERROR_FREQUENCY_REQUIRED: "Frequency is required",
};

const tHome = {
  HOME_PAYMENT_SCHEDULE: "Payment Schedule",
  HOME_SUBSCRIPTION: "Subscription",
  HOME_PAYMENT_DATE: "Date",
  HOME_SERVICE: "Service",
  HOME_PRICE: "Price",
  HOME_ADD_SUBSCRIPTION: "Add Subscription",
  HOME_FREQUENCE: "Frequence",
  HOME_EXAMPLE: "Amazon Prime",
  HOME_EXAMPLE_DATE: "Jan.14",
  HOME_EXAMPLE_PRICE: "￥4,800",
  HOME_EXAMPLE_FREQUENCE: "/month",
};

const tAddSubscription = {
  ADD_SUBSCRIPTION_HEADER: "Submane - Add Subscription",
  ADD_SUBSCRIPTION_TITLE: "Add Subscription",
  ADD_SUBSCRIPTION_BUTTON: "Add",
  ADD_SUBSCRIPTION_TERM_1MONTH: "1 month",
  ADD_SUBSCRIPTION_TERM_3MONTH: "3 months",
  ADD_SUBSCRIPTION_TERM_6MONTH: "6 months",
  ADD_SUBSCRIPTION_TERM_1YEAR: "1 year",
  ADD_SUBSCRIPTION_TERM_SELECT: "Select a term",
};

const t = { ...tCommon, ...tLogin, ...tSignUp, ...tError, ...tHome, ...tAddSubscription };

export default t;

export const days = Array.from(Array(31), (_, i) => i + 1);
