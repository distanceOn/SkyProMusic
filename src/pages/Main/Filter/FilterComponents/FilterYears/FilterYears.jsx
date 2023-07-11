import s from "./FilterYears.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getYearsState,
  setYearsState,
} from "../../../../../redux/slices/filterSlice";
import { useEffect, useState } from "react";

export default function FilterYears() {
  const dispatch = useDispatch();
  const dateSelectionData = useSelector(getYearsState);

  const [date, setDate] = useState(null);

  useEffect(() => {
    setDate(dateSelectionData.payload.filter.years.newer);
  }, [dateSelectionData]);

  const setNew = () => {
    return date === true
      ? dispatch(setYearsState(null))
      : dispatch(setYearsState(true));
  };

  const setOld = () => {
    return date === false
      ? dispatch(setYearsState(null))
      : dispatch(setYearsState(false));
  };

  return (
    <div className={s.container}>
      <div className={s.inputs}>
        <div className={s.input} onClick={setNew}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="9" cy="9" r="8.5" stroke="white" />
            <circle
              cx="9.0001"
              cy="9"
              r="5.4"
              fill="white"
              display={date === null || date === false ? "none" : "block"}
            />
          </svg>
          <p>Более новые</p>
        </div>
        <div className={s.input} onClick={setOld}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="9" cy="9" r="8.5" stroke="white" />
            <circle
              cx="9.0001"
              cy="9"
              r="5.4"
              fill="white"
              display={date === null || date === true ? "none" : "block"}
            />
          </svg>
          <p>Более старые</p>
        </div>
      </div>
    </div>
  );
}
