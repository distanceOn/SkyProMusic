import ContentAlbum from "./ContentComponents/Album/ContentAlbum";
import ContentAuthor from "./ContentComponents/Author/ContentAuthor";
import ContentCover from "./ContentComponents/Cover/ContentCover";
import s from "./PlayContent.module.css";

export default function PlayContent() {
  return (
    <div>
      (
      <div className={s.trackPlay__content}>
        <ContentCover />
        <ContentAuthor href="http://" name="Ты та..." />
        <ContentAlbum href="http://" name="Баста" />
      </div>
      )
    </div>
  );
}
