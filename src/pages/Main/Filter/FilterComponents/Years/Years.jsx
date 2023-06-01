import s from './Years.module.css'

export default function Years() {
  return (
    <div className={s.container}>
      <div className={s.inputs}>
        <div className={s.input}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="9" cy="9" r="8.5" stroke="white" />
            <circle cx="9.0001" cy="9" r="5.4" fill="white" />
          </svg>
          <p>Более новые</p>
        </div>
        <div className={s.input}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="9" cy="9" r="8.5" stroke="white" />
          </svg>
          <p>Более старые</p>
        </div>
      </div>
    </div>
  )
}
