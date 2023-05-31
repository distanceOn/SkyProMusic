import { useEffect, useRef, useState } from "react";
import s from "./Input.module.css";

export default function Input(props) {
  // login
  const [login, setLogin] = useState("");

  const loginRef = useRef();

  const handleLogin = () => {
    setLogin(loginRef.current.value);
  };
  useEffect(() => {
    if (login !== "") {
      console.log(login);
    }
  }, [login]);
  //

  // password

  const [pass, setPass] = useState("");

  const passRef = useRef();

  const handlePassword = () => {
    setPass(passRef.current.value);
  };
  useEffect(() => {
    if (pass !== "") {
      console.log(pass);
    }
  });
  //

  return (
    <div className={s.container}>
      {props.placeholder === "Логин" ? (
        <input
          className={s.input}
          type="text"
          placeholder={props.placeholder}
          ref={loginRef}
          onChange={handleLogin}
          value={login}
        />
      ) : (
        <input
          className={s.input}
          type="password"
          placeholder={props.placeholder}
          ref={passRef}
          onChange={handlePassword}
          value={pass}
        />
      )}
    </div>
  );
}
