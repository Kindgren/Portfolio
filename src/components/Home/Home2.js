import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
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
            <span className="purple"> Vem är </span>  Gustav Kindgren?  <span className="white"></span>
            </h1>
            <p className="home-about-body">
              Jag gillar programmering och jag hoppas jag lärt mig någonting under mina tre år på systemvetenskapliga programmet i Linköping
              <br />
              <br />Jag pratar helst
              <i>
                <b className="purple"> C# och C++ </b> över en kopp <b className="purple">Java </b>
              </i>
              <br />
              <br />
              Som backend-utvecklare trivs jag med att bygga och optimera robusta 
              <b className="purple"> serverapplikationer, </b> 
              utveckla skalbara  <b className="purple">API:er </b>  för webbapplikationer och hantera 
              <b className="purple"> databaser </b>för effektiv datalagring.  &nbsp;
              <i>
                
                
              
              </i>
              <br />
              <br />
              Jag gillar att arbeta med verktyg som
               <b className="purple"> ASP.NET,</b>
              <i>
                <b className="purple">
                  {" "}
                  Entity Framework  
                </b>
                {" "} och
              </i>
              &nbsp; 
              <i>
                <b className="purple">.NET core</b>
              </i>
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
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
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
