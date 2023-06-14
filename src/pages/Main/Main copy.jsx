import s from "./Main.module.css";
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
  const { data: allTracksData, refetch } = useTracksQuery();

  const [data, setData] = useState(undefined);

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

  useEffect(() => {
    setData(allTracksData);
  }, [allTracksData]);

  const tracksData = useSelector(getTracks);

  const [originalTracks, setOriginalTracks] = useState([]);
  const [useTracks, setUseTracks] = useState([]);

  useEffect(() => {
    if (tracksData.payload.allTracks.tracks.length > 0) {
      if (originalTracks.length === 0) {
        setOriginalTracks(tracksData.payload.allTracks.tracks);
        console.log(originalTracks);
      }
    }
  }, [tracksData]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (data !== undefined) {
      const getAllTracks = async () => {
        try {
          dispatch(setTracks(data));
        } catch (error) {
          console.log(error);
        }
      };
      getAllTracks();
      console.log(useTracks);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, dispatch]);

  // filters

  const location = useLocation();

  useEffect(() => {
    dispatch(setGenreState(null));
    dispatch(setSelectionGenreState(null));
    dispatch(setAuthorState(null));
    dispatch(setSelectionAuthorState(null));
    dispatch(setYearsState(null));
  }, [location]);

  const [filteredTracks, setFilteredTracks] = useState(null);

  useEffect(() => {
    if (filteredTracks === null) {
      setUseTracks(originalTracks);
    } else {
      setUseTracks(filteredTracks);
    }
  }, [filteredTracks]);

  const genreFilter = useSelector(getGenreState);

  const [genreData, setGenreData] = useState(null);

  useEffect(() => {
    setGenreData(genreFilter.payload.filter.genres.genre);
  }, [genreFilter]);

  const authorFilter = useSelector(getAuthorState);

  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    setAuthorData(authorFilter.payload.filter.authors.author);
    console.log(authorFilter.payload.filter.authors.author);
  }, [authorFilter]);

  const yearFilter = useSelector(getYearsState);

  const [yearData, setYearData] = useState(null);

  useEffect(() => {
    setYearData(yearFilter.payload.filter.years.newer);
    console.log(yearFilter.payload.filter.years.newer);
  }, [yearFilter]);

  useEffect(() => {
    let filteredData =
      filteredTracks === null ? originalTracks : filteredTracks;

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

      if (yearData) {
        filteredData = filter;
      } else if (!yearData) {
        filteredData = filter.reverse();
      }
    }

    setFilteredTracks(filteredData);
  }, [genreData, authorData, yearData]);

  const showContent = () => {
    if (genreData === null && authorData === null && yearData === null) {
      return <Content tracks={originalTracks} />;
    } else {
      return <Content tracks={useTracks} />;
    }
  };

  // filters

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.main}>
          <Nav />
          <div className={s.centerblock}>
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
