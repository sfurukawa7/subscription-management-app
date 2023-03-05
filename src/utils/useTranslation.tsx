import { useRouter } from "next/router";

import en from "@locales/en";
import ja from "@locales/ja";

export const useTranslation = () => {
  const { locale } = useRouter();
  let t;
  switch (locale) {
    case "en":
      t = en;
      break;
    case "ja":
      t = ja;
      break;
    default:
      t = ja;
      break;
  }

  return { locale, t };
};
