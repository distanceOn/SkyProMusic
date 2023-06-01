import s from './SkeletonContent.module.css'

export default function SkeletonContent() {
  return (
    <div className="track-play__contain">
      <div className={s.img} />
      <div className={s.author} />
      <div className={s.album} />
    </div>
  )
}
