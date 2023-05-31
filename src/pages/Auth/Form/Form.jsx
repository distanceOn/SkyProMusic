import Logo from "../../../components/Imgs/Logo.png";
import s from "./Form.module.css";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import {
  useLoginMutation,
  useSignupMutation,
} from "../../../redux/services/api";
import { enter, registration } from "../../../redux/events/authEvents";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../redux/slices/authSlice";
import { useEffect } from "react";

export default function Form(props) {
  const [userLogin] = useLoginMutation();
  const [userSignup] = useSignupMutation();

  const dispatch = useDispatch();
  const user = useSelector(getUser);

  useEffect(() => {
    if (user.payload.auth.login === true) {
      console.log(user);
    }
  }, [user]);

  function onEnter() {
    enter(userLogin, dispatch);
  }
  function onRegistration() {
    registration(userSignup);
  }

  function getForm() {
    if (props.currentPath === "/login") {
      return (
        <div className={s.form}>
          <div className={s.logo}>
            <img className={s.image} src={Logo} alt="logo" />
          </div>
          <div className={s.inputs}>
            <Input placeholder="Логин" />
            <Input placeholder="Пароль" />
          </div>

          <div className={s.buttons}>
            <Button action="enter" value="Войти" onClick={onEnter} />
            <Button action="signup-start" value="Зарегистрироваться" />
          </div>
        </div>
      );
    } else if (props.currentPath === "/registration") {
      return (
        <div className={s.form}>
          <div className={s.logo}>
            <img className={s.image} src={Logo} alt="logo" />
          </div>
          <div className={s.inputs}>
            <Input placeholder="Логин" />
            <Input placeholder="Пароль" />
            <Input placeholder="Повторите пароль" />
          </div>

          <div className={s.buttons}>
            <Button
              action="signup-finish"
              value="Зарегистрироваться"
              onClick={onRegistration}
            />
          </div>
        </div>
      );
    }
  }

  return getForm();
}
