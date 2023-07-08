import s from "./ContentCover.module.scss";

export default function ContentCover() {
  return (
    <div className={s.trackPlay__image}>
      <svg
        className={s.trackPlay__svg}
        alt="music"
        width="20"
        height="19"
        viewBox="0 0 20 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 16V1.9697L19 1V13" stroke="#4E4E4E" />
        <ellipse cx="4.5" cy="16" rx="3.5" ry="2" stroke="#4E4E4E" />
        <ellipse cx="15.5" cy="13" rx="3.5" ry="2" stroke="#4E4E4E" />
      </svg>
    </div>
  );
}
