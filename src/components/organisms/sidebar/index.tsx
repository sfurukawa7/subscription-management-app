import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SidebarItem from "@atoms/sidebarItem";
import { getFontAwesomeIcon } from "@utils/getFaIcon";

import styles from "./styles.module.css";


type SidebarProps = {
  isVisible?: boolean;
};

const Sidebar = ({ isVisible }: SidebarProps) => {
  if (!isVisible) return null;

  return (
    <div className={styles.l_sidebar}>
      <div>
        <div className={styles.sidebaritem}>
          <SidebarItem
            icon={<FontAwesomeIcon icon={getFontAwesomeIcon('fas', 'home')} />}
            label="Home"
          />
        </div>
        <div className={styles.sidebaritem}>
          <SidebarItem
            icon={<FontAwesomeIcon icon={getFontAwesomeIcon('fas', 'chart-bar')} />}
            label="Graph"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
