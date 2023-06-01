import s from './Bar.module.css'
import BarPlayerBlock from './BarContent/PlayerBlock/BarPlayerBlock'

export default function Bar() {
  return (
    <div className={s.bar}>
      <BarPlayerBlock />
    </div>
  )
}
