import { useState } from 'react'
import Button from './FilterComponents/Button/Button'
import Title from './FilterComponents/Title/Title'
import Authors from './FilterComponents/Authors/Authors'
import s from './Filter.module.css'
import Years from './FilterComponents/Years/Years'
import Genres from './FilterComponents/Genres/Genres'

export default function Filter() {
  const [isFilterAuthorsOpen, setIsFilterAuthorsOpen] = useState(false)
  const [isFilterYearsOpen, setIsFilterYearsOpen] = useState(false)
  const [isFilterGenresOpen, setIsFilterGenresOpen] = useState(false)

  const toggleFilterAuthorsClick = () => {
    setIsFilterAuthorsOpen(!isFilterAuthorsOpen)
    setIsFilterYearsOpen(false)
    setIsFilterGenresOpen(false)
  }

  const toggleFilterYearsClick = () => {
    setIsFilterYearsOpen(!isFilterYearsOpen)
    setIsFilterAuthorsOpen(false)
    setIsFilterGenresOpen(false)
  }

  const toggleFilterGenresClick = () => {
    setIsFilterGenresOpen(!isFilterGenresOpen)
    setIsFilterYearsOpen(false)
    setIsFilterAuthorsOpen(false)
  }

  return (
    <div className={s.filter}>
      <Title />
      <div className={s.container}>
        <Button
          active={isFilterAuthorsOpen ? true : ''}
          filter="исполнителю"
          onClick={toggleFilterAuthorsClick}
        />
        {isFilterAuthorsOpen && <Authors />}
      </div>
      <div className={s.container}>
        <Button
          active={isFilterYearsOpen ? true : ''}
          filter="году выпуска"
          onClick={toggleFilterYearsClick}
        />{' '}
        {isFilterYearsOpen && <Years />}
      </div>
      <div className={s.container}>
        <Button
          active={isFilterGenresOpen ? true : ''}
          filter="жанру"
          onClick={toggleFilterGenresClick}
        />
        {isFilterGenresOpen && <Genres />}
      </div>
    </div>
  )
}
