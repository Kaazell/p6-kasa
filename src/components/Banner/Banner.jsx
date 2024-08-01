// import s from "./Banner.module.scss";

// export function Banner({ text, picture, alternativeText }) {
//   return (
//     <div className={s.banner_container}>
//       <img className={s.banner_image} src={picture} alt={alternativeText} />
//       <h2 className={s.banner_text}>{text}</h2>
//     </div>
//   );
// }

import s from "./Banner.module.scss";

export function Banner({ text, picture, alternative_text }) {
  return (
    <div className={s.banner_container}>
      <img className={s.banner_image} src={picture} alt={alternative_text} />
      <div className={s.banner_text}>{text}</div>
    </div>
  );
}
