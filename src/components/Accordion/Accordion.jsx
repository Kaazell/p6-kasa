import s from "./style.module.scss";
import { useState } from "react";
import { ChevronUp } from "react-bootstrap-icons";

export function Accordion({ buttonText, description, equipement }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div className={s.container}>
      <div className={s.button_title} onClick={toggleDropdown}>
        {buttonText}
        <ChevronUp
          style={{
            transform: isOpen ? "rotate(-180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
      </div>
      {isOpen && (
        <div className={`${s.list} ${s.open}`}>
          {description ? (
            <p>{description}</p>
          ) : (
            equipement.map((element, index) => <p key={index}>{element}</p>)
          )}
        </div>
      )}
    </div>
  );
}
