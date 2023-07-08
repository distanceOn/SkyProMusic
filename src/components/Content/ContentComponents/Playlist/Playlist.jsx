import s from "./Playlist.module.scss";
import {} from "../../../../redux/services/api";
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

  const showTracks = () => {
    if (props.tracks && props.tracks.length > 0) {
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

  return <div className={s.playlist}>{showTracks()}</div>;
}
