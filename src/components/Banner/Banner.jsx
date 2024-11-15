import s from "./style.module.scss";

export function Banner({ text, picture, alternative_text }) {
  return (
    <div className={s.banner}>
      <img className={s.banner__image} src={picture} alt={alternative_text} />
      <h1 className={s.banner__text}>{text}</h1>
    </div>
  );
}
