import "./globals.css";
import { Noto_Sans_JP } from "@next/font/google";
import type { AppProps } from "next/app";

import { library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { GetStaticPaths } from "next";

import { AuthProvider } from "src/context/authContext";
import { CommonProvider } from "src/context/commonContext";

const notoSansJp = Noto_Sans_JP({ weight: "400", preload: false });

const App = ({ Component, pageProps }: AppProps) => {
  library.add(fas);

  return (
    <main className={notoSansJp.className}>
      <AuthProvider>
        <CommonProvider>
          <Component {...pageProps} />
        </CommonProvider>
      </AuthProvider>
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const langs = ["en", "ja"];

  const paths = langs.map((lang) => ({
    params: { lang },
  }));

  return { paths, fallback: false };
};

export default App;
