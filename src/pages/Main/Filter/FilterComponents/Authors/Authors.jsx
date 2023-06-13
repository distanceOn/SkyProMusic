import { useEffect, useState } from "react";
import s from "./Authors.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getAuthorState,
  setAuthorState,
} from "../../../../../redux/slices/filterSlice";

export default function Authors(props) {
  const [isActive, setIsActive] = useState(null);

  const dispatch = useDispatch();
  const authorSelectionData = useSelector(getAuthorState);

  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    setAuthorData(authorSelectionData.payload.filter.authors.author);
  }, [authorSelectionData]);

  useEffect(() => {
    console.log(authorData);
  }, [authorData]);

  const showList = () => {
    if (props.authors !== undefined) {
      return props.authors.map((author, index) => {
        const handleActive = () => {
          setIsActive(isActive === index ? null : index);
          dispatch(setAuthorState(authorData === author ? null : author));
        };
        return (
          <li
            className={isActive === index ? s.active : s.author}
            key={index}
            onClick={handleActive}
          >
            {author}
          </li>
        );
      });
    }
  };

  return (
    <div className={s.container}>
      <ul className={s.authors}>{showList()}</ul>
    </div>
  );
}
