import { useState } from "react";
import Sidebar from "./components/SideBar/SideBar";
import StatsCard from "./components/StatsCard/StatsCard"; // <- import the new component
import styles from "./App.module.css";

function App() {
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

export default App;
