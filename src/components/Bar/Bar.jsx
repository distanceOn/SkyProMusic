import s from "./Bar.module.scss";
import BarPlayerBlock from "./BarContent/PlayerBlock/BarPlayerBlock";

export default function Bar() {
  return (
    <div className={s.bar}>
      <BarPlayerBlock />
    </div>
  );
}
