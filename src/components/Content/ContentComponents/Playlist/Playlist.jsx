import s from "./Playlist.module.css";
import {} from "../../../../redux/services/api";
import { useEffect, useState } from "react";
import SkeletonTrack from "./Track/SkeletonTrack/SkeletonTrack";
import { useDispatch, useSelector } from "react-redux";
import {
  // getTracks,
  // setTracks,
  setActiveItem,
  getActiveItem,
} from "../../../../redux/slices/tracksSlice";
import Track from "./Track/Track";

export default function Playlist(props) {
  // const data = props.data;

  // const tracksData = useSelector(getTracks);
  const activeItemData = useSelector(getActiveItem);

  // const tracks = tracksData.payload.allTracks.tracks;
  const activeItem = activeItemData.payload.allTracks.activeItem;

  const dispatch = useDispatch();

  const [showFirst, setShowFirst] = useState(true);

  // useEffect(() => {
  //   if (data !== undefined) {
  //     const getAllTracks = async () => {
  //       try {
  //         if (props.playlist === "favorite" || props.playlist === undefined) {
  //           dispatch(setTracks(data));
  //         } else {
  //           dispatch(setTracks(data.items));
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     getAllTracks();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [data, dispatch]);

  useEffect(() => {
    if (props.tracks.length > 0) {
      setShowFirst(false);
    }
  }, [props.tracks]);

  const showTracks = () => {
    if (props.tracks.length > 0) {
      const handleItemClick = (id) => {
        dispatch(setActiveItem(id));
      };

      return props.tracks.map((track) => (
        <Track
          className={`${s.item} ${activeItem === track.id ? s.active : ""}`}
          handleItemClick={handleItemClick}
          key={track.id}
          id={track.id}
          hrefTitle={track.track_file}
          nameTitle={track.name}
          hrefAuthor="#"
          nameAuthor={track.author}
          hrefAlbum="#"
          nameAlbum={track.album}
          time={`${Math.floor(track.duration_in_seconds / 60)}:${String(
            track.duration_in_seconds % 60
          ).padStart(2, "0")}`}
        />
      ));
    }
  };

  const skeletonItems = Array(8)
    .fill()
    .map((_, index) => <SkeletonTrack key={index} />);

  return (
    <div className={s.playlist}>
      {showFirst ? skeletonItems : showTracks()} <SkeletonTrack />;
    </div>
  );
}
