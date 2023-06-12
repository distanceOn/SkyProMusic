import PlayContent from "./PlayContent/PlayContent";
import s from "./Play.module.css";

export default function Play(props) {
  return (
    <div className={s.trackPlay}>
      <PlayContent
        currentAudio={props.currentAudio}
        isLiked={props.isLiked}
        setIsLiked={props.setIsLiked}
        id={props.id}
      />
    </div>
  );
}
