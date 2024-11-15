import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import s from "./style.module.scss";

export function Header() {
  return (
    <header className={s.header}>
      <NavLink to="/">
        <img src={logo} className={s.header__logo} alt="Logo Kasa" />
      </NavLink>
      <nav>
        <ul className={s.navlist}>
          <li className={s.navlist__item}>
            <NavLink
              to="/"
              className={({ isActive }) => `${s.navlist__item__link} ${isActive ? s.active_link : ""}`}
            >
              ACCUEIL
            </NavLink>
          </li>
          <li className={s.navlist__item}>
            <NavLink
              to="/about"
              className={({ isActive }) => `${s.navlist__item__link} ${isActive ? s.active_link : ""}`}
            >
              A PROPOS
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
