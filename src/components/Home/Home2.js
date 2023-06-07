import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/lwave.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
          Låt mig <span className="purple"> presentera</span> mig själv 
</h1>
<p className="home-about-body">
  Med ett genuint intresse för teknik och problemlösning har jag ägnat de senaste åren till att fördjupa mig i programmeringens värld under mina studier vid systemvetenskapliga programmet i Linköping.
  <br />
  <br /> Jag trivs bäst med att skriva kod i
  <i>
    <b className="purple"> C# och C++, </b>
  </i> men jag har också god erfarenhet av <b className="purple">Java </b> och jag är inte rädd för att lära mig nya programmeringsspråk och tekniker.
  <br />
  <br /> Som den backend-utvecklaren jag är fokuserar jag på att bygga robusta 
  <b className="purple"> serverapplikationer, </b> utveckla skalbara <b className="purple">API:er </b> för webbapplikationer och hantera
  <b className="purple"> databaser </b> för effektiv datalagring. 
  <br />
  <br /> Till mina favoritverktyg hör 
  <b className="purple"> ASP.NET,</b>
  <i>
    <b className="purple"> Entity Framework </b> 
  </i> och
  <i>
    <b className="purple">.NET core.</b>
  </i>
  <br />
  <br /> Utöver min passion för programmering, värdesätter jag en aktiv livsstil och jag tror att balansen mellan arbete och fritid är nyckeln till en hållbar produktivitet och kreativitet.
</p>


          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Du hittar mig på</h1>
           
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Kindgren"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gustav-kindgren"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/kindgreen/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
            <p>
              tveka inte att <span className="purple"> kontakta </span> mig
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
    
  );
}
export default Home2;
