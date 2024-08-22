/* eslint-disable react/prop-types */
import ShopNav from "../components/ShopNavigation/ShopNav";
import styles from "./ShopPage.module.css";
import ShopItem from "../components/ShopNavigation/ShopItem";
import { useState, useEffect } from "react";
import BottomPanel from "../components/ShopNavigation/BottomPanel";
import ItemDescription from "../components/itemsManipulation/ItemDescription";
import { useLocation } from "react-router-dom";
function ShopPage() {
  //Main store page
  const [items, setItems] = useState([]);
  const [isModerator, setIsModerator] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const location = useLocation();
  const { token, roles, userName } = location.state;

  //handlers
  function handleCurrentItem(item) {
    setCurrentItem(item);
  }
  function handleIsModerator() {
    setIsModerator((v) => !v);
  }

  //fetching items from api
  useEffect(
    function () {
      async function FetchItems() {
        setItems([]);
        console.log("fetched");
        const request = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const res = await fetch(
          `https://archonapp.azurewebsites.net/api/item?pageNumber=${currentPage}&pageSize=12`,
          request
        );
        var data = await res.json();
        setItems(data);
      }
      FetchItems();
    },
    [currentPage, token, currentItem]
  );

  return (
    <div className={styles.wrapper}>
      <ShopNav
        isModerator={isModerator}
        onIsModerator={handleIsModerator}
        state={location.state}
        userName={userName}
        roles={roles}
      />
      {currentItem && (
        <ItemDescription
          item={currentItem}
          onCurrentItem={setCurrentItem}
          isModerator={isModerator}
          state={location.state}
        />
      )}
      : (
      <div className={styles.itemsContainer}>
        {items.map((i) => (
          <ShopItem item={i} key={i.id} onCurrentItem={handleCurrentItem} />
        ))}
      </div>
      )
      <BottomPanel currentPage={currentPage} onCurrentPage={setCurrentPage} />
    </div>
  );
}
export default ShopPage;
