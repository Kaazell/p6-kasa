import s from "./style.module.scss";
import json from "../../assets/json/housing.json";
import { useParams } from "react-router-dom";

// L'attribut housing permet de determiner si le present composant est prevu pour la page 'home' ou 'housing'.
export function Banner({ text, picture, alternative_text, housing }) {
  const { id } = useParams();
  const currentItem = json.find((item) => item.id === id);
  if (!currentItem) {
    return (
      //Affichage selon que le composant soit ouvert dans /home
      <div className={s.banner_container}>
        <img
          className={housing ? s.banner_housing : s.banner_image}
          src={picture}
          alt={alternative_text}
        />
        <div className={s.banner_text}>{text}</div>
      </div>
    );
  } else {
    return (
      //Affichage selon que le composant soit ouvert dans /housing/:id
      <div className={s.banner_container}>
        <img
          className={housing ? s.banner_housing : s.banner_image}
          src={currentItem.cover}
          alt={alternative_text}
        />
        <div className={s.banner_text}>{text}</div>
      </div>
    );
  }
}
