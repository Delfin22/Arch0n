import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/" className={styles.logoWrapper}>
      <img src="/logo.png" alt="Archon logo" className={styles.logo} />
      <h1>Archon</h1>
    </Link>
  );
}

export default Logo;
