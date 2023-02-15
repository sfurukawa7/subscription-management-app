const tCommon = {
  COMMON_EMAIL: "メールアドレス",
  COMMON_PASSWORD: "パスワード",
};

const tLogin = {
  LOGIN_TITLE: "ログイン",
  LOGIN_RESET_PASSWORD_LINK: "パスワードを忘れた場合",
  LOGIN_BUTTON: "続ける",
  LOGIN_SIGNUP_LINK: "アカウントを作成",
};

const tSignup = {
  SIGNUP_TITLE: "アカウント作成",
  SIGNUP_BUTTON: "作成する",
  SIGNUP_MODAL_TITLE: "作成完了",
  SIGNUP_MODAL_BODY:
    "アカウントの準備ができましたのでOKボタンを押してログイン画面に進んでください!",
  SIGNUP_MODAL_BUTTON: "OK",
};

const tError = {
  ERROR_INVALID_EMAIL: "メールアドレスが無効です",
  ERROR_WRONG_PASSWORD: "パスワードが間違っています",
  ERROR_DEFAULT: "想定外のエラーです",
  ERROR_EMAIL_ALREADY_IN_USE: "このメールアドレスは既に使用されています",
  ERROR_EMAIL_REQUIRED: "メールアドレスを入力してください",
  ERROR_PASSWORD_REQUIRED: "パスワードを入力してください",
  ERROR_PASSWORD_LENGTH: "パスワードは6文字以上である必要があります",
  ERROR_USER_NOT_FOUND: "存在しないユーザーアカウントです",
};

const t = { ...tCommon, ...tLogin, ...tSignup, ...tError };

export default t;
