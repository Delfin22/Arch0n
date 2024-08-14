import styles from "./LoginPage.module.css";
import BGvideo from "../assets/loginBG.mp4";
import PageNav from "../components/pageNavigation/PageNav";
import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function LoginPage() {
  const [register, setRegister] = useState(false);
  function handleRegister() {
    setRegister((r) => !r);
  }
  return (
    <motion.div
      className="wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <PageNav />
      {register ? (
        <div>
          <div className={styles.content}>
            <form>
              <div>
                <input type="email" placeholder="email" />
              </div>
              <div>
                <input type="password" placeholder="password" />
              </div>
              <div>
                <input type="password" placeholder="retype password" />
              </div>
            </form>
            <div>
              <button onClick={handleRegister}>Mam już konto</button>
              <button>Utwórz konto</button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.content}>
          <form>
            <div>
              <input type="email" placeholder="email" />
            </div>
            <div>
              <input type="password" placeholder="password" />
            </div>
          </form>
          <div>
            <NavLink to="/shop">
              <button>Zaloguj</button>
            </NavLink>
            <button onClick={handleRegister}>Zarejestruj</button>
          </div>
        </div>
      )}
      <video src={BGvideo} autoPlay loop muted preload="auto" />
    </motion.div>
  );
}
export default LoginPage;
