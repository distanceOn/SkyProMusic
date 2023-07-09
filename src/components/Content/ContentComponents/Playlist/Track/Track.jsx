import Album from "./TrackComponents/Album/Album";
import Author from "./TrackComponents/Author/Author";
import Time from "./TrackComponents/Time/Time";
import Title from "./TrackComponents/Title/Title";
import s from "./Track.module.scss";
import { useContext, useEffect, useState } from "react";
import { useOneTrackQuery } from "../../../../../redux/services/api";
import AudioContext from "../../../../../contexts/audioContext";
import SkeletonTrack from "./SkeletonTrack/SkeletonTrack";

export default function Track(props) {
  const id = props.id;

  const { handleSetNewAudio, searchName } = useContext(AudioContext);

  const { data: trackData, refetch } = useOneTrackQuery(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await refetch();
        setShowFirst(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch]);

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

  const [showFirst, setShowFirst] = useState(true);

  const searchNameLower = searchName !== null ? searchName.toLowerCase() : null;

  return showFirst ? (
    <SkeletonTrack />
  ) : (
    <div
      style={{
        display:
          searchNameLower !== null &&
          !props.nameTitle.toLowerCase().startsWith(searchNameLower)
            ? "none"
            : "block",
      }}
    >
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
          <Time time={props.time} id={props.id} trackData={trackData} />
        </div>
      </div>
    </div>
  );
}
