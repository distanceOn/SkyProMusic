import Album from "./TrackComponents/Album/Album";
import Author from "./TrackComponents/Author/Author";
import Time from "./TrackComponents/Time/Time";
import Title from "./TrackComponents/Title/Title";
import s from "./Track.module.css";
import { useEffect } from "react";

export default function Track(props) {
  const handleItemClick = () => {
    props.handleItemClick(props.id);
  };

  useEffect(() => {}, [props.id]);

  return (
    <div>
      <div
        className={`${props.item} ${props.className}`}
        onClick={handleItemClick}
      >
        <div className={s.track}>
          <Title
            href={props.hrefTitle}
            name={props.nameTitle}
            postscript={props.postscript}
          />
          <Author href={props.hrefAuthor} name={props.nameAuthor} />
          <Album href={props.hrefAlbum} name={props.nameAlbum} />
          <Time time={props.time} />
        </div>
      </div>
    </div>
  );
}
