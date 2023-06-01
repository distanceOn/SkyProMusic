import s from "./Main.module.css";
import Nav from "../../components/Nav/Nav";
import Search from "../../components/Search/Search";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Bar from "../../components/Bar/Bar";

export default function Main() {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.main}>
          <Nav />
          <div className={s.centerblock}>
            <Search />
            <Header value="Треки" />
          </div>
          <Sidebar playlists />
        </div>
        <Bar />
      </div>
    </div>
  );
}
