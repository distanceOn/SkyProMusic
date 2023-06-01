import s from './Author.module.css'

export default function Author(props) {
  return (
    <div className={s.author}>
      <a className={s.author__link} href={props.href}>
        {props.name}
      </a>
    </div>
  )
}
