import React, { useEffect, useState } from "react";

const AudioContext = React.createContext();

export const AudioProvider = ({ children }) => {
  const [audio, setAudio] = useState(null);
  const [audioParams, setAudioParams] = useState({ play: false, pause: true });
  const [searchName, setSearchName] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (audio && audio.stared_user) {
      setIsLiked(
        audio.stared_user.some(
          (element) => element.id === parseInt(localStorage.getItem("id"))
        )
      );
    }
  }, [audio]);

  useEffect(() => {
    console.log("audio ", audio);
  }, [audio]);

  useEffect(() => {
    console.log("Params ", audioParams);
  }, [audioParams]);

  const handleSetNewAudio = (track) => {
    if (audio === null) {
      setAudio(track);
      setAudioParams({ play: true, pause: false });
    } else if (audio === track) {
      if (audioParams.play && !audioParams.pause) {
        setAudioParams({ play: false, pause: true });
      } else if (!audioParams.play && audioParams.pause) {
        setAudioParams({ play: true, pause: false });
      }
    } else {
      setAudio(track);
      setAudioParams({ play: true, pause: false });
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
