import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mina senaste <strong className="purple">Projekt </strong>
        </h1>
        <p style={{ color: "white" }}>
          Här är några projekt jag jobbat med
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Tetris"
              description="Ett tetris-spel du kan spela direkt i din terminal"
              ghLink="https://github.com/Kindgren/Tetris"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Covid Game"
              description="Ett spel där du antingen kan döda eller bli dödad av covid"
              ghLink="https://github.com/Kindgren/CovidGame"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AVL tree"
              description="En av flera olika laborationer från kursen : datastrukturer och algoritmer"
              ghLink="https://github.com/Kindgren/AVLTree"
                        
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
