/* eslint-disable react/prop-types */
import styles from "./ShopItem.module.css";
function ShopItem({ name, photo, producer }) {
  return (
    <div className={styles.wrap}>
      <img src={photo} alt={name} />
      <h2>{name}</h2>
      <h3>{producer}</h3>
    </div>
  );
}
export default ShopItem;
