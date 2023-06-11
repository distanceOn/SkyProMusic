import Collection from "./Collection/Collection";

export default function Collections(props) {
  const showCollection = () => {
    switch (props.collection) {
      case "day":
        return <Collection name="Плейлист дня" />;
      case "dance":
        return <Collection name="100 танцевальных хитов" />;
      case "indi":
        return <Collection name="Инди заряд" />;

      default:
        break;
    }
  };
  return showCollection();
}
