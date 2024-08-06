import { Banner } from "../../components/Banner/Banner";
import picture from "../../assets/images/banner-home.png";
import { HousingName } from "../../components/HousingName/HousingName";
import { Tag } from "../../components/Tag/Tag";
import s from "./style.module.scss";
import { Host } from "../../components/Host/Host";
import { Stars } from "../../components/Stars/Stars";
import { Accordion } from "../../components/Accordion/Accordion";

export function Housing() {
  return (
    <>
      <Banner
        picture={picture}
        text={"Housing = true"}
        alternative_text={"Also this"}
        housing={true}
      />
      <div className={s.main_container}>
        <div>
          <HousingName
            name={"Cozy loft on the Canal Saint-Martin"}
            description={"Paris, Ile de France"}
          />
          <div className={s.tag_container}>
            <Tag />
            <Tag />
          </div>
        </div>
        <div className={s.host_details}>
          <Stars />
          <Host />
        </div>
      </div>
      <div className={s.accordion}>
        <Accordion />
      </div>
    </>
  );
}
