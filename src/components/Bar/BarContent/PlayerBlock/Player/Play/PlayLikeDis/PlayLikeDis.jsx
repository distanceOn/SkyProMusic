import { useContext } from "react";
import {
  useAddToFavoriteMutation,
  useRemoveFromFavoriteMutation,
} from "../../../../../../../redux/services/api";
import Dislike from "./LikeDisComponents/Dislike/Dislike";
import Like from "./LikeDisComponents/Like/Like";
import s from "./PlayLikeDis.module.scss";
import AudioContext from "../../../../../../../contexts/audioContext";

export default function PlayLikeDis(props) {
  const { isLiked, setIsLiked } = useContext(AudioContext);
  const [addToFavorite] = useAddToFavoriteMutation();
  const [removeFromFavorite] = useRemoveFromFavoriteMutation();

  const handleLike = async () => {
    if (isLiked === false) {
      try {
        await addToFavorite(props.id);
        setIsLiked(true);
      } catch (error) {
        console.log("Error adding to favourite:", error);
      }
    }
  };

  const handleDis = async () => {
    if (isLiked === true) {
      try {
        await removeFromFavorite(props.id);
        setIsLiked(false);
      } catch (error) {
        console.log("Error removing from favourite:", error);
      }
    }
  };

  return (
    <div className={s.trackPlay__likeDis}>
      <Like isLiked={isLiked} handleLike={handleLike} />
      <Dislike isLiked={isLiked} handleDis={handleDis} />
    </div>
  );
}
