import s from "./Input.module.css";

export default function Input(props) {
  return (
    <div className={s.container}>
      {props.placeholder === "Логин" ? (
        <input
          className={s.input}
          type="text"
          placeholder={props.placeholder}
        />
      ) : (
        <input
          className={s.input}
          type="text"
          placeholder={props.placeholder}
        />
      )}
    </div>
  );
}
