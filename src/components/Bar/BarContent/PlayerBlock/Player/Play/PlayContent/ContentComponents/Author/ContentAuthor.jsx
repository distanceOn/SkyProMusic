import s from './ContentAuthor.module.css'

export default function ContentAuthor(props) {
  return (
    <div className={s.author}>
      <a className={s.author__link} href={props.href}>
        {props.name}
      </a>
    </div>
  )
}
