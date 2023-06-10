import { useContext, useEffect, useRef, useState } from "react";
import BarPlayer from "./Player/BarPlayer";
import Volume from "./Volume/Volume";
import s from "./BarPlayerBlock.module.css";
import AudioContext from "../../../../contexts/audioContext";
import { getTracks, setActiveItem } from "../../../../redux/slices/tracksSlice";
import { useDispatch, useSelector } from "react-redux";

export default function BarPlayerBlock() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const dispatch = useDispatch();

  const { audio } = useContext(AudioContext);

  const [currentAudio, setCurrentAudio] = useState(null);

  const allTracksData = useSelector(getTracks);
  const allTracks = allTracksData.payload.allTracks.tracks;

  const [playedTracks, setPlayedTracks] = useState([]);

  useEffect(() => {
    if (audio !== null) {
      setCurrentAudio(audio);
      setPlayedTracks((prevTracks) => [...prevTracks, audio]);
      console.log("played tracks", playedTracks);
      handlePlay();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audio]);

  const handlePlay = () => {
    audioRef.current.play().catch((error) => {
      if (error.name === "NotAllowedError") {
        console.log("Audio playback was prevented by the browser.");
      } else {
        console.log("Error playing audio:", error.message);
      }
    });
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

  const handleCanPlayThrough = () => {
    if (isPlaying) {
      handlePlay();
    }
  };

  const handlePrevTrack = () => {
    if (playedTracks.length > 0) {
      // Создаем копию массива playedTracks
      const updatedTracks = [...playedTracks];

      if (updatedTracks.length > 1) {
        // Удаляем последний элемент из копии массива playedTracks
        updatedTracks.pop();
        setCurrentAudio(updatedTracks[updatedTracks.length - 1]);
        dispatch(setActiveItem(updatedTracks[updatedTracks.length - 1].id));
      }

      // Обновляем состояние playedTracks
      setPlayedTracks(updatedTracks);
      handlePlay();
    }
  };

  // ...

  const handleNextTrack = () => {
    if (currentAudio !== null) {
      const id = currentAudio.id + 1;
      let nextTrack = null;

      for (let i = 0; i < allTracks.length; i++) {
        if (allTracks[allTracks.length - 1].id < id) {
          nextTrack = allTracks[0];
          break;
        } else if (allTracks[i].id === id) {
          nextTrack = allTracks[i];
          break;
        }
      }

      if (
        nextTrack !== null &&
        nextTrack !== playedTracks[playedTracks.length - 1]
      ) {
        setCurrentAudio(nextTrack);
        dispatch(setActiveItem(nextTrack.id));
        setPlayedTracks((prevTracks) => [...prevTracks, nextTrack]);
        console.log(playedTracks);
        handlePlay();
      }
    }
  };

  // ...

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
          src={
            currentAudio
              ? currentAudio.track_file
              : "/audio/BobbyMarleniDropping.mp3"
          }
          onTimeUpdate={handleTimeUpdate}
          onCanPlayThrough={handleCanPlayThrough}
        >
          <source
            src={
              currentAudio
                ? currentAudio.track_file
                : "/audio/BobbyMarleniDropping.mp3"
            }
            type="audio/mpeg"
          />
          <track kind="captions" />
        </audio>
        <BarPlayer
          handlePrevTrack={handlePrevTrack}
          handleNextTrack={handleNextTrack}
          handlePlay={handlePlay}
          handlePause={handlePause}
          isPlaying={isPlaying}
          currentAudio={currentAudio}
        />
        <Volume />
      </div>
    </div>
  );
}
