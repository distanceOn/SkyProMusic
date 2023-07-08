import s from "./SkeletonTrack.module.scss";

export default function SkeletonTrack() {
  return (
    <div className={s.item}>
      <div className={s.track}>
        <div className={s.title}>
          <div className={s.title__pat}></div>
        </div>
        <div className={s.author}>
          <div className={s.author__pat}></div>
        </div>
        <div className={s.album}>
          <div className={s.album__pat}></div>
        </div>
        <div className={s.time}>
          <div className={s.time__pat}></div>
        </div>
      </div>
    </div>
  );
}
