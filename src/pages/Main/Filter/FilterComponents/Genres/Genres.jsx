import s from "./Genres.module.css";

export default function Genres(props) {
  const showList = () => {
    if (props.genres !== undefined) {
      return props.genres.map((genre, index) => {
        return (
          <li className={s.author} key={index}>
            {genre}
          </li>
        );
      });
    }
  };
  return (
    <div className={s.container}>
      <ul className={s.authors}>{showList()}</ul>
    </div>
  );
}
