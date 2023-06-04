import Image from "next/image";

import styles from "./styles.module.sass";

type ProfileImageProps = {
  className?: string;
  dummyImage: string;
  width: number;
  height: number;
};

const ProfileImage = (props: ProfileImageProps) => {
  return (
    <>
      <Image
        src={props.dummyImage}
        width={props.width}
        height={props.height}
        className={`${styles["profile-image"]} ${props.className}`}
        alt="profileimage"
      />
    </>
  );
};

export default ProfileImage;
