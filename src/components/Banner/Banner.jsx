import s from "./Banner.module.scss";

export function Banner({ text, picture, alternative_text, housing }) {
  return (
    <div className={s.banner_container}>
      <img
        className={housing ? s.banner_housing : s.banner_image}
        src={picture}
        alt={alternative_text}
      />
      <div className={s.banner_text}>{text}</div>
    </div>
  );
}
