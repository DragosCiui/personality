import ProfileData from "../../components/ProfileData.js/ProfileData";
import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <div className={styles.container}>
      <h1>My Profile</h1>
      <ProfileData />
    </div>
  );
}
