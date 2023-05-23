// import Link from "next/link";

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from "./styles.module.css";


const Navigation = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.iconContainer }>
        <FontAwesomeIcon icon={faBars} size="lg" color="white"/>
      </div>
    </nav>
  );
};

export default Navigation;
