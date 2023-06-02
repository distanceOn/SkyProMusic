import React from "react";
import { useState } from "react";

const AudioContext = React.createContext();

export const AudioProvider = ({ children }) => {
  const [audio, setAudio] = useState(null);

  return (
    <AudioContext.Provider value={{ audio, setAudio }}>
      {children}
    </AudioContext.Provider>
  );
};

export default AudioContext;
