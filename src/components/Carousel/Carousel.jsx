import s from "./style.module.scss";
import json from "../../assets/json/housing.json";
import { useParams } from "react-router-dom";
import { useState } from "react";

// L'attribut housing permet de determiner si le present composant est prevu pour la page 'home' ou 'housing'.
export function Carousel() {
  const { id } = useParams();
  const currentItem = json.find((item) => item.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const photos = currentItem.pictures;
  // L'état initial est 0, pour la première image du tableau.
  const nextImage = () => {
    setCurrentImageIndex((index) =>
      index === photos.length - 1 ? 0 : index + 1
    );
  };
  const prevImage = () => {
    setCurrentImageIndex((index) =>
      index === 0 ? photos.length - 1 : index - 1
    );
  };
  return (
    //Affichage selon que le composant soit ouvert dans /housing/:id
    <div className={s.carousel}>
      <img
        className={s.carousel__image}
        src={photos[currentImageIndex]}
        alt={currentItem.title}
      />

      {photos.length > 1 && (
        <>
          <button className={`${s.carousel__left} ${s.carousel__buttons}`} onClick={prevImage}>
            <i className="fa-solid fa-chevron-left fa-2xl"></i>
          </button>
          <p className={s.carousel__counter}>
            {currentImageIndex + 1} / {photos.length}
          </p>
          <button className={`${s.carousel__right} ${s.carousel__buttons}`} onClick={nextImage}>
            <i className="fa-solid fa-chevron-right fa-2xl"></i>
          </button>
        </>
      )}
    </div>
  );
}
