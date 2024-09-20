import { HousingName } from "../../components/HousingName/HousingName";
import { Tag } from "../../components/Tag/Tag";
import s from "./style.module.scss";
import { Host } from "../../components/Host/Host";
import { Stars } from "../../components/Stars/Stars";
import { Accordion } from "../../components/Accordion/Accordion";
import json from "../../assets/json/housing.json";
import { useParams } from "react-router-dom";
import { Carousel } from "../../components/Carousel/Carousel";

export function Housing() {
  const { id } = useParams();
  const currentItem = json.find((item) => item.id === id);
  const tags = currentItem.tags;

  return (
    <>
      <Carousel
        picture={currentItem.cover}
        alternative_text={currentItem.title}
      />
      <div className={s.main_container}>
        <div>
          <HousingName
            name={currentItem.title}
            description={currentItem.location}
          />
          <div className={s.tag_container}>
            {tags.map((item) => (
              <Tag key={item} tag={item} />
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
      <div className={s.accordions_container}>
        <Accordion
          buttonText="Description"
          description={currentItem.description}
        />
        <Accordion
          buttonText="Equipements"
          equipement={currentItem.equipments}
        />
      </div>
    </>
  );
}
