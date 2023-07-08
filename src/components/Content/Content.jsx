import Playlist from "./ContentComponents/Playlist/Playlist";
import Titles from "./ContentComponents/Titles/Titles";
import s from "./Content.module.scss";

export default function Content(props) {
  return (
    <div className={s.content}>
      <Titles />
      <Playlist playlist={props.playlist} id={props.id} tracks={props.tracks} />
    </div>
  );
}
