import s from "./style.module.scss";

export function HousingCard(props) {
  return (
    <div className={s.card}>
      <img src={props.picture[0]} alt={props.title} />
      <div className={s.gradient}></div>
      <h2>{props.title}</h2>
    </div>
  );
}
