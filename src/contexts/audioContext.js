import React, { useEffect, useState } from "react";

const AudioContext = React.createContext();

export const AudioProvider = ({ children }) => {
  const [audio, setAudio] = useState(null);
  const [audioParams, setAudioParams] = useState({ play: false, pause: true });
  const [searchName, setSearchName] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audio && audio.stared_user) {
      setIsLiked(
        audio.stared_user.some(
          (element) => element.id === parseInt(localStorage.getItem("id"))
        )
      );
    }
  }, [audio]);

  const handleSetNewAudio = (track) => {
    if (audio === null) {
      setAudio(track);
      setAudioParams({ play: true, pause: false });
    } else if (audio === track) {
      if (isPlaying === true) {
        setAudioParams({ play: false, pause: true });
        setIsPlaying(false);
      } else if (isPlaying === false) {
        setAudioParams({ play: true, pause: false });
        setIsPlaying(true);
      }
    } else {
      setAudio(track);
      setAudioParams({ play: true, pause: false });
      setIsPlaying(true);
    }
  };

  return (
    <AudioContext.Provider
      value={{
        audio,
        setAudio,
        handleSetNewAudio,
        audioParams,
        setAudioParams,
        isPlaying,
        setIsPlaying,
        searchName,
        setSearchName,
        isLiked,
        setIsLiked,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export default AudioContext;
