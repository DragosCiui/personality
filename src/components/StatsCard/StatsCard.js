import { useEffect, useState } from "react";
import styles from "./StatsCard.module.css";

export default function StatsCard() {
  const [stats, setStats] = useState({
    name: "-",
    time_logged: "—",
    tasks_completed: "—",
  });

  useEffect(() => {
    fetch("/getStats.php")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error("Error loading stats", err));
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.avatar}>
        <div className={styles.initials}>JD</div>
      </div>
      <div className={styles.info}>
        <h2>Good Afternoon, {stats.name}!</h2>
        <p>
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>
      <div className={styles.metrics}>
        <div className={styles.metricBox}>
          <span>Time Logged </span>
          <strong>{stats.time_logged}</strong>
        </div>
        <div className={styles.metricBox}>
          <span>Tasks Completed </span>
          <strong>{stats.tasks_completed}</strong>
        </div>
      </div>
    </div>
  );
}
