import { useEffect, useState } from "react";
import Button from "./FilterComponents/Button/Button";
import Title from "./FilterComponents/Title/Title";
import Authors from "./FilterComponents/Authors/Authors";
import s from "./Filter.module.scss";
import Years from "./FilterComponents/Years/Years";
import Genres from "./FilterComponents/Genres/Genres";
import { useSelector } from "react-redux";
import { getTracks } from "../../../redux/slices/tracksSlice";

export default function Filter() {
  const [isFilterAuthorsOpen, setIsFilterAuthorsOpen] = useState(false);
  const [isFilterYearsOpen, setIsFilterYearsOpen] = useState(false);
  const [isFilterGenresOpen, setIsFilterGenresOpen] = useState(false);

  const allTracks = useSelector(getTracks);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    setTracks(allTracks.payload.allTracks.tracks);
  }, [allTracks]);

  const [authors, setAuthors] = useState();
  const [genres, setGenres] = useState();

  useEffect(() => {
    if (tracks.length !== 0) {
      setAuthors(() => {
        const uniqueAuthors = tracks.reduce((unique, track, index) => {
          if (index === 0) {
            unique.push(track.author);
          } else if (!unique.includes(track.author)) {
            unique.push(track.author);
          }
          return unique;
        }, []);
        return uniqueAuthors;
      });
    }

    if (tracks.length !== 0) {
      setGenres(() => {
        const uniqueGenres = tracks.reduce((unique, track, index) => {
          if (index === 0) {
            unique.push(track.genre);
          } else if (!unique.includes(track.genre)) {
            unique.push(track.genre);
          }
          return unique;
        }, []);
        return uniqueGenres;
      });
    }
  }, [tracks]);

  const toggleFilterAuthorsClick = () => {
    setIsFilterAuthorsOpen(!isFilterAuthorsOpen);
    setIsFilterYearsOpen(false);
    setIsFilterGenresOpen(false);
  };

  const toggleFilterYearsClick = () => {
    setIsFilterYearsOpen(!isFilterYearsOpen);
    setIsFilterAuthorsOpen(false);
    setIsFilterGenresOpen(false);
  };

  const toggleFilterGenresClick = () => {
    setIsFilterGenresOpen(!isFilterGenresOpen);
    setIsFilterYearsOpen(false);
    setIsFilterAuthorsOpen(false);
  };

  return (
    <div className={s.filter}>
      <Title />
      <div className={s.container}>
        <Button
          active={isFilterAuthorsOpen ? true : ""}
          filter="исполнителю"
          onClick={toggleFilterAuthorsClick}
        />
        {isFilterAuthorsOpen && <Authors authors={authors} />}
      </div>
      <div className={s.container}>
        <Button
          active={isFilterYearsOpen ? true : ""}
          filter="году выпуска"
          onClick={toggleFilterYearsClick}
        />{" "}
        {isFilterYearsOpen && <Years />}
      </div>
      <div className={s.container}>
        <Button
          active={isFilterGenresOpen ? true : ""}
          filter="жанру"
          onClick={toggleFilterGenresClick}
        />
        {isFilterGenresOpen && <Genres genres={genres} />}
      </div>
    </div>
  );
}
