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

  // const tracks = tracksData.payload.allTracks.tracks;

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

  const genreFilter = useSelector(getGenreState);

  const [genreData, setGenreData] = useState(null);

  useEffect(() => {
    setGenreData(genreFilter.payload.filter.genres.genre);
  }, [genreFilter]);

  useEffect(() => {
    const filteredTracks = originalTracks.filter((track) => {
      return track.genre === genreData;
    });

    setUseTracks(filteredTracks);

    console.log("ААААААААААААААААААААААААА", useTracks);
  }, [genreData]);

  const authorFilter = useSelector(getAuthorState);

  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    setAuthorData(authorFilter.payload.filter.authors.author);
    console.log(authorFilter.payload.filter.authors.author);
  }, [authorFilter]);

  useEffect(() => {
    const filteredTracks = originalTracks.filter((track) => {
      return track.author === authorData;
    });

    setUseTracks(filteredTracks);

    console.log("ААААААААААААААААААААААААА", useTracks);
  }, [authorData]);

  const showContent = () => {
    return genreData === null ? (
      authorData === null ? (
        <Content tracks={originalTracks} />
      ) : (
        <Content tracks={useTracks} />
      )
    ) : (
      <Content tracks={useTracks} />
    );
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
