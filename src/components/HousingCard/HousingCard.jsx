import s from "./style.module.scss";

export function HousingCard(props) {
  return (
    <div className={s.card}>
      <img src={props.src} />
    </div>
  );
}
