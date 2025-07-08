import { useEffect, useState } from "react";
import styles from "./Topbar.module.css";
import UserDropdown from "../UserDropdown/UserDropdown";

export default function TopBar() {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/getProfile.php");
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error("Failed to load user", err);
      }
    }

    fetchUser();
  }, []);

  if (!user) return null;

  return (
    <div className={styles.topBar}>
      <div className={styles.rightSide}>
        <span className={styles.bell}>🔔</span>
        <div
          className={styles.profile}
          onClick={() => setDropdownOpen((prev) => !prev)}
        >
          <div className={styles.avatar}>{user.name[0]}</div>
          <div className={styles.info}>
            <span className={styles.name}>{user.name}</span>
            <span className={styles.role}>Product Designer</span>
          </div>
          <span className={styles.caret}>▾</span>
        </div>

        {dropdownOpen && <UserDropdown />}
      </div>
    </div>
  );
}
