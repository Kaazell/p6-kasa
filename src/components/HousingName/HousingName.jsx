import s from "./style.module.scss";

export function HousingName({ name, description }) {
  return (
    <>
      <h2 className={s.description}>{name}</h2>
      <p className={s.location}>{description}</p>
    </>
  );
}
