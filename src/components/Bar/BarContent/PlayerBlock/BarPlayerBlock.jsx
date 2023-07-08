import { useContext, useEffect, useRef, useState } from "react";
import BarPlayer from "./Player/BarPlayer";
import Volume from "./Volume/Volume";
import s from "./BarPlayerBlock.module.scss";
import AudioContext from "../../../../contexts/audioContext";
import { getTracks, setActiveItem } from "../../../../redux/slices/tracksSlice";
import { useDispatch, useSelector } from "react-redux";
import TemplateAudio from "./audio/BobbyMarleniDropping.mp3";

export default function BarPlayerBlock() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const dispatch = useDispatch();

  const { audio, setAudio, audioParams, setAudioParams } =
    useContext(AudioContext);

  const allTracksData = useSelector(getTracks);
  const allTracks = allTracksData.payload.allTracks.tracks;

  const [playedTracks, setPlayedTracks] = useState([]);

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (audio !== null) {
      if (audio.stared_user) {
        setIsLiked(
          audio.stared_user.some(
            (element) => element.id === parseInt(localStorage.getItem("id"))
          )
        );
      }
    }
  }, [audio]);

  useEffect(() => {
    if (audio !== null && audioParams.play === true) {
      setAudio(audio);
      setPlayedTracks((prevTracks) => [...prevTracks, audio]);
      handlePlay();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audio, audioParams.play]);

  useEffect(() => {
    const savedTime = localStorage.getItem("currentTrackTime");
    const savedPausedState = localStorage.getItem("trackPausedState");

    if (savedTime && audioRef.current) {
      audioRef.current.currentTime = parseFloat(savedTime);
      setCurrentTime(parseFloat(savedTime));
    }

    if (savedPausedState && audioParams.pause === true) {
      setAudioParams({ play: false, pause: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const newTime = audioRef.current.currentTime;
      setCurrentTime(newTime);
      localStorage.setItem("currentTrackTime", newTime.toString());
    }
  };

  const handleSeek = (event) => {
    const time = parseFloat(event.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
      localStorage.setItem("currentTrackTime", time.toString());
    }
  };

  const handleCanPlayThrough = () => {
    if (isPlaying && audioParams.play === true) {
      handlePlay();
    }
  };

  const handlePrevTrack = () => {
    if (playedTracks.length > 0) {
      const updatedTracks = [...playedTracks];
      if (updatedTracks.length > 1) {
        updatedTracks.pop();
        setAudio(updatedTracks[updatedTracks.length - 1]);
        dispatch(setActiveItem(updatedTracks[updatedTracks.length - 1].id));
      }
      setPlayedTracks(updatedTracks);
      handlePlay();
    }
  };

  const handleNextTrack = () => {
    if (audio !== null) {
      const id = audio.id + 1;
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
        setAudio(nextTrack);
        dispatch(setActiveItem(nextTrack.id));
        setPlayedTracks((prevTracks) => [...prevTracks, nextTrack]);
        handlePlay();
      }
    }
  };

  return (
    <div className={s.bar__content}>
      <input
        type="range"
        className={s.bar__playerProgress}
        min="0"
        max={audioRef.current?.duration || 0}
        value={currentTime}
        onChange={handleSeek}
      />
      <div className={s.bar__playerBlock}>
        <audio
          ref={audioRef}
          src={audio ? audio.track_file : TemplateAudio}
          onTimeUpdate={handleTimeUpdate}
          onCanPlayThrough={handleCanPlayThrough}
          onEnded={handleNextTrack}
        >
          <source
            src={audio ? audio.track_file : TemplateAudio}
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
          currentAudio={audio}
          isLiked={isLiked}
          setIsLiked={setIsLiked}
          id={audio !== null ? audio.id : undefined}
        />
        <Volume />
      </div>
    </div>
  );
}
