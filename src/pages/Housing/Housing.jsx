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

  return (
    <>
      <Carousel />
      <section className={s.main_container}>
        <article>
          <HousingName
            name={currentItem.title}
            description={currentItem.location}
          />
          <div className={s.tag_container}>
            {currentItem.tags.map((item) => (
              <Tag key={item} tag={item} />
            ))}
          </div>
        </article>
        <article className={s.host_details}>
          <Stars rating={currentItem.rating} />
          <Host
            name={currentItem.host.name}
            picture={currentItem.host.picture}
          />
        </article>
      </section>
      <section className={s.accordions_container}>
        <Accordion
          buttonText="Description"
          description={currentItem.description}
        />
        <Accordion
          buttonText="Equipements"
          equipement={currentItem.equipments}
        />
      </section>
    </>
  );
}
