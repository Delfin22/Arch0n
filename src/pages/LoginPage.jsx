import styles from "./LoginPage.module.css";
import BGvideo from "../assets/loginBG.mp4";
import PageNav from "../components/pageNavigation/PageNav";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  //state for visibility of the register window
  const [register, setRegister] = useState(false);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  //state for showing create account button
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  //visibility of register window handler
  function handleRegister() {
    setRegister((r) => !r);
  }

  //validator
  useEffect(
    function () {
      setIsValid(false);
      if (password.length < 8) return;
      if (password !== retypePassword) return;
      setIsValid(true);
    },
    [password, retypePassword]
  );

  //fetch function for registering new user
  async function registerUser() {
    const body = {
      userName,
      password,
      roles: ["reader"], //default setting - no access for create operations
    };
    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    const res = await fetch(
      "https://archonapp.azurewebsites.net/api/auth/register",
      request
    );
    if (res.ok) {
      alert("Utworzono konto! Zaloguj się");
      handleRegister();
    } else if (res.status === 400) {
      alert("Użytkownik o podanym loginie już istnieje!");
    } else {
      alert("Coś poszło nie tak!");
    }
  }

  //fetch function for login user
  async function loginUser() {
    const body = {
      username: userName,
      password: password,
    };
    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    const res = await fetch(
      "https://archonapp.azurewebsites.net/api/auth/login",
      request
    );

    if (res.ok) {
      var data = await res.json(data);
      navigate("/shop", {
        state: {
          token: data.jwtToken,
          roles: data.roles,
          userName: data.userName,
        },
      }); //accepting jwtToken from api's response and passing it further
    } else if (res.status === 400) {
      alert("Błędny login, lub hasło!");
    } else {
      alert("Coś poszło nie tak!");
    }
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
                <input
                  type="text"
                  placeholder="Username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Retype password"
                  value={retypePassword}
                  onChange={(e) => setRetypePassword(e.target.value)}
                />
              </div>
            </form>
            <p>Hasło musi mieć minimum 8 znaków</p>
            <div>
              <button onClick={handleRegister}>Mam już konto</button>
              {isValid && <button onClick={registerUser}>Utwórz konto</button>}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.content}>
          <form>
            <div>
              <input
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </form>
          <div>
            <button onClick={loginUser}>Zaloguj</button>
            <button onClick={handleRegister}>Zarejestruj</button>
          </div>
        </div>
      )}
      <video src={BGvideo} autoPlay loop muted preload="auto" />
    </motion.div>
  );
}
export default LoginPage;
