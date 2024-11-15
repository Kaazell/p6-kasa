import logo from "../../assets/images/logo-footer.png";
import s from "./style.module.scss";

export function Footer() {
  return (
    <footer className={s.footer}>
      <img src={logo} alt="Logo Kasa" />
      <h3 className={s.footer__text}>© 2020 Kasa. All rights reserved</h3>
    </footer>
  );
}
