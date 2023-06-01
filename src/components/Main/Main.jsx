import s from "./Main.module.css";
import Nav from "./Nav/Nav";

export default function Main() {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.main}>
          <Nav />
        </div>
      </div>
    </div>
  );
}
