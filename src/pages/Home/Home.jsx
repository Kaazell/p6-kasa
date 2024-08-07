import { Banner } from "../../components/Banner/Banner";
import { HousingCard } from "../../components/HousingCard/HousingCard";
import picture from "../../assets/images/banner-home.png";
import s from "./style.module.scss";
import json from "../../assets/json/housing.json";
import { useNavigate, useParams } from "react-router-dom";

console.log(json);

export function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Banner
        picture={picture}
        alternativeText={"Falaise"}
        text="Chez vous, partout et ailleurs"
        housing={false}
      />
      <div className={s.card_container}>
        {json.map((item) => (
          <div
            className={s.galleryItem_container}
            key={item.id}
            onClick={() => navigate("/housing/" + item.id)}
          >
            <HousingCard
              key={item.id}
              title={item.title}
              picture={item.pictures}
              currentData={item}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
