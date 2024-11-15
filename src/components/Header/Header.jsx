import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import s from "./style.module.scss";

export function Header() {
  return (
    <header>
      <NavLink to="/">
        <img src={logo} className={s.header__logo} alt="Logo Kasa" />
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? s.active_link : "")}
            >
              ACCUEIL
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? s.active_link : "")}
            >
              A PROPOS
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
