import Dislike from './LikeDisComponents/Dislike/Dislike'
import Like from './LikeDisComponents/Like/Like'
import s from './PlayLikeDis.module.css'

export default function PlayLikeDis() {
  return (
    <div className={s.trackPlay__likeDis}>
      <Like />
      <Dislike />
    </div>
  )
}
