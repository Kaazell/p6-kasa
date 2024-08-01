import logo from "../../assets/logo-footer.png";
import s from "./Footer.module.scss";

export function Footer() {
  return (
    <footer>
      <img src={logo} alt="Logo Kasa" />
      <h3>© 2020 Kasa. All rights reserved</h3>
    </footer>
  );
}
