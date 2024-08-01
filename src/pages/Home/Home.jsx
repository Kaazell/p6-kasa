import { Banner } from "../../components/Banner/Banner";
import picture from "../../assets/banner-home.png";

export function Home() {
  return (
    <div>
      <Banner
        picture={picture}
        alternativeText={"Falaise"}
        text="Chez vous, partout et ailleurs"
      />
    </div>
  );
}
