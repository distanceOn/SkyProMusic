import React, { createRef } from "react";
import { useEffect, useState } from "react";
import s from "./Input.module.scss";

export const loginRef = createRef();

export const passRef = createRef();

export const repeatPassRef = createRef();

export default function Input(props) {
  // login
  const [login, setLogin] = useState("");

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

  const handlePassword = () => {
    setPass(passRef.current.value);
  };
  useEffect(() => {
    if (pass !== "") {
      console.log(pass);
    }
  });
  //

  // repeat password

  const [repeatPass, setRepeatPass] = useState("");

  const handleRepeatPassword = () => {
    setRepeatPass(repeatPassRef.current.value);
  };
  useEffect(() => {
    if (repeatPass !== "") {
      console.log(repeatPass);
    }
  });

  const getInputs = (value) => {
    switch (value) {
      case "Логин":
        return (
          <input
            className={s.input}
            type="text"
            placeholder={props.placeholder}
            ref={loginRef}
            onChange={handleLogin}
            value={login}
          />
        );
      case "Пароль":
        return (
          <input
            className={s.input}
            type="password"
            placeholder={props.placeholder}
            ref={passRef}
            onChange={handlePassword}
            value={pass}
          />
        );
      case "Повторите пароль":
        return (
          <input
            className={s.input}
            type="password"
            placeholder={props.placeholder}
            ref={repeatPassRef}
            onChange={handleRepeatPassword}
            value={repeatPass}
          />
        );
      default:
        break;
    }
  };
  return getInputs(props.placeholder);
}
