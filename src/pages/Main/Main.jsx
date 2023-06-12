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

  const tracks = tracksData.payload.allTracks.tracks;

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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, dispatch]);

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.main}>
          <Nav />
          <div className={s.centerblock}>
            <Search />
            <Header value="Треки" />
            <Filter />
            <Content tracks={tracks} />
          </div>
          <Sidebar playlists />
        </div>
        <Bar />
      </div>
    </div>
  );
}
