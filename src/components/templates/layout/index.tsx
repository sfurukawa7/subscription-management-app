import Head from "next/head";
import { ReactNode } from "react";

import styles from "./styles.module.css";

import Footer from "src/components/organisms/footer";
import Header from "src/components/organisms/header";
import Sidebar from "src/components/organisms/sidebar";

type LayoutProps = {
  children: ReactNode;
  showNav?: boolean;
  showSidebar?: boolean;
  title: string;
};

const Layout = ({ children, showNav, showSidebar, title }: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
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
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <Sidebar isVisible={showSidebar}/>
        </aside>
        <main className={styles.main}>
          {children} {/* ページコンテンツはここに表示される */}
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
