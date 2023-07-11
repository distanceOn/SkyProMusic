import { useEffect, useState } from "react";
import s from "./FilterButton.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getAuthorState,
  getSelectionAuthorState,
  setAuthorState,
  setSelectionAuthorState,
} from "../../../../../redux/slices/filterSlice";

export default function FilterButton(props) {
  const isActiveData = useSelector(getSelectionAuthorState);

  const [isActive, setIsActive] = useState(null);

  useEffect(() => {
    setIsActive(isActiveData.payload.filter.selections.author);
  }, [isActiveData]);

  const dispatch = useDispatch();
  const authorSelectionData = useSelector(getAuthorState);

  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    setAuthorData(authorSelectionData.payload.filter.authors.author);
  }, [authorSelectionData]);

  const showList = () => {
    if (props.authors !== undefined) {
      return props.authors.map((author, index) => {
        const handleActive = () => {
          dispatch(setSelectionAuthorState(isActive === index ? null : index));
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
