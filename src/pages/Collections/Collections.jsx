import MyCollection from "./Collection/MyCollection/MyCollection";
import PlaylistCollection from "./Collection/PlaylistCollection/PlaylistCollection";

export default function Collections(props) {
  const showCollection = () => {
    switch (props.collection) {
      case "day":
        return (
          <PlaylistCollection
            name="Плейлист дня"
            playlist={props.collection}
            id={props.id}
          />
        );
      case "dance":
        return (
          <PlaylistCollection
            name="100 танцевальных хитов"
            playlist={props.collection}
            id={props.id}
          />
        );
      case "indi":
        return (
          <PlaylistCollection
            name="Инди заряд"
            playlist={props.collection}
            id={props.id}
          />
        );
      case "favorite":
        return <MyCollection name="Мои треки" playlist={props.collection} />;

      default:
        break;
    }
  };
  return showCollection();
}
