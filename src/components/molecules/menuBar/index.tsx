import BurgerIcon from "@atoms/burgerIcon";

import styles from "./styles.module.sass";

type MenuBarProps = {
  className: string;
  onClick?: () => void;
};

const MenuBar = (props: MenuBarProps) => {
  return (
    <div className={`${styles["menu-bar"]} ${props.className}`}>
      <BurgerIcon
        prefix="fas"
        onClick={props.onClick}
      />
    </div>
  );
};

export default MenuBar;
