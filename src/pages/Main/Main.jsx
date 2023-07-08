import s from "./Main.module.scss";
import Nav from "../../components/Nav/Nav";
import Search from "../../components/Search/Search";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Bar from "../../components/Bar/Bar";
import Filter from "./Filter/Filter";
import Content from "../../components/Content/Content";
import { useTracksQuery } from "../../redux/services/api";
import { useDispatch, useSelector } from "react-redux";
import { getTracks, setTracks } from "../../redux/slices/tracksSlice";
import { useEffect, useState } from "react";
import {
  getAuthorState,
  getGenreState,
  getYearsState,
  setAuthorState,
  setGenreState,
  setSelectionAuthorState,
  setSelectionGenreState,
  setYearsState,
} from "../../redux/slices/filterSlice";
import { useLocation } from "react-router-dom";

export default function Main() {
  const dispatch = useDispatch();
  const location = useLocation();

  // запрос всех треков из бд
  const { data: allTracksData, refetch } = useTracksQuery();

  // повторный асинхронный запрос треков из бд
  useEffect(() => {
    const fetchData = async () => {
      try {
        await refetch();
        console.log(allTracksData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch]);

  // назначение в store tracksSlice треков
  useEffect(() => {
    if (allTracksData !== undefined) {
      dispatch(setTracks(allTracksData));
      console.log(allTracksData);
    }
  }, [allTracksData, dispatch]);

  // значение треков из стейт
  const tracksData = useSelector(getTracks);
  const originalTracks = tracksData.payload.allTracks.tracks;

  // локальный state фильтрованных треков
  const [filteredTracks, setFilteredTracks] = useState(null);

  // при переходе на другую страницу обнуляются фильтры
  useEffect(() => {
    dispatch(setGenreState(null));
    dispatch(setSelectionGenreState(null));
    dispatch(setAuthorState(null));
    dispatch(setSelectionAuthorState(null));
    dispatch(setYearsState(null));
  }, [location, dispatch]);

  // значение жанра из стейт
  const genreFilter = useSelector(getGenreState);
  const genreData = genreFilter.payload.filter.genres.genre;

  // значение автора из стейт
  const authorFilter = useSelector(getAuthorState);
  const authorData = authorFilter.payload.filter.authors.author;

  // значение года из стейт
  const yearFilter = useSelector(getYearsState);
  const yearData = yearFilter.payload.filter.years.newer;

  // фильтр
  useEffect(() => {
    let filteredData = originalTracks;

    if (genreData !== null) {
      filteredData = filteredData.filter((track) => track.genre === genreData);
    }

    if (authorData !== null) {
      filteredData = filteredData.filter(
        (track) => track.author === authorData
      );
    }

    if (yearData !== null) {
      let tracksWithYears = [];
      let tracksNoYears = [];

      const filterTracks = (tracks) => {
        tracks.forEach((track) => {
          track.release_date
            ? tracksWithYears.push(track)
            : tracksNoYears.push(track);
        });
      };

      filterTracks(filteredData);

      const filter = tracksWithYears.sort((a, b) => {
        const yearA = parseInt(a.release_date.substring(0, 4));
        const yearB = parseInt(b.release_date.substring(0, 4));
        return yearA - yearB;
      });

      if (tracksNoYears.length > 0) {
        filter.push(...tracksNoYears);
      }

      filteredData = yearData ? filter : filter.reverse();
    }

    setFilteredTracks(filteredData);
  }, [genreData, authorData, yearData, originalTracks]);

  // какой контент с треками показывать в зависимости от фильтра
  const showContent = () => {
    const tracksToShow =
      genreData === null && authorData === null && yearData === null
        ? originalTracks
        : filteredTracks;
    return <Content tracks={tracksToShow} />;
  };

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.main}>
          <Nav />
          <div className={s.main__centerblock}>
            <Search />
            <Header value="Треки" />
            <Filter />
            {showContent()}
          </div>
          <Sidebar playlists />
        </div>
        <Bar />
      </div>
    </div>
  );
}
