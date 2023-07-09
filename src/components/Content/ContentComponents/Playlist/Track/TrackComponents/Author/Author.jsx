import s from "./Author.module.scss";

export default function Author(props) {
  return (
    <div className={s.author}>
      <div className={s.author__link}>{props.name}</div>
    </div>
  );
}
