import Form from "./AuthForm/AuthForm";
import s from "./Auth.module.scss";
import { useLocation } from "react-router-dom";

export default function Auth() {
  // проверяем где находимся
  const location = useLocation();

  const currentPath = location.pathname;

  //
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <Form currentPath={currentPath} />
      </div>
    </div>
  );
}
