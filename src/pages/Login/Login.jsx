import Form from "./Form/Form";
import s from "./Login.module.css";

export default function Login() {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <Form />
      </div>
    </div>
  );
}
