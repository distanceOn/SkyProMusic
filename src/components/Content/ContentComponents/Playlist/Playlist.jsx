import DancePlaylist from "./DancePlaylist/DancePlaylist";
import DayPlaylist from "./DayPlaylist/DayPlaylist";
import IndiPlaylist from "./IndiPlaylist/IndiPlaylist";
import MainPlaylist from "./MainPlaylist/MainPlaylist";

export default function Playlist(props) {
  const showPlaylist = () => {
    switch (props.playlist) {
      case "main":
        return <MainPlaylist />;
      case "day":
        return <DayPlaylist />;
      case "dance":
        return <DancePlaylist />;
      case "indi":
        return <IndiPlaylist />;

      default:
        break;
    }
  };

  return showPlaylist();
}
