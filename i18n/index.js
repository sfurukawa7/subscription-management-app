/* eslint-disable @typescript-eslint/no-var-requires */
var en = require("./translations.en.json");
var ja = require("./translations.ja.json");

const i18n = {
  translations: {
    en,
    ja,
  },
  defaultLang: "ja",
  useBrowserDefault: true,
};

module.exports = i18n;
