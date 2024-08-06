import s from "./style.module.scss";
import { useNavigate } from "react-router-dom";

export function HousingCard(props) {
  return (
    <div className={s.card}>
      <img src={props.picture[0]} />
    </div>
  );
}
