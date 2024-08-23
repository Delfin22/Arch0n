import styles from "./HomePage.module.css";
import BGvideo from "/assets/HomeBG.mp4";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import PageNav from "../components/pageNavigation/PageNav";
function HomePage() {
  return (
    <motion.div
      className="wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <PageNav />
      <div className={styles.content}>
        <h1>Cyberware najlepszej jakości</h1>
        <NavLink to="/login">
          <button>Zainwestuj w Siebie</button>
        </NavLink>
      </div>
      <video src={BGvideo} autoPlay loop muted preload="auto" />
    </motion.div>
  );
}
export default HomePage;
