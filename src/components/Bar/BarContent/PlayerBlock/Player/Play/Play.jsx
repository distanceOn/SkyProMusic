import PlayContent from "./PlayContent/PlayContent";
import s from "./Play.module.css";

export default function Play() {
  return (
    <div className={s.trackPlay}>
      <PlayContent />
    </div>
  );
}
