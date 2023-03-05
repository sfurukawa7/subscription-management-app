const tCommon = {
  COMMON_EMAIL: "メールアドレス",
  COMMON_PASSWORD: "パスワード",
  COMMON_SERVICE: "サービス名",
  COMMON_PRICE: "金額",
  COMMON_PAYMENT_DATE: "支払日",
  COMMON_NEXT_PAYMENT_DATE: "次の支払日",
  COMMON_PAYMENT_FREQUENCY: "支払頻度",
  COMMON_GENRE: "ジャンル",
  COMMON_REMARK: "備考",
  COMMON_CANCEL: "キャンセル",
};

const tLogin = {
  LOGIN_HEADER: "サブマネ - ログイン",
  LOGIN_TITLE: "ログイン",
  LOGIN_RESET_PASSWORD_LINK: "パスワードを忘れた場合",
  LOGIN_BUTTON: "続ける",
  LOGIN_LINK: "メールアドレスでログイン",
  LOGIN_SIGNUP_LINK: "アカウントを作成",
  PASSWORD_RESET_BUTTON: "リセットメール送信",
  PASSWORD_RESET_MODAL_TITLE: "メール送信完了",
  PASSWORD_RESET_MODAL_BODY:
    "パスワード再設定のメールを送信しました．メールのリンクから再設定を行ってください．",
  PASSWORD_RESET_MODAL_BUTTON: "OK",
};

const tSignUp = {
  SIGNUP_HEADER: "サブマネ - サインアップ",
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
  ERROR_SERVICE_REQUIRED: "サービス名を入力してください",
  ERROR_PRICE_REQUIRED: "金額を入力してください",
  ERROR_PAYMENT_DATE_REQUIRED: "支払日を入力してください",
  ERROR_FREQUENCY_REQUIRED: "支払頻度を選択してください",
  ERROR_GENRE_REQUIRED: "ジャンルを入力してください",
  ERROR_FAILED_TO_ADD: "サブスクの追加に失敗しました",
  ERROR_FAILED_TO_FETCH: "サブスクの取得に失敗しました",
};

const tHome = {
  ADD_SUBSCRIPTION: "新規追加",
  HOME_PAYMENT_SCHEDULE: "支払予定日",
  HOME_SUBSCRIPTION: "サブスク一覧",
  HOME_PAYMENT_DATE: "日付",
  HOME_SERVICE: "サービス名",
  HOME_PRICE: "金額",
  HOME_ADD_SUBSCRIPTION: "サブスクを追加",
  HOME_frequency: "頻度",
  HOME_EXAMPLE: "Amazon Prime",
  HOME_EXAMPLE_DATE: "Jan.14",
  HOME_EXAMPLE_PRICE: "￥4,800",
  HOME_EXAMPLE_frequency: "/月",
  HOME_CLOSE_BUTTON: "閉じる",
  HOME_EDIT_BUTTON: "編集",
  HOME_DELETE_BUTTON: "削除",
};

const tAddSubscription = {
  ADD_SUBSCRIPTION_HEADER: "サブマネ - サブスク追加",
  ADD_SUBSCRIPTION_TITLE: "サブスク追加",
  ADD_SUBSCRIPTION_BUTTON: "追加",
  ADD_SUBSCRIPTION_TERM_1MONTH: "1ヶ月",
  ADD_SUBSCRIPTION_TERM_3MONTH: "3ヶ月",
  ADD_SUBSCRIPTION_TERM_6MONTH: "6ヶ月",
  ADD_SUBSCRIPTION_TERM_1YEAR: "1年",
  ADD_SUBSCRIPTION_TERM_SELECT: "支払頻度を選択",
};

const tSubscriptionDetail = {
  DETAIL_SUBSCRIPTION_HEADER: "サブマネ - サブスク詳細",
  DETAIL_SUBSCRIPTION_TITLE: "サブスク詳細",
  DETAIL_SUBSCRIPTION_BUTTON: "閉じる",
};

const t = {
  ...tCommon,
  ...tLogin,
  ...tSignUp,
  ...tError,
  ...tHome,
  ...tAddSubscription,
  ...tSubscriptionDetail,
};

export default t;
