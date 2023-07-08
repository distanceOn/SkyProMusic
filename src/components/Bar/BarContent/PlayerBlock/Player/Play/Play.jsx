import PlayContent from "./PlayContent/PlayContent";
import s from "./Play.module.scss";

export default function Play(props) {
  return (
    <div className={s.trackPlay}>
      <PlayContent currentAudio={props.currentAudio} id={props.id} />
    </div>
  );
}
