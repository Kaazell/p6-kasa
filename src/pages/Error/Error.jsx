import { useNavigate } from "react-router-dom";
import s from "./style.module.scss";

export function Error() {
  const navigate = useNavigate();
  return (
    <div className={s.container}>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <p onClick={() => navigate("/")}>Retourner sur la page d'accueil</p>
    </div>
  );
}
