import s from "./Progress.module.scss";

export default function Progress() {
  return (
    <div className={s.volume__progress}>
      <input className={s.volume__progressLine} type="range" name="range" />
    </div>
  );
}
