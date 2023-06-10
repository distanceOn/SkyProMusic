import Album from "./TrackComponents/Album/Album";
import Author from "./TrackComponents/Author/Author";
import Time from "./TrackComponents/Time/Time";
import Title from "./TrackComponents/Title/Title";
import s from "./Track.module.css";
import { useOneTrackQuery } from "../../../../../../redux/services/api";
import { useContext, useEffect, useState } from "react";
import AudioContext from "../../../../../../contexts/audioContext";

export default function Track(props) {
  const id = props.id;

  const { handleSetNewAudio } = useContext(AudioContext);

  const { data: trackData } = useOneTrackQuery(id);

  const [track, setTrack] = useState(null);

  const handleItemClick = () => {
    props.handleItemClick(id);
  };

  useEffect(() => {
    if (trackData !== undefined) {
      setTrack(trackData);
      if (track !== null) {
        setTrack(track);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackData]);

  return (
    <div>
      <div
        className={`${props.item} ${props.className}`}
        onClick={() => {
          handleItemClick();
          if (track !== null) {
            handleSetNewAudio(track);
          }
        }}
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
