import s from "./Authors.module.css";

export default function Authors(props) {
  const showList = () => {
    if (props.authors !== undefined) {
      return props.authors.map((author, index) => {
        return (
          <li className={s.author} key={index}>
            {author}
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
