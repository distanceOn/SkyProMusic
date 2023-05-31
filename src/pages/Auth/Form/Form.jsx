import Logo from "../../../components/Imgs/Logo.png";
import s from "./Form.module.css";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

export default function Form(props) {
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
            <Button action="enter" value="Войти" />
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
            <Button action="signup-finish" value="Зарегистрироваться" />
          </div>
        </div>
      );
    }
  }

  return getForm();
}
