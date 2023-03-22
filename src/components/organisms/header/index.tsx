import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ProfileImage from "@atoms/profileImage";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <FontAwesomeIcon
          icon={faBars}
          style={{ fontSize: "xx-large", marginTop: "14px", marginLeft: "20px", color: "white" }}
        />
      </div>
    </>
  );
};

export default Header;
