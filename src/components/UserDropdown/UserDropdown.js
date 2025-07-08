import { useNavigate } from "react-router-dom";
import styles from "./UserDropdown.module.css";

export default function UserDropdown() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch("/logout.php"); // Call the PHP logout
      localStorage.removeItem("userLoggedIn"); // Clear login flag
      navigate("/login"); // Redirect to login
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={handleLogout} className={styles.logoutBtn}>
        Logout
      </button>
    </div>
  );
}
