import s from "./ControlsPause.module.scss";

export default function ControlsPause(props) {
  return (
    <button type="button" className={s.pause} onClick={props.handlePause}>
      <svg
        className={s.pause__svg}
        width="15"
        height="19"
        viewBox="0 0 15 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="5" height="19" fill="#D9D9D9" />
        <rect x="10" width="5" height="19" fill="#D9D9D9" />
      </svg>
    </button>
  );
}
