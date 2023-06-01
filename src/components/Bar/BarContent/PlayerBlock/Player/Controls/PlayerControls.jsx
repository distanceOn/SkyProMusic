import ControlsNext from './ControlsComponents/Next/ControlsNext'
import ControlsPause from './ControlsComponents/Pause/ControlsPause'
import ControlsPlay from './ControlsComponents/Play/ControlsPlay'
import ControlsPrev from './ControlsComponents/Prev/ControlsPrev'
import ControlsRepeat from './ControlsComponents/Repeat/ControlsRepeat'
import ControlsShuffle from './ControlsComponents/Shuffle/ControlsShuffle'
import s from './PlayerControls.module.css'

export default function Controls(props) {
  return (
    <div className={s.controls}>
      <ControlsPrev />
      {props.isPlaying ? (
        <ControlsPause handlePause={props.handlePause} />
      ) : (
        <ControlsPlay handlePlay={props.handlePlay} />
      )}

      <ControlsNext />
      <ControlsRepeat />
      <ControlsShuffle />
    </div>
  )
}
