import Controls from "./Controls/PlayerControls";
import Play from "./Play/Play";
import s from "./BarPlayer.module.scss";

export default function BarPlayer(props) {
  return (
    <div className={s.bar__player}>
      <Controls
        handlePrevTrack={props.handlePrevTrack}
        handleNextTrack={props.handleNextTrack}
        handlePlay={props.handlePlay}
        handlePause={props.handlePause}
        isPlaying={props.isPlaying}
      />
      <Play currentAudio={props.currentAudio} id={props.id} />
    </div>
  );
}
