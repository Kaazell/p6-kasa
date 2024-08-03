import { Banner } from "../../components/Banner/Banner";
import { HousingCard } from "../../components/HousingCard/HousingCard";
import picture from "../../assets/images/banner-home.png";
import s from "./style.module.scss";
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
        <HousingCard />
        <HousingCard />
        <HousingCard />
        <HousingCard />
        <HousingCard />
        <HousingCard />
      </div>
    </div>
  );
}
