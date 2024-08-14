import ShopNav from "../components/ShopNavigation/ShopNav";
import styles from "./ShopPage.module.css";
import ShopItem from "../components/ShopNavigation/ShopItem";
import cyberware from "../testData";
import { useState } from "react";
import BottomPanel from "../components/ShopNavigation/BottomPanel";
function ShopPage() {
  const [items, setItems] = useState(cyberware);
  const [isModerator, setIsModerator] = useState(false);
  function handleIsModerator() {
    setIsModerator((v) => !v);
  }
  return (
    <div className={styles.wrapper}>
      <ShopNav isModerator={isModerator} onIsModerator={handleIsModerator} />
      <div className={styles.itemsContainer}>
        {items.map((i) => (
          <ShopItem
            name={i.name}
            photo={i.photo}
            producer={i.producer}
            key={i.id}
          />
        ))}
      </div>
      <BottomPanel />
    </div>
  );
}
export default ShopPage;
