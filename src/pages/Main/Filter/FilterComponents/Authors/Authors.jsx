import s from './Authors.module.css'

export default function Authors() {
  return (
    <div className={s.container}>
      <ul className={s.authors}>
        <li className={s.active}>Michael Jackson</li>
        <li className={s.author}>Frank Sinatra</li>
        <li className={s.author}>Calvin Harris</li>
        <li className={s.author}>Zhu</li>
        <li className={s.author}>Arctic Monkeys</li>
        <li className={s.author}>Arctic Monkeys</li>
        <li className={s.author}>Arctic Monkeys</li>
        <li className={s.author}>Arctic Monkeys</li>
      </ul>
    </div>
  )
}
