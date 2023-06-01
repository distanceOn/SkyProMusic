import s from './ControlsPrev.module.css'

export default function ControlsPrev() {
  return (
    <div className={s.prev}>
      <svg
        className={s.prev__svg}
        alt="prev"
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 2V12.5" stroke="white" />
        <path d="M3 7L12.75 0.937823L12.75 13.0622L3 7Z" fill="#D9D9D9" />
      </svg>
    </div>
  )
}
