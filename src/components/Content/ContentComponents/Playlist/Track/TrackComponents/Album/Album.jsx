import s from "./Album.module.scss";

export default function Author(props) {
  return (
    <div className={s.album}>
      <div className={s.album__link}>{props.name}</div>
    </div>
  );
}
