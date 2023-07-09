import s from "./Header.module.scss";

export default function Header(props) {
  return <h2 className={s.header}>{props.value}</h2>;
}
