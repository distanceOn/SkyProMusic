import s from "./Button.module.scss";

export default function Button(props) {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={`${s.filter__button} ${s.text} ${s.button} ${
        props.active ? s.active : ""
      }`}
    >
      {props.filter}
    </button>
  );
}
