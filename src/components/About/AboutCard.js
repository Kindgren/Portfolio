import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", letterSpacing: "1px" }}>
            Hej allihop, jag heter <span className="purple">Gustav Kindgren </span>
            och jag bor just nu i <span className="purple">Linköping </span>
            <br /> 
            <br /> 
            Jag har precis tagit examen från <br/> 
            <span className="purple">Linköpings universitet </span>
           som <span className="purple">systemvetare </span>
           <br />
           <br />
             Jag är just nu anställd som Systemutvecklare på Fujitsu
            <br />
            <br />
            Utöver programmering så gillar jag även
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Åka skidor
            </li>
            <li className="about-activity">
              <ImPointRight /> Träna
            </li>
            <li className="about-activity">
              <ImPointRight /> Resa
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Koda. Skapa. Förändra"{" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
