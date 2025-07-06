import { useState } from "react";
import Sidebar from "../../components/SideBar/SideBar";
import StatsCard from "../../components/StatsCard/StatsCard";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.container}>
      <Sidebar
        collapsed={collapsed}
        toggleCollapsed={() => setCollapsed(!collapsed)}
      />
      <main className={styles.main}>
        <StatsCard />
      </main>
    </div>
  );
}
