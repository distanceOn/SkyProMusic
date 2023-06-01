import Track from "./Track/Track";
import s from "./Playlist.module.css";
import { useTracksQuery } from "../../../../../redux/services/api";
import { useEffect, useState } from "react";
import SkeletonTrack from "./Track/SkeletonTrack/SkeletonTrack";

export default function Playlist() {
  const { data } = useTracksQuery();
  console.log(data);
  const [tracks, setTracks] = useState([]);

  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    if (data !== undefined) {
      const getAllTracks = async () => {
        try {
          setTracks(data);
        } catch (error) {
          console.log(error);
        }
      };
      getAllTracks();
    }
  }, [data]);

  useEffect(() => {
    if (tracks.length > 0) {
      setShowFirst(false);
    }
  }, [tracks]);

  const showTracks = () => {
    if (tracks !== undefined) {
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
