import Logo from "../../../components/Imgs/Logo.png";
import s from "./Form.module.css";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

export default function Form() {
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
        <Button value="Войти" />
        <Button value="Зарегистрироваться" />
      </div>
    </div>
  );
}
