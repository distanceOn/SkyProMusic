import s from './Album.module.css'

export default function Album(props) {
  return (
    <div className={s.album}>
      <a className={s.album__link} href={props.href}>
        {props.name}
      </a>
    </div>
  )
}
