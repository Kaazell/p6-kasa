import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import s from "./style.module.scss";

export function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <img
        onClick={() => navigate("/")}
        src={logo}
        className={s.header_logo}
        alt="Logo Kasa"
      />
      <ul>
        <li>
          <a href="#" onClick={() => navigate("/")}>
            ACCUEIL
          </a>
        </li>
        <li>
          <a href="#" onClick={() => navigate("/about")}>
            A PROPOS
          </a>
        </li>
      </ul>
    </header>
  );
}
