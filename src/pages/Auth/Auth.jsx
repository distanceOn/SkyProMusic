import Form from "./Form/Form";
import s from "./Auth.module.css";
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
