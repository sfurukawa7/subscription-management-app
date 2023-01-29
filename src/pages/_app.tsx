import "./globals.css";
import { Roboto } from "@next/font/google";
import type { AppProps } from "next/app";

import { library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { AuthProvider } from "@utils/authContext";

// import { AuthProvider } from "@utils/authContext";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const App = ({ Component, pageProps }: AppProps) => {
  library.add(fas);

  return (
    <main className={roboto.className}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </main>
  );
};

export default App;
