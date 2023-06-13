import s from "./MyCollection.module.css";
import Nav from "../../../../components/Nav/Nav";
import Content from "../../../../components/Content/Content";
import Search from "../../../../components/Search/Search";
import Header from "../../../../components/Header/Header";
import Sidebar from "../../../../components/Sidebar/Sidebar";
import Bar from "../../../../components/Bar/Bar";
import { useFavoriteTracksQuery } from "../../../../redux/services/api";
import { useDispatch, useSelector } from "react-redux";
import {
  getPlaylistTracks,
  setPlaylistTracks,
} from "../../../../redux/slices/tracksSlice";
import { useEffect, useState } from "react";

export default function MyCollection(props) {
  const { data: favoriteData, refetch } = useFavoriteTracksQuery();

  const [data, setData] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await refetch();
        console.log(favoriteData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch]);

  useEffect(() => {
    setData(favoriteData);
  }, [favoriteData]);

  const tracksData = useSelector(getPlaylistTracks);

  const tracks = tracksData.payload.allTracks.playlistTracks;

  const dispatch = useDispatch();

  useEffect(() => {
    if (data !== undefined) {
      const getAllTracks = async () => {
        try {
          dispatch(setPlaylistTracks(data));
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
            <Header value={props.name} />

            <Content playlist={props.playlist} id={props.id} tracks={tracks} />
          </div>
          <Sidebar />
        </div>
        <Bar />
      </div>
    </div>
  );
}
