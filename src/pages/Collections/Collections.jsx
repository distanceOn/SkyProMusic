import Collection from "./Collection/Collection";

export default function Collections(props) {
  const showCollection = () => {
    switch (props.collection) {
      case "day":
        return <Collection name="Плейлист дня" playlist={props.collection} />;
      case "dance":
        return (
          <Collection
            name="100 танцевальных хитов"
            playlist={props.collection}
          />
        );
      case "indi":
        return <Collection name="Инди заряд" playlist={props.collection} />;

      default:
        break;
    }
  };
  return showCollection();
}
