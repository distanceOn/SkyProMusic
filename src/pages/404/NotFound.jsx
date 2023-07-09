import { Link } from "react-router-dom";
import s from "./NotFound.module.scss";
import Smile from "./Smile/crying-emoji-svgrepo-com.svg";

export default function NotFound() {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.notfound}>
          <p className={s._404}>404</p>
          <div className={s.div}>
            <p className={s.p}>Страница не найдена</p>
            <img src={Smile} alt="crying" className={s.smile} />
          </div>
          <p className={s.text}>
            Возможно, она была удалена <br /> или перенесена на другой адрес
          </p>
          <Link to={"/"}>
            <button className={s.button}>Вернуться на главную</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
