import React, { useEffect } from "react";
import { useState } from "react";

const AudioContext = React.createContext();

export const AudioProvider = ({ children }) => {
  const [audio, setAudio] = useState(null);
  const [prevAudio, setPrevAudio] = useState(null);
  const [audioParams, setAudioParams] = useState({ play: false, pause: true });

  useEffect(() => {
    console.log("audio ", audio);
  }, [audio]);

  useEffect(() => {
    console.log("Params ", audioParams);
  }, [audioParams]);

  useEffect(() => {
    console.log("PREV", prevAudio);
  }, [prevAudio]);

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
      setPrevAudio(audio);
      setAudio(track);
      setAudioParams({ play: true, pause: false });
    }
  };

  return (
    <AudioContext.Provider
      value={{ audio, handleSetNewAudio, audioParams, prevAudio }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export default AudioContext;
