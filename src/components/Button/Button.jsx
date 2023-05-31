import { NavLink } from "react-router-dom";
import s from "./Button.module.css";

export default function Button(props) {
  const button = (value) => {
    switch (value) {
      case "Войти":
        return (
          <div>
            <NavLink to="/">
              <button
                className={s.entry}
                type="button"
                onClick={props.onAuthButtonClick}
              >
                {value}
              </button>
            </NavLink>
          </div>
        );
      case "Зарегистрироваться":
        return (
          <NavLink to="/registration">
            <div>
              <button className={s.register} type="button">
                {value}
              </button>
            </div>
          </NavLink>
        );

      default:
        break;
    }
  };

  return <div className={s.container}>{button(props.value)}</div>;
}
