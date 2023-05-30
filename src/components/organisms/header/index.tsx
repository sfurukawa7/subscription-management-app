import Link from "next/link";

import styles from "./styles.module.css";

import Navigation from "src/components/molecules/navigation";

type HeaderProps = {
  showNav?: boolean;
};

const Header = ({ showNav }: HeaderProps) => {
  return (
    <div className={styles.container}>
      <div style={{ display: showNav ? "block" : "none" }} className={styles.nav}>
        <Navigation />
      </div>
      {/* <Link href="https://submane.app/" className={styles.link}> */}
      <div className={styles.title}>
        <a>submane</a>
      </div>
      {/* </Link> */}


    </div>
  );
};

export default Header;
