import React, { useEffect } from "react";
import { useState } from "react";

const AudioContext = React.createContext();

export const AudioProvider = ({ children }) => {
  const [audio, setAudio] = useState(null);
  const [audioParams, setAudioParams] = useState({ play: false, pause: true });

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

  const [searchName, setSearchName] = useState(null);

  return (
    <AudioContext.Provider
      value={{
        audio,
        setAudio,
        handleSetNewAudio,
        audioParams,
        searchName,
        setSearchName,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export default AudioContext;
