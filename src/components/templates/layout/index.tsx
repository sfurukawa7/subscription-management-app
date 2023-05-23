import { ReactNode } from 'react';

import styles from "./styles.module.css";

import Footer from 'src/components/organisms/footer';
import Header from 'src/components/organisms/header';


type LayoutProps = {
    children: ReactNode;
    showNav? : boolean;
}

const Layout = ({ children, showNav }: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <header>
        {/* // showNavがtrueの時、Navigationが表示される */}
        <Header showNav={showNav}/>
      </header>
      <main className={styles.container}>
        {children} {/* ページコンテンツはここに表示される */}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
