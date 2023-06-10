import s from "./ControlsNext.module.css";

export default function ControlsNext(props) {
  return (
    <button type="button" className={s.next} onClick={props.handleNextTrack}>
      <svg
        className={s.next__svg}
        alt="next"
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15 2V12.5" stroke="white" />
        <path d="M13 7L3.25 0.937823L3.25 13.0622L13 7Z" fill="#D9D9D9" />
      </svg>
    </button>
  );
}
