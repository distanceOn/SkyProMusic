import s from "./Title.module.scss";

export default function Title(props) {
  if (props.postscript) {
    return (
      <div className={s.title}>
        <div className={s.image}>
          <svg
            className={s.svg}
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 16V1.9697L19 1V13" stroke="#4E4E4E" />
            <ellipse cx="4.5" cy="16" rx="3.5" ry="2" stroke="#4E4E4E" />
            <ellipse cx="15.5" cy="13" rx="3.5" ry="2" stroke="#4E4E4E" />
          </svg>
        </div>
        <div>
          <a className={s.title__link} href={props.href}>
            {props.name}
            <span className={s.title__span}>{props.postscript}</span>
          </a>
        </div>
      </div>
    );
  }
  return (
    <div className={s.title}>
      <div className={s.image}>
        <svg
          className={s.svg}
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 16V1.9697L19 1V13" stroke="#4E4E4E" />
          <ellipse cx="4.5" cy="16" rx="3.5" ry="2" stroke="#4E4E4E" />
          <ellipse cx="15.5" cy="13" rx="3.5" ry="2" stroke="#4E4E4E" />
        </svg>
      </div>
      <div>
        <div className={s.title__link}>
          {props.name} <span className={s.title__span} />
        </div>
      </div>
    </div>
  );
}
