import s from "./style.module.scss";

export function Host(props) {
  return (
    <div className={s.host}>
      <div className={s.host__name}>{props.name}</div>
      <div className={s.host__picture}>
        <img className={s.host__picture__image} src={props.picture} alt="Host" />
      </div>
    </div>
  );
}
