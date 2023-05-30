import { ReactNode } from "react";

import styles from "./styles.module.css";

type SidebarItemProps = {
  icon: ReactNode;
  label: string;
};

const SidebarItem = (props: SidebarItemProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{props.icon}</div>
      <div className={styles.label}>{props.label}</div>
    </div >
  );
};

export default SidebarItem;
