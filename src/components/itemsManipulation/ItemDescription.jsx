/* eslint-disable react/prop-types */

import styles from "./ItemDescription.module.css";
import { Link } from "react-router-dom";
function ItemDescription({ item, onCurrentItem, isModerator, state }) {
  //async function for deleting items
  async function handleDeleteItem() {
    const request = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
    };
    const res = await fetch(
      `https://archonapp.azurewebsites.net/api/item/${item.id}`,
      request
    );
    alert(`Usunięto ${item.name}`);
    if (res.ok) onCurrentItem(null);
  }

  return (
    <div className={styles.wrapper}>
      <img src={item.itemImgUrl} />
      <div className={styles.content}>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <div className={styles.pricing}>
          <h3>{item.price}$$</h3>
          <h3>{item.isAvaliable ? "Dostępny" : "Wyprzedane"}</h3>
        </div>
        {isModerator ? (
          <div>
            <Link to="/item-details" state={{ item: item, state: state }}>
              <button>Edytuj Przedmiot</button>
            </Link>
            <button
              style={{ backgroundColor: "red" }}
              onClick={handleDeleteItem}
            >
              Usuń przedmiot
            </button>
          </div>
        ) : (
          <button
            onClick={() =>
              alert(
                "Eurodolary zostały pobrane z twojego konta. Po odbiór przedmiotu, zgłoś się do najbliższego ripperdocka."
              )
            }
          >
            Złóż zamówienie
          </button>
        )}
      </div>
    </div>
  );
}

export default ItemDescription;
