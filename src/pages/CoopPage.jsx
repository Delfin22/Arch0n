import BGvideo from "/assets/coopBG.mp4";
import styles from "./CoopPage.module.css";
import PageNav from "../components/pageNavigation/PageNav";
import { motion } from "framer-motion";
function CoopPage() {
  return (
    <motion.div
      className="wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <PageNav />
      <div className={styles.content}>
        <h1>Poszukiwani Specjaliści</h1>
        <p>
          Jesteśmy otwarci na współpracę z firmami, placówkami medycznymi oraz
          indywidualnymi specjalistami, którzy podzielają naszą pasję do
          innowacji i dążenia do doskonałości. Oferujemy elastyczne modele
          partnerstwa, dostosowane do Twoich potrzeb — od dostaw zaawansowanych
          komponentów po kompleksowe rozwiązania integrujące cyberwszczepy w
          istniejące systemy. Naszym priorytetem jest tworzenie synergii, która
          przyniesie korzyści wszystkim stronom. Dołącz do nas, aby wspólnie
          kształtować przyszłość, gdzie granice między człowiekiem a maszyną
          stają się coraz bardziej płynne.
        </p>
        <h2>Skontaktuj się z nami przez cyberspace</h2>
        <p>Nasz identyfikator: XJnwkaXUa93XDsa4DRsdc89XflNX98uec</p>
      </div>
      <video src={BGvideo} autoPlay loop muted preload="auto" />
    </motion.div>
  );
}
export default CoopPage;
