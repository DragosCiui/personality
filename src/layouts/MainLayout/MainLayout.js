import { Outlet } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import TopBar from "../../components/Topbar/Topbar";
import styles from "./MainLayout.module.css";

export default function MainLayout({ children }) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
}
