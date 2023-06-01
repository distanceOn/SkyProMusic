import Track from "./Track/Track";
import s from "./Playlist.module.css";
import { useTracksQuery } from "../../../../../redux/services/api";
import { useEffect, useState } from "react";
import SkeletonTrack from "./Track/SkeletonTrack/SkeletonTrack";
import { useDispatch, useSelector } from "react-redux";
import { getTracks, setTracks } from "../../../../../redux/slices/tracksSlice";

export default function Playlist() {
  const { data } = useTracksQuery();

  const tracksData = useSelector(getTracks);

  const tracks = tracksData.payload.allTracks.tracks;

  const dispatch = useDispatch();

  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    if (data !== undefined) {
      const getAllTracks = async () => {
        try {
          dispatch(setTracks(data));
        } catch (error) {
          console.log(error);
        }
      };
      getAllTracks();
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (tracks.length > 0) {
      setShowFirst(false);
    }
  }, [tracks]);

  const showTracks = () => {
    if (tracks.length > 0) {
      return tracks.map((track) => (
        <Track
          key={track.id}
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
