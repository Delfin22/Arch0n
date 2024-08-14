import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/about">O nas</NavLink>
        </li>
        <li>
          <NavLink to="/coop">Współpraca</NavLink>
        </li>
        <li>
          <NavLink to="/login">Zaloguj</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default PageNav;
