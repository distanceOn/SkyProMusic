import {
  useAddToFavoriteMutation,
  useRemoveFromFavoriteMutation,
} from "../../../../../../../redux/services/api";
import Dislike from "./LikeDisComponents/Dislike/Dislike";
import Like from "./LikeDisComponents/Like/Like";
import s from "./PlayLikeDis.module.css";

export default function PlayLikeDis(props) {
  const [addToFavorite] = useAddToFavoriteMutation();
  const [removeFromFavorite] = useRemoveFromFavoriteMutation();

  const handleLike = () => {
    if (props.isLiked === false) {
      addToFavorite(props.id)
        .then((response) => {
          console.log(response);
          props.setIsLiked(!props.isLiked);
        })
        .catch((error) => {
          console.log("Error adding to favourite:", error);
        });
    } else {
      return;
    }
  };

  const handleDis = () => {
    if (props.isLiked === true) {
      removeFromFavorite(props.id)
        .then((response) => {
          console.log(response);
          props.setIsLiked(!props.isLiked);
        })
        .catch((error) => {
          console.log("Error removing to favourite:", error);
        });
    } else {
      return;
    }
  };
  return (
    <div className={s.trackPlay__likeDis}>
      <Like isLiked={props.isLiked} handleLike={handleLike} />
      <Dislike isLiked={props.isLiked} handleDis={handleDis} />
    </div>
  );
}
