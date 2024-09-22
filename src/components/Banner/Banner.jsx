import s from "./style.module.scss";

export function Banner({ text, picture, alternative_text }) {
  return (
    <div className={s.banner_container}>
      <img className={s.banner_image} src={picture} alt={alternative_text} />
      <h1 className={s.banner_text}>{text}</h1>
    </div>
  );
}
