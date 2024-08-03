import { Banner } from "../../components/Banner/Banner";
import picture from "../../assets/images/banner-home.png";
import { HousingName } from "../../components/HousingName/HousingName";
import { Tag } from "../../components/Tag/Tag";
import s from "./Housing.module.scss";

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
      <div className={s.tag_container}>
        <Tag />
        <Tag />
      </div>
    </div>
  );
}
