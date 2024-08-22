/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from "react-router-dom";
import ShopNav from "../components/ShopNavigation/ShopNav";
import styles from "./itemDetails.module.css";
import { useState } from "react";
//TODO - use /api/items/id get endpoint
function ItemDetails() {
  //accepting states from routing
  const location = useLocation();
  const currentItem = location.state?.item;
  const tempState = location.state.state;

  const [name, setName] = useState(currentItem ? currentItem?.name : "");
  const [price, setPrice] = useState(currentItem ? currentItem?.price : 0);
  const [description, setDescription] = useState(
    currentItem ? currentItem?.description : ""
  );
  const [isAvaliable, setIsAvaliable] = useState(
    currentItem ? currentItem?.isAvaliable : true
  );
  const [itemImgUrl, setItemImageUrl] = useState(
    currentItem
      ? currentItem.itemImgUrl
      : "https://cdn.pixabay.com/photo/2022/04/02/20/22/robot-7107688_640.png" //default photo
  );

  const navigate = useNavigate();

  //async function for adding new user with blank forms
  async function addData() {
    const body = {
      name,
      description,
      itemImgUrl,
      price,
      isAvaliable,
    };
    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tempState.token}`,
      },
      body: JSON.stringify(body),
    };
    const res = await fetch(
      `https://archonapp.azurewebsites.net/api/item/`,
      request
    );
    if (res.ok) {
      alert("Zaktualizowane dane przedmiotu");
      navigate("/shop", {
        state: {
          token: tempState.token,
          userName: tempState.userName,
          roles: tempState.roles,
        },
      });
    }
  }

  //async function executed after "edit item" button
  async function updateData() {
    const body = {
      name,
      description,
      itemImgUrl,
      price,
      isAvaliable,
    };
    const request = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tempState.token}`,
      },
      body: JSON.stringify(body),
    };
    const res = await fetch(
      `https://archonapp.azurewebsites.net/api/item/${currentItem.id}`,
      request
    );
    if (res.ok) {
      alert("Zaktualizowane dane przedmiotu");
      navigate("/shop", {
        state: {
          token: tempState.token,
          userName: tempState.userName,
          roles: tempState.roles,
        },
      });
    }
  }

  //async function for storing new photo in api's local folder
  async function uploadPicture(e) {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("File", file);
    formData.append("FileName", file.name);

    const request = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tempState.token}`,
      },
      body: formData,
    };
    const res = await fetch(
      "https://archonapp.azurewebsites.net/api/images/upload",
      request
    );
    var data = await res.json();
    setItemImageUrl(data.filePath); //receiving host-path to use as item parameter
  }

  return (
    <div className={styles.wrapper}>
      <ShopNav />
      <div className={styles.content}>
        <form>
          <input
            type="text"
            placeholder="Nazwa"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Cena"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <textarea
            className={styles.description}
            type="text"
            placeholder="Opis"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className={styles.avalibleBox}>
            <p>Czy przedmiot jest dostępny?</p>
            <input
              type="checkbox"
              defaultChecked={isAvaliable}
              onChange={() => setIsAvaliable((i) => !i)}
            />
          </div>
        </form>
        <div className={styles.controlPanel}>
          <img src={itemImgUrl} alt={name} />
          <input type="file" name="image" onChange={uploadPicture} />
          <button
            onClick={() =>
              navigate("/shop", {
                state: {
                  token: tempState.token,
                  userName: tempState.userName,
                  roles: tempState.roles,
                },
              })
            }
          >
            Anuluj
          </button>
          <button onClick={() => (currentItem ? updateData() : addData())}>
            Zapisz zmiany
          </button>
        </div>
      </div>
    </div>
  );
}
export default ItemDetails;
