import "./globals.css";
import { Roboto } from "@next/font/google";
import type { AppProps } from "next/app";

import { library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { fas } from "@fortawesome/free-solid-svg-icons";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
const App = ({ Component, pageProps }: AppProps) => {
  library.add(fas);

  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
