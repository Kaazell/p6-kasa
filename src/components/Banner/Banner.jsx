import s from "./style.module.scss";
import json from "../../assets/json/housing.json";
import { useParams } from "react-router-dom";
import { useState } from "react";

// L'attribut housing permet de determiner si le present composant est prevu pour la page 'home' ou 'housing'.
export function Banner({ text, picture, alternative_text, housing }) {
  const { id } = useParams();
  const currentItem = json.find((item) => item.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    const photos = currentItem.pictures;
    // L'état initial est 0, pour la première image du tableau.
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      );
    };

    const prevImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? photos.length - 1 : prevIndex - 1
      );
    };

    return (
      //Affichage selon que le composant soit ouvert dans /housing/:id
      <div className={s.banner_container}>
        <img
          className={housing ? s.banner_housing : s.banner_image}
          src={photos[currentImageIndex]}
          alt={alternative_text}
        />
        <button className={s.leftButton} onClick={prevImage}>
          <i className="fa-solid fa-chevron-left fa-2xl"></i>
        </button>
        <p className={s.currentSlide}>
          {currentImageIndex + 1} / {photos.length}
        </p>
        <button className={s.rightButton} onClick={nextImage}>
          <i className="fa-solid fa-chevron-right fa-2xl"></i>
        </button>
        <div className={s.banner_text}>{text}</div>
      </div>
    );
  }
}
