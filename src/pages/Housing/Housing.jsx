import { Banner } from "../../components/Banner/Banner";
import picture from "../../assets/images/banner-home.png";
import { HousingName } from "../../components/HousingName/HousingName";

export function Housing() {
  return (
    <div>
      <Banner
        picture={picture}
        text={"Housing = true"}
        alternative_text={"Also this"}
        housing={true}
      />
      <HousingName
        name={"Cozy loft on the Canal Saint-Martin"}
        description={"Paris, Ile de France"}
      />
    </div>
  );
}
