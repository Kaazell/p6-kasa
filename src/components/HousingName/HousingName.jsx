import s from "./style.module.scss";

export function HousingName({ name, description }) {
  return (
    <>
      <h1 className={s.description}>{name}</h1>
      <p className={s.location}>{description}</p>
    </>
  );
}
