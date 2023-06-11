import Playlist from "./ContentComponents/Playlist/Playlist";
import Titles from "./ContentComponents/Titles/Titles";
import s from "./Content.module.css";

export default function Content(props) {
  return (
    <div className={s.content}>
      <Titles />
      <Playlist playlist={props.playlist} />
    </div>
  );
}
