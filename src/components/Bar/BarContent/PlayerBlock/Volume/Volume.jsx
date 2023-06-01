import Picture from './VolumeComponents/Picture/Picture'
import Progress from './VolumeComponents/Progress/Progress'
import s from './Volume.module.css'

export default function Volume() {
  return (
    <div className={s.bar__volumeBlock}>
      <div className={s.volume__content}>
        <Picture />
        <Progress />
      </div>
    </div>
  )
}
