import styles from "./ShopNav.module.css";
import Logo from "../pageNavigation/Logo";
import { NavLink } from "react-router-dom";
function ShopNav({ isModerator, onIsModerator }) {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <h2>Koszyk</h2>
        </li>
        {isModerator && (
          <li>
            <h2>Dodaj Przedmiot</h2>
          </li>
        )}
        <li onClick={onIsModerator}>
          <h2>{isModerator ? "[Widok Użytkownika]" : "[Widok moderatora]"}</h2>
        </li>
        <div className={styles.user}>ArchonUserName</div>
      </ul>
    </nav>
  );
}
export default ShopNav;
