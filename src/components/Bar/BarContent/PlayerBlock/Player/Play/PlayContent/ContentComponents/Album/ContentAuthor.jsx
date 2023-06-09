import s from "./ContentAuthor.module.scss";

export default function ContentAlbum(props) {
  return (
    <div className={s.album}>
      <a className={s.album__link} href={props.href}>
        {props.name}
      </a>
    </div>
  );
}
