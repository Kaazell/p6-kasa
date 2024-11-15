import s from "./style.module.scss";

export function HousingCard(props) {
  return (
    <div className={s.card}>
      <img className={s.card__img} src={props.picture[0]} alt={props.title} />
      <div className={s.card__gradient}></div>
      <h2 className={s.card__title}>{props.title}</h2>
    </div>
  );
}
