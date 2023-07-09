import s from "./Form.module.scss";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import {
  useLoginMutation,
  useSignupMutation,
  useTokenMutation,
} from "../../../redux/services/api";
import { enter, registration } from "../../../redux/events/authEvents";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../components/Imgs/Logo";

export default function Form(props) {
  const [userLogin] = useLoginMutation();
  const [userSignup] = useSignupMutation();
  const [userToken] = useTokenMutation();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("refresh")) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage.getItem("refresh")]);

  const onEnter = async () => {
    setIsLoading(true);
    try {
      await enter(userLogin, dispatch, userToken);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  const onRegistration = async () => {
    setIsLoading(true);
    try {
      await registration(userSignup, dispatch, userToken);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  function getForm() {
    if (props.currentPath === "/login") {
      return (
        <div className={s.form}>
          <div className={s.logo}>
            <Logo className={s.image} alt="logo" value="black" />
          </div>
          <div className={s.inputs}>
            <Input placeholder="Логин" />
            <Input placeholder="Пароль" />
          </div>

          <div className={s.buttons}>
            <Button
              action="enter"
              value={isLoading === true ? "Соединение..." : "Войти"}
              onClick={onEnter}
            />
            <Button action="signup-start" value="Зарегистрироваться" />
          </div>
        </div>
      );
    } else if (props.currentPath === "/registration") {
      return (
        <div className={s.form}>
          <div className={s.logo}>
            <Logo className={s.image} alt="logo" value="black" />
          </div>
          <div className={s.inputs}>
            <Input placeholder="Логин" />
            <Input placeholder="Пароль" />
            <Input placeholder="Повторите пароль" />
          </div>

          <div className={s.buttons}>
            <Button
              action="signup-finish"
              value={
                isLoading === true ? "Соединение..." : "Зарегистрироваться"
              }
              onClick={onRegistration}
            />
          </div>
        </div>
      );
    }
  }

  return getForm();
}
