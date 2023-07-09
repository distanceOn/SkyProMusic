import { useContext, useEffect, useState } from "react";
import {
  useAddToFavoriteMutation,
  useRemoveFromFavoriteMutation,
} from "../../../../../../../redux/services/api";
import s from "./Time.module.scss";
import AudioContext from "../../../../../../../contexts/audioContext";

export default function Time(props) {
  const [like, setLike] = useState(props.isLiked);

  useEffect(() => {
    setLike(
      props.trackData.stared_user.some(
        (element) => element.id === parseInt(localStorage.getItem("id"))
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [addToFavorite] = useAddToFavoriteMutation();
  const [removeFromFavorite] = useRemoveFromFavoriteMutation();
  const {
    isLiked: barIsLiked,
    setIsLiked: setBarIsLiked,
    audio,
  } = useContext(AudioContext);

  useEffect(() => {
    if (audio === props.trackData) {
      setLike(barIsLiked);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [barIsLiked, audio]);

  const handleLike = () => {
    if (like === false && barIsLiked === false) {
      addToFavorite(props.id)
        .then((response) => {
          setLike(true);
          setBarIsLiked(true);
        })
        .catch((error) => {
          console.log("Error adding to favourite:", error);
        });
    } else if (like === true && barIsLiked === true) {
      removeFromFavorite(props.id)
        .then((response) => {
          setLike(false);
          setBarIsLiked(false);
        })
        .catch((error) => {
          console.log("Error removing to favourite:", error);
        });
    }
  };
  return (
    <div className={s.time__block}>
      <svg
        onClick={handleLike}
        className={s.like}
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill={like === true ? "#AD61FF" : "transparent"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.34372 2.25572H8.36529C9.29718 1.44175 11.7563 0.165765 13.9565 1.76734C17.3111 4.20921 14.2458 9.5 8.36529 13H8.34372M8.34378 2.25572H8.32221C7.39032 1.44175 4.93121 0.165765 2.73102 1.76734C-0.623552 4.20921 2.44172 9.5 8.32221 13H8.34378"
          stroke="#696969"
        />
      </svg>
      <span className={s.time}>{props.time}</span>
    </div>
  );
}
