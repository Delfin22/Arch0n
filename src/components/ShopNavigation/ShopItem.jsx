/* eslint-disable react/prop-types */
import styles from "./ShopItem.module.css";
function ShopItem({ item, onCurrentItem }) {
  return (
    <div className={styles.wrap} onClick={() => onCurrentItem(item)}>
      <img src={item.itemImgUrl} alt={item.name} />
      <h2>{item.name}</h2>
      <h2>{item.price}</h2>
    </div>
  );
}
export default ShopItem;
