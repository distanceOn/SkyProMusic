import PlayContent from './PlayContent/PlayContent'
import PlayLikeDis from './PlayLikeDis/PlayLikeDis'
import s from './Play.module.css'

export default function Play() {
  return (
    <div className={s.trackPlay}>
      <PlayContent />
      <PlayLikeDis />
    </div>
  )
}
