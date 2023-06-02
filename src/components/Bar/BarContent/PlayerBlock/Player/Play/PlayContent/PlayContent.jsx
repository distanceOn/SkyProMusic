import { useContext, useEffect, useState } from "react";
import ContentAuthor from "./ContentComponents/Author/ContentTrack";
import ContentTrack from "./ContentComponents/Author/ContentTrack";
import ContentCover from "./ContentComponents/Cover/ContentCover";
import s from "./PlayContent.module.css";
import AudioContext from "../../../../../../../contexts/audioContext";
import PlayLikeDis from "../PlayLikeDis/PlayLikeDis";

export default function PlayContent() {
  const { audio } = useContext(AudioContext);

  const [name, setName] = useState();
  const [author, setAuthor] = useState();

  useEffect(() => {
    if (audio) {
      setName(audio.name);
      setAuthor(audio.author);
    }
  }, [audio]);

  return (
    <div>
      (
      <div className={s.trackPlay__content}>
        <ContentCover />
        <div className={s.trackPlay__texts}>
          <ContentTrack href="#" name={audio ? name : "Ты та..."} />
          <ContentAuthor href="#" name={audio ? author : "Баста"} />
        </div>
        <PlayLikeDis />
      </div>
      )
    </div>
  );
}
