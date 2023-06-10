import { useEffect, useState } from "react";
import ContentAuthor from "./ContentComponents/Author/ContentTrack";
import ContentTrack from "./ContentComponents/Author/ContentTrack";
import ContentCover from "./ContentComponents/Cover/ContentCover";
import s from "./PlayContent.module.css";
import PlayLikeDis from "../PlayLikeDis/PlayLikeDis";

export default function PlayContent(props) {
  const currentAudio = props.currentAudio;

  const [name, setName] = useState();
  const [author, setAuthor] = useState();

  useEffect(() => {
    if (currentAudio !== null) {
      setName(currentAudio.name);
      setAuthor(currentAudio.author);
    }
  }, [currentAudio]);

  return (
    <div>
      (
      <div className={s.trackPlay__content}>
        <ContentCover />
        <div className={s.trackPlay__texts}>
          <ContentTrack href="#" name={currentAudio ? name : "Ты та..."} />
          <ContentAuthor href="#" name={currentAudio ? author : "Баста"} />
        </div>
        <PlayLikeDis />
      </div>
      )
    </div>
  );
}
