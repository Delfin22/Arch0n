/* eslint-disable react/prop-types */
import styles from "./ShopNav.module.css";
import { useNavigate } from "react-router-dom";
import Logo from "../pageNavigation/Logo";
function ShopNav({ isModerator, onIsModerator, userName, roles, state }) {
  const isAuthenticatedModerator = roles?.includes("Writer");
  const navigate = useNavigate();
  function handleAddItem() {
    navigate("/item-details", { state: { state: state } }); //i know...
  }
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        {isModerator && (
          <li>
            <h2 onClick={handleAddItem}>Dodaj Przedmiot</h2>
          </li>
        )}

        {isAuthenticatedModerator && (
          <li onClick={onIsModerator}>
            <h2>
              {isModerator ? "[Widok Użytkownika]" : "[Widok moderatora]"}
            </h2>
          </li>
        )}
        <div className={styles.user}>{userName}</div>
      </ul>
    </nav>
  );
}
export default ShopNav;
