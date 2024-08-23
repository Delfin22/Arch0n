import BGvideo from "/assets/aboutUsBG.mp4";
import PageNav from "../components/pageNavigation/PageNav";
import styles from "./AboutPage.module.css";
import { motion } from "framer-motion";
function AboutPage() {
  return (
    <motion.div
      className="wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <PageNav />
      <div className={styles.content}>
        <h1>Archon Technology sp. Z.O.O.</h1>
        <p>
          Jesteśmy liderem w dziedzinie nowoczesnych cyberwszczepów, łączącym
          najnowsze technologie z ludzkim ciałem w celu przekraczenia naszych
          ograniczeń. W naszej ofercie znajdziesz wszystko, od zaawansowanych
          implantów neuralnych zwiększających inteligencję i szybkość reakcji,
          po biomechaniczne protezy zwiększające siłę i zwinność. Zdajemy sobie
          sprawę, że przyszłość należy do tych, którzy potrafią dostosować się
          do świata pełnego wyzwań, dlatego nasze cyberwszczepy to nie tylko
          narzędzia — to klucz do życia na wyższych obrotach. Wybierz nas, jeśli
          chcesz, aby technologia stała się twoim najlepszym sojusznikiem.
        </p>
      </div>
      <video src={BGvideo} autoPlay loop muted preload="auto" />
    </motion.div>
  );
}

export default AboutPage;
