import s from "./style.module.scss";
import picture from "../../assets/images/banner-about.png";
import { Banner } from "../../components/Banner/Banner";
import { AccordionAbout } from "../../components/AccordionAbout/AccordionAbout";

export function About() {
  return (
    <>
      <Banner picture={picture} />
      <div className={s.container}>
        <AccordionAbout
          buttonText="Fiabilité"
          description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
         régulièrement vérifiées par nos équipes."
        />
        <AccordionAbout
          buttonText="Respect"
          description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
        perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <AccordionAbout
          buttonText="Service"
          description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.."
        />
        <AccordionAbout
          buttonText="Sécurité"
          description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
        correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
        également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </>
  );
}
