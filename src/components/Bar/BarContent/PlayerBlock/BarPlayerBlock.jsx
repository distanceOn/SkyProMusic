import { useContext, useEffect, useRef, useState } from "react";
import BarPlayer from "./Player/BarPlayer";
import Volume from "./Volume/Volume";
import s from "./BarPlayerBlock.module.css";
import AudioContext from "../../../../contexts/audioContext";

export default function BarPlayerBlock() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const { audio } = useContext(AudioContext);

  useEffect(() => {
    if (audio !== null) {
      console.log(audio);
      handlePlay();
    }
  }, [audio]);

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };
  const handleSeek = (event) => {
    audioRef.current.currentTime = event.target.value;
    setCurrentTime(audioRef.current.currentTime);
  };

  return (
    <div className={s.bar__content}>
      <input
        type="range"
        className={s.bar__playerProgress}
        min="0"
        value={currentTime}
        onChange={handleSeek}
      />
      <div className={s.bar__playerBlock}>
        <audio
          ref={audioRef}
          src={audio ? audio.track_file : "/audio/BobbyMarleniDropping.mp3"}
          onTimeUpdate={handleTimeUpdate}
        >
          <source
            src={audio ? audio.track_file : "/audio/BobbyMarleniDropping.mp3"}
            type="audio/mpeg"
          />
          <track kind="captions" />
        </audio>
        <BarPlayer
          handlePlay={handlePlay}
          handlePause={handlePause}
          isPlaying={isPlaying}
        />
        <Volume />
      </div>
    </div>
  );
}
