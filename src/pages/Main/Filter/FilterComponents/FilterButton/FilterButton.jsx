import s from "./FilterButton.module.scss";

export default function FilterButton(props) {
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
