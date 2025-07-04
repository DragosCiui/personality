import styles from "./SideBar.module.css";
import { useState } from "react";

const menuItems = [
  { icon: "🏠", label: "Home" },
  { icon: "👤", label: "My Profile" },
  { icon: "📁", label: "My Work" },
  { icon: "📈", label: "My Growth" },
  { icon: "❤️", label: "My Benefits" },
  { icon: "🏢", label: "Company Hub" },
  { icon: "⚙️", label: "Settings" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}>
      <div className={styles.header}>
        {!collapsed && <div className={styles.logo}>Personality</div>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={styles.toggleBtn}
          aria-label="Toggle sidebar"
        >
          {collapsed ? "→" : "←"}
        </button>
      </div>

      <nav>
        <ul>
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.label}>{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
