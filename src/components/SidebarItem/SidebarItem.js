import { NavLink } from "react-router-dom";
import styles from "./SidebarItem.module.css";

export default function SidebarItem({ icon, label, path, collapsed }) {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        <span className={styles.icon}>{icon}</span>
        {!collapsed && <span className={styles.label}>{label}</span>}
      </NavLink>
    </li>
  );
}
