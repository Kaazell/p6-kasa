import { Banner } from "../../components/Banner/Banner";
import picture from "../../assets/images/banner-home.png";
import { HousingName } from "../../components/HousingName/HousingName";
import { Tag } from "../../components/Tag/Tag";
import s from "./style.module.scss";
import { Host } from "../../components/Host/Host";
import { Stars } from "../../components/Stars/Stars";
import { Accordion } from "../../components/Accordion/Accordion";
import json from "../../assets/json/housing.json";
import { useParams } from "react-router-dom";

export function Housing() {
  const { id } = useParams();
  const currentItem = json.find((item) => item.id === id);
  const tags = currentItem.tags;

  return (
    <>
      <Banner
        picture={currentItem.cover}
        alternative_text={"Also this"}
        housing={true}
      />
      <div className={s.main_container}>
        <div>
          <HousingName
            name={currentItem.title}
            description={currentItem.location}
          />
          <div className={s.tag_container}>
            {tags.map((item) => (
              <Tag tag={item} />
            ))}
          </div>
        </div>
        <div className={s.host_details}>
          <Stars rating={currentItem.rating} />
          <Host
            name={currentItem.host.name}
            picture={currentItem.host.picture}
          />
        </div>
      </div>
      <div className={s.accordion}>
        <Accordion />
      </div>
    </>
  );
}
