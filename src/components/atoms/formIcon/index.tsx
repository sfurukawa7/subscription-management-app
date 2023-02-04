import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getFontAwesomeIcon } from "@utils/getFaIcon";

import styles from "./styles.module.css";

type FormIconProps = { prefix: IconPrefix; iconName: IconName };

const FormIcon = (props: FormIconProps) => {
  return (
    <>
      <FontAwesomeIcon
        icon={getFontAwesomeIcon(props.prefix, props.iconName)}
        className={styles.icon}
      />
    </>
  );
};

export default FormIcon;
