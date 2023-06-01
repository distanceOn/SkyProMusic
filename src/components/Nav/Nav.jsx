import s from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../Imgs/Logo";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={s.nav}>
      <NavLink to="/">
        <div className={s.logo}>
          <Logo className={s.image} alt="logo" />
        </div>
      </NavLink>

      <button type="button" onClick={handleMenuClick} className={s.button}>
        <div className={s.burger}>
          <span className={s.line} />
          <span className={s.line} />
          <span className={s.line} />
        </div>
      </button>
      {isMenuOpen ? (
        <div className={s.menu}>
          <ul className={s.list}>
            <NavLink to="/">
              <li className={s.item}>Главное</li>
            </NavLink>
            <NavLink to="/mytracks">
              <li className={s.item}>Мой плейлист</li>
            </NavLink>
            <NavLink to="/login">
              <li className={s.item}>Выйти</li>
            </NavLink>
          </ul>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}
