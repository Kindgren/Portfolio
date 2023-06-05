import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../Assets/Projects/saks.png";

function Systemvetenskap() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
              textAlign: "center", // Centrera texten horisontellt
            }}
          >
            <h1 className="section-heading" style={{ paddingBottom: "20px" }}>
              Vad är en <span className="purple">systemvetare?</span>
            </h1>
            <p style={{ textAlign: "justify" }}>
              En <span className="purple">systemvetare</span> är en expert inom <span className="purple">systemutveckling</span> och <span className="purple">IT-lösningar</span>. Med en gedigen kunskap och erfarenhet inom området är jag väl rustad för att lösa komplexa problem och leverera innovativa lösningar som möter verksamhetens behov. Med en analytisk och kreativ tankegång kan jag skapa <span className="purple">system</span> och <span className="purple">applikationer</span> som driver fram förändring och effektivitet.
            </p>

            <p style={{ textAlign: "justify" }}>
              Genom att anställa en <span className="purple">systemvetare</span> får du tillgång till en teknisk expert som kan driva och stödja <span className="purple">digital transformation</span>, optimera <span className="purple">system</span> och <span className="purple">applikationer</span> samt förbättra företagets <span className="purple">IT-infrastruktur</span>. Jag är dedikerad att bygga tekniska lösningar som gör en verklig skillnad och bidrar till företagets framgång.
            </p>
            <h1 className="section-heading" style={{ paddingBottom: "20px" }}> 
              Vad kan en <span className="purple">systemvetare</span>?
            </h1>
            <p style={{ textAlign: "justify" }}>
              Som <span className="purple">systemvetare</span> har jag även förmågan att förstå verksamhetens behov och omsätta dem till tekniska lösningar. Jag är van vid att samarbeta i team och trivs med att arbeta i agila utvecklingsmetoder för att leverera högkvalitativa produkter i tid och inom budget.
            </p>
            <h1 className="section-heading" style={{ paddingBottom: "20px" }}> 
              Varför ska jag anställa en <span className="purple">systemvetare</span>?
            </h1>
            <p style={{ textAlign: "justify" }}>
              Att anställa en <span className="purple">systemvetare</span> kan ge många fördelar för ditt företag. Här är några skäl till varför du bör överväga att anställa en systemvetare:
            </p>
            <ul>
              <li>
                <span className="purple">Teknisk expertis:</span> En systemvetare har specialiserade kunskaper och kompetens inom systemutveckling och IT-lösningar, vilket möjliggör skapandet av robusta och effektiva system och applikationer.
              </li>
              <li>
                <span className="purple">Problemhantering:</span> En systemvetare är tränad för att lösa komplexa problem och hitta innovativa lösningar som möter verksamhetens behov och driver fram förändring.
              </li>
              <li>
                <span className="purple">Digital transformation:</span> Genom att anställa en systemvetare kan du dra nytta av deras expertis för att driva och stödja digital transformation i ditt företag, vilket kan leda till ökad effektivitet och konkurrenskraft.
              </li>
              <li>
                <span className="purple">Teamarbete:</span> En systemvetare är van vid att arbeta i team och kan bidra till en effektiv och samarbetsinriktad arbetsmiljö. De kan också samarbeta med andra specialister och avdelningar för att leverera tekniska lösningar som möter företagets behov.
              </li>
            </ul>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <Col md={12}>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Systemvetenskap;
