import s from "./ContentTrack.module.scss";

export default function ContentAuthor(props) {
  return (
    <div className={s.author}>
      <a className={s.author__link} href={props.href}>
        {props.name}
      </a>
    </div>
  );
}
