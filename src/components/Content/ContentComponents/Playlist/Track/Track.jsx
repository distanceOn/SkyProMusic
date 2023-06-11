import Album from "./TrackComponents/Album/Album";
import Author from "./TrackComponents/Author/Author";
import Time from "./TrackComponents/Time/Time";
import Title from "./TrackComponents/Title/Title";
import s from "./Track.module.css";
import { useContext, useEffect, useState } from "react";
import {
  useAddToFavoriteMutation,
  useOneTrackQuery,
  useRemoveFromFavoriteMutation,
} from "../../../../../redux/services/api";
import AudioContext from "../../../../../contexts/audioContext";

export default function Track(props) {
  const id = props.id;

  const { handleSetNewAudio } = useContext(AudioContext);

  const { data: trackData } = useOneTrackQuery(id);

  const [addToFavorite] = useAddToFavoriteMutation();
  const [removeFromFavorite] = useRemoveFromFavoriteMutation();

  const [isLiked, setIsLiked] = useState(false);

  const [track, setTrack] = useState(null);

  const handleItemClick = () => {
    props.handleItemClick(id);
  };

  const handleLike = () => {
    if (isLiked === false) {
      addToFavorite(id)
        .then((response) => {
          console.log(response);
          setIsLiked(!isLiked);
        })
        .catch((error) => {
          console.log("Error adding to favourite:", error);
        });
    } else if (isLiked === true) {
      removeFromFavorite(id)
        .then((response) => {
          console.log(response);
          setIsLiked(!isLiked);
        })
        .catch((error) => {
          console.log("Error removing to favourite:", error);
        });
    }
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
          <Time time={props.time} handleLike={handleLike} isLiked={isLiked} />
        </div>
      </div>
    </div>
  );
}
