import { useDispatch, useSelector } from "react-redux";
import s from "./Genres.module.css";
import {
  getGenreState,
  getSelectionGenreState,
  setGenreState,
  setSelectionGenreState,
} from "../../../../../redux/slices/filterSlice";
import { useEffect, useState } from "react";

export default function Genres(props) {
  const isActiveData = useSelector(getSelectionGenreState);

  const [isActive, setIsActive] = useState(null);

  useEffect(() => {
    setIsActive(isActiveData.payload.filter.selections.genre);
  }, [isActiveData]);

  const dispatch = useDispatch();
  const genreSelectionData = useSelector(getGenreState);

  const [genreData, setGenreData] = useState(null);

  useEffect(() => {
    setGenreData(genreSelectionData.payload.filter.genres.genre);
  }, [genreSelectionData]);

  useEffect(() => {
    console.log(genreData);
  }, [genreData]);

  const showList = () => {
    if (props.genres !== undefined) {
      return props.genres.map((genre, index) => {
        const handleActive = () => {
          dispatch(setSelectionGenreState(isActive === index ? null : index));
          dispatch(setGenreState(genreData === genre ? null : genre));
        };
        return (
          <li
            className={isActive === index ? s.active : s.author}
            key={index}
            onClick={handleActive}
          >
            {genre}
          </li>
        );
      });
    }
  };

  return (
    <div className={s.container}>
      <ul className={s.authors}>{showList()}</ul>
    </div>
  );
}
