import { useContext, useRef } from "react";
import s from "./Search.module.css";
import AudioContext from "../../contexts/audioContext";

export default function Search() {
  const { setSearchName } = useContext(AudioContext);

  const searchRef = useRef();
  const searchTrack = () => {
    if (searchRef.current.value) {
      setSearchName(searchRef.current.value);
    } else {
      setSearchName(null);
    }
  };
  return (
    <div className={s.search}>
      <svg
        className={s.svg}
        width="17"
        height="18"
        viewBox="0 0 17 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.9276 12.7748L15.37 17.0644"
          stroke="white"
          strokeLinecap="round"
        />
        <circle
          cx="8.48533"
          cy="8.48526"
          r="5.5"
          transform="rotate(-38.7469 8.48533 8.48526)"
          stroke="white"
        />
      </svg>
      <input
        ref={searchRef}
        className={s.text}
        type="search"
        placeholder="Поиск"
        name="search"
        onChange={searchTrack}
      />
    </div>
  );
}
