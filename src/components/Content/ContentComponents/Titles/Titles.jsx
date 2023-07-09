import Title from "./Title/Title";
import s from "./Titles.module.scss";

export default function Titles() {
  return (
    <div className={s.title}>
      <Title class={s.col01} name="Трек" />
      <Title class={s.col02} name="ИСПОЛНИТЕЛЬ" />
      <Title class={s.col03} name="АЛЬБОМ" />
      <Title class={s.col04} name="" />
    </div>
  );
}
