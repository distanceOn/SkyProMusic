import Logout from "../Imgs/Logout";
import s from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import DayList1 from "../Imgs/playlist01.png";
import DayList2 from "../Imgs/playlist02.png";

import DayList3 from "../Imgs/playlist03.png";

export default function Sidebar(props) {
  const showPlaylists = (value) => {
    return value ? (
      <div className={s.sidebar__block}>
        <div className={s.sidebar__list}>
          <NavLink to="/collections:1">
            <div className={s.item}>
              <img className={s.img} src={DayList1} alt="day`s playlist" />
            </div>
          </NavLink>
          <NavLink to="/collections:2">
            <div className={s.item}>
              <img className={s.img} src={DayList2} alt="day`s playlist" />
            </div>
          </NavLink>
          <NavLink to="/collections:3">
            <div className={s.item}>
              <img className={s.img} src={DayList3} alt="day`s playlist" />
            </div>
          </NavLink>
        </div>
      </div>
    ) : (
      ""
    );
  };
  return (
    <div className={s.sidebar}>
      <NavLink to="/login">
        <button className={s.logout} type="button">
          <Logout />
        </button>
      </NavLink>
      {showPlaylists(props.playlists)}
    </div>
  );
}
