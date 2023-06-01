import Controls from './Controls/PlayerControls'
import Play from './Play/Play'
import s from './BarPlayer.module.css'

export default function BarPlayer(props) {
  return (
    <div className={s.bar__player}>
      <Controls
        handlePlay={props.handlePlay}
        handlePause={props.handlePause}
        isPlaying={props.isPlaying}
      />
      <Play />
    </div>
  )
}
