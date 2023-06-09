import s from "./ControlsPlay.module.scss";

export default function ControlsPlay(props) {
  return (
    <button type="button" className={s.play} onClick={props.handlePlay}>
      <svg
        className={s.play__svg}
        alt="play"
        width="15"
        height="20"
        viewBox="0 0 15 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 10L-1.01012e-06 0.47372L-1.84293e-06 19.5263L15 10Z"
          fill="#D9D9D9"
        />
      </svg>
    </button>
  );
}
