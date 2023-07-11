import Picture from "./VolumeComponents/VolumePicture/VolumePicture";
import Progress from "./VolumeComponents/VolumeProgress/VolumeProgress";
import s from "./BarVolume.module.scss";

export default function Volume() {
  return (
    <div className={s.bar__volumeBlock}>
      <div className={s.volume__content}>
        <Picture />
        <Progress />
      </div>
    </div>
  );
}
