import s from './Genres.module.css'

export default function Genres() {
  return (
    <div className={s.container}>
      <ul className={s.authors}>
        <li className={s.active}>Рок</li>
        <li className={s.author}>Хип-хоп</li>
        <li className={s.author}>Поп-музыка</li>
        <li className={s.author}>Инди</li>
        <li className={s.author}>Техно</li>
      </ul>
    </div>
  )
}
