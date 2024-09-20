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
    <div className={s.carousel_container}>
      <img
        className={s.carousel_housing}
        src={photos[currentImageIndex]}
        alt={currentItem.title}
      />

      {photos.length > 1 && (
        <>
          <button className={s.left_button} onClick={prevImage}>
            <i className="fa-solid fa-chevron-left fa-2xl"></i>
          </button>
          <p className={s.current_slide}>
            {currentImageIndex + 1} / {photos.length}
          </p>
          <button className={s.right_button} onClick={nextImage}>
            <i className="fa-solid fa-chevron-right fa-2xl"></i>
          </button>
        </>
      )}
    </div>
  );
}
