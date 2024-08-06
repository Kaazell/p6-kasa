import { Banner } from "../../components/Banner/Banner";
import { HousingCard } from "../../components/HousingCard/HousingCard";
import picture from "../../assets/images/banner-home.png";
import s from "./style.module.scss";
import json from "../../assets/json/housing.json";
console.log(json);

export function Home() {
  return (
    <div>
      <Banner
        picture={picture}
        alternativeText={"Falaise"}
        text="Chez vous, partout et ailleurs"
        housing={false}
      />
      <div className={s.card_container}>
        {json.map((elem) => (
          <HousingCard key={elem.id} src={elem.pictures[0]} />
        ))}
      </div>
    </div>
  );
}
