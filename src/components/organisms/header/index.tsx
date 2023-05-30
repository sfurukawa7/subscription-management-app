import Link from "next/link";

import styles from "./styles.module.sass";

import Navigation from "src/components/molecules/navigation";

type HeaderProps = {
  showNav?: boolean;
};

const Header = ({ showNav }: HeaderProps) => {
  return (
    <div className={styles["container"]}>
      {/* <Link href="https://submane.app/" className={styles.link}> */}
      <div className={styles["title"]}>
        <a>submane.app</a>
      </div>
      {/* </Link> */}

      <div
        style={{ display: showNav ? "block" : "none" }}
        className={styles["nav"]}>
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
