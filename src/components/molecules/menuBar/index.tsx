import BurgerIcon from "@atoms/burgerIcon";

import styles from "./styles.module.css";

type MenuBarProps = {
  className: string;
  onClick?: () => void;
};

const MenuBar = (props: MenuBarProps) => {
  return (
    <div className={`${styles.menuBar} ${props.className}`}>
      <BurgerIcon
        prefix="fas"
        onClick={props.onClick}
      />
    </div>
  );
};

export default MenuBar;
