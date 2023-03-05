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
          style={{ fontSize: "xx-large", marginTop: "14px", marginLeft: "20px" }}
        />
        <ProfileImage
          dummyImage="https://profileimage-bucket-subscripiton.s3.ap-northeast-1.amazonaws.com/13856689711822.jpg"
          width={40}
          height={40}
        />
      </div>
    </>
  );
};

export default Header;
