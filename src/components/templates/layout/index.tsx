import Head from "next/head";
import { ReactNode } from "react";

import styles from "./styles.module.sass";

import Footer from "src/components/organisms/footer";
import Header from "src/components/organisms/header";

type LayoutProps = {
  children: ReactNode;
  showNav?: boolean;
  title: string;
};

const Layout = ({ children, showNav, title }: LayoutProps) => {
  return (
    <div className={styles["wrapper"]}>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <header>
        {/* // showNavがtrueの時、Navigationが表示される */}
        <Header showNav={showNav} />
      </header>
      <main className={styles["container"]}>
        {children} {/* ページコンテンツはここに表示される */}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
