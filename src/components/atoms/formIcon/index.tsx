import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getFontAwesomeIcon } from "@utils/getFaIcon";

import styles from "./styles.module.css";

type FormIconProps = { iconPrefix: IconPrefix; iconName: IconName };

const FormIcon = (props: FormIconProps) => {
  return (
    <>
      <FontAwesomeIcon
        icon={getFontAwesomeIcon(props.iconPrefix, props.iconName)}
        className={styles.icon}
      />
    </>
  );
};

export default FormIcon;
