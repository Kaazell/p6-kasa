import logo from "../../assets/logo.png";
import s from "./Header.module.scss";

export function Header() {
  return (
    <header>
      <img src={logo} className={s.header_logo} alt="Logo Kasa" />
      <ul>
        <li>
          <a href="#">ACCUEIL</a>
        </li>
        <li>
          <a href="#">A PROPOS</a>
        </li>
      </ul>
    </header>
  );
}
