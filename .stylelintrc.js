module.exports = {
  extends: ["stylelint-config-recess-order", "stylelint-config-sass-guidelines"],
  customSyntax: "postcss-sass",
  rules: {
    "selector-class-pattern": "^[a-z][a-zA-Z0-9-]+$", //クラス名にキャメルケースも許容
    "selector-id-pattern": "^[A-Z][a-zA-Z0-9_-]+$", //id名にキャメルケースも許容
    "color-function-notation": "legacy",
    "function-no-unknown": [
      true, //map.getやcolor.scaleがエラーにならないように
      {
        ignoreFunctions: ["/^map\\..+/", "/^color\\..+/"],
      },
    ],
    "at-rule-empty-line-before": [
      //余白、改行の設定
      "always",
      {
        except: ["blockless-after-blockless", "first-nested"],
        ignore: ["after-comment"],
      },
    ],
    // "scss/dollar-variable-pattern": "^(([a-z][a-zA-Z0-9_]+)|([a-z][a-z0-9]*)(-[a-zA-Z0-9_]+)*)$", // 互換性のためケバブケース強制は除去
    // "scss/at-mixin-pattern": "^(([a-z][a-zA-Z0-9_]+)|([a-z][a-z0-9]*)(-[a-zA-Z0-9_]+)*)$", // 互換性のためケバブケース強制は除去
  },
  ignoreFiles: ["**/node_modules/**"],
};
