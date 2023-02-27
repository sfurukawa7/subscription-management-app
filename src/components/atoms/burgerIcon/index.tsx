import { IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getFontAwesomeIcon } from "@utils/getFaIcon";

import styles from "./styles.module.css";

type BurgerIconProps = { prefix: IconPrefix; onClick?: () => void };

const BurgerIcon = (props: BurgerIconProps) => {
  return (
    <>
      <FontAwesomeIcon
        icon={getFontAwesomeIcon(props.prefix, "bars")}
        className={styles.icon}
        onClick={() => props.onClick ?? {}}
      />
    </>
  );
};

export default BurgerIcon;
