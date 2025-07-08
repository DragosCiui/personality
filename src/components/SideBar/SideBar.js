import { useState } from "react";
import SidebarItem from "../SidebarItem/SidebarItem";
import styles from "./Sidebar.module.css";

const menuItems = [
  { icon: "🏠", label: "Home", path: "/" },
  { icon: "👤", label: "My Profile", path: "/profile" },
  { icon: "📁", label: "My Work", path: "/work" },
  { icon: "📈", label: "My Growth", path: "/growth" },
  { icon: "❤️", label: "My Benefits", path: "/benefits" },
  { icon: "🏢", label: "Company Hub", path: "/hub" },
  { icon: "⚙️", label: "Settings", path: "/settings" },
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
          {menuItems.map((item) => (
            <SidebarItem
              key={item.path}
              icon={item.icon}
              label={item.label}
              path={item.path}
              collapsed={collapsed}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
