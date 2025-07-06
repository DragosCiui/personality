import { useEffect, useState } from "react";
import styles from "./ProfileData.module.css";

export default function ProfileData() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/getProfile.php");
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error("Failed to fetch user data:", err);
      }
    }

    fetchUser();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className={styles.card}>
      <div className={styles.banner}></div>

      <div className={styles.profile}>
        <div className={styles.avatar}>{user.name[0]}</div>
        <div>
          <h2 className={styles.name}>{user.name}</h2>
        </div>
      </div>

      <div className={styles.info}>
        <div>
          <p className={styles.label}>📧 Email</p>
          <p className={styles.value}>{user.email}</p>
        </div>
      </div>
    </div>
  );
}
