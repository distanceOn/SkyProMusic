import { NavLink } from "react-router-dom";
import s from "./Button.module.css";

export default function Button(props) {
  const button = (value) => {
    switch (value) {
      case "enter":
        return (
          <div>
            <NavLink to="/">
              <button className={s.entry} type="button" onClick={props.onClick}>
                {props.value}
              </button>
            </NavLink>
          </div>
        );
      case "signup-start":
        return (
          <NavLink to="/registration">
            <div>
              <button className={s.register_start} type="button">
                {props.value}
              </button>
            </div>
          </NavLink>
        );

      case "signup-finish":
        return (
          <NavLink to="/">
            <div>
              <button
                className={s.register_finish}
                type="button"
                onClick={props.onClick}
              >
                {props.value}
              </button>
            </div>
          </NavLink>
        );

      default:
        break;
    }
  };

  return <div className={s.container}>{button(props.action)}</div>;
}
