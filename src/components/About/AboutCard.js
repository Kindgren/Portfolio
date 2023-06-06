import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify", letterSpacing: "1px" }}>
          Hej där! Jag är <span className="purple">Gustav Kindgren,</span> 30 år och bor i <span className="purple">Linköping.</span>
          <br /> 
          <br /> 
          Jag är systemvetare, med färsk examen från <span className="purple">Linköpings universitet</span> i fickan.
          <br />
          <br />
          Just nu jobbar jag som systemutvecklare på <span className="purple">Fujitsu,</span> där jag mest sysslar med backend grejor.
          <br />
          <br />
          När jag inte sitter framför datorn och kodar, hittar du mig på skidbacken, i gymmet, eller på äventyr någonstans i världen.
        </p>
        <ul>
          <li className="about-activity">
            <ImPointRight /> Skidåkning
          </li>
          <li className="about-activity">
            <ImPointRight /> Träning
          </li>
          <li className="about-activity">
            <ImPointRight /> Utforska världen
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
