import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../Assets/Projects/saks.png";
import hacke from "../../Assets/Projects/hacke.png";
import { useInView } from 'react-intersection-observer';

function Systemvetenskap() {
  const [ref1, inView1] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [ref3, inView3] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });


  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={7} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px", textAlign: "justify" }}>
            <div ref={ref1} className={inView1 ? 'slide-in' : ''} style={{ paddingBottom: "50px" }}>
              <h1 className="section-heading" style={{ paddingBottom: "20px", textAlign: "center" }}>
                Vad är en <span className="purple">systemvetare?</span>
              </h1>
              <div>
      <p>En systemvetare är någon som kan förstå alla dessa olika 
        <span className="purple"> komponenter </span> och hur de passar in i den större bilden. 
        Vi har tekniska kunskaper, men vi kombinerar detta med en djup förståelse för 
        <span className="purple"> affärsstrategi </span> och
        <span className="purple"> projektledning</span> 
         
        . Denna kombination gör oss till de perfekta kandidaterna för rollerna som 
        <span className="purple"> projektledare </span>, 
        <span className="purple"> systemanalytiker </span> och 
        <span className="purple"> IT-strateger </span>, positioner som kräver en stark förståelse för både teknik och affärsverksamhet. 
        Men det är inte allt. En av våra mest värdefulla färdigheter är vår förmåga att förstå och tolka affärsbehov i tekniska termer.
        Vi kan se helheten, inte bara de tekniska detaljerna, utan hur tekniken kan användas för att uppnå affärsmål. 
        Detta innebär att vi kan utforma, utveckla och implementera system som verkligen uppfyller företagets behov, snarare än att bara fokusera på teknisk funktionalitet. 
        Vi är också mästare på att leda och koordinera IT-projekt. 
        Med vår unika mix av teknik- och affärsförståelse kan vi fungera som en länk mellan olika team, se till att alla är på samma sida och att projektet fortskrider smidigt. 
        Samtidigt, med vår kunskap om sambandet mellan människa teknik och organisation, kan vi skapa system som är användarvänliga och intuitiva, vilket är avgörande i en tid då användarupplevelsen ofta kan göra eller bryta ett system. 
        Men vår roll slutar inte där. Med vår kombination av teknisk och affärskunskap kan vi också hjälpa till med att navigera genom de komplexa förändringsprocesser som ofta följer med införandet av ny teknik. 
        Detta är särskilt viktigt i en tid då tekniken ständigt utvecklas och arbetsplatser ständigt anpassar sig.
      </p>
    </div>
            </div>
            <div ref={ref2} className={inView2 ? 'slide-in' : ''} style={{ paddingBottom: "50px" }}>
              <h1 className="section-heading" style={{ paddingBottom: "20px", textAlign: "center" }}>
                Vad kan en <span className="purple">systemvetare</span>?
              </h1>
              <p>
              Som <span className="purple">systemvetare</span> har jag en bred bas av kunskaper och färdigheter inom 
              <span className="purple"> datavetenskap</span>, <span className="purple">informationssystem</span> och 
              <span className="purple"> systemutveckling</span>. Jag kan bidra till att <span className="purple">utforma, utveckla
              </span> och <span className="purple"> implementera</span> tekniska lösningar för att optimera verksamheten. Min kunskap om <span className="purple">programmering </span> 
               och <span className="purple">databaser</span> gör att jag kan utveckla anpassade mjukvarulösningar,
               medan min förståelse för <span className="purple">systemanalys</span> och <span className="purple">design </span> 
               säkerställer att dessa lösningar passar perfekt med företagets unika behov och mål. Dessutom, med mina kompetenser 
               inom <span className="purple">projektledning</span> och <span className="purple">IT-strategi</span>, 
               kan jag hjälpa till att styra och planera IT-insatser för att stödja företagets strategiska mål. 
               Min erfarenhet med <span className="purple">agila metoder</span> för programvaruutveckling, 
               som Scrum och Kanban, garanterar att jag kan leda och bidra till team som levererar högkvalitativa produkter i tid och inom budget.

              </p>
            </div>
           
            <div ref={ref3} className={inView3 ? 'slide-in' : ''}>
            <h1 className="section-heading" style={{ paddingBottom: "20px", textAlign: "center" }}> 
              Anställa en <span className="purple">systemvetare?</span>
            </h1>
            <p>
              Att anställa en <span className="purple">systemvetare</span> kan ge många fördelar för ditt företag. Här är några skäl till varför du bör överväga att anställa en systemvetare:
            </p>
            <ul style={{ paddingLeft: "20px" }}>
              <li style={{ marginTop: "10px", marginBottom: "10px" }}>
                <span className="purple">Teknisk expertis:</span> En systemvetare har specialiserade kunskaper och kompetens inom systemutveckling och IT-lösningar, vilket möjliggör skapandet av robusta och effektiva system och applikationer.
              </li>
              <li style={{ marginTop: "10px", marginBottom: "10px" }}>
                <span className="purple">Problemhantering:</span> En systemvetare är tränad för att lösa komplexa problem och hitta innovativa lösningar som möter verksamhetens behov och driver fram förändring.
              </li>
              <li style={{ marginTop: "10px", marginBottom: "10px" }}>
                <span className="purple">Digital transformation:</span> Genom att anställa en systemvetare kan du dra nytta av deras expertis för att driva och stödja digital transformation i ditt företag, vilket kan leda till ökad effektivitet och konkurrenskraft.
              </li>
              <li style={{ marginTop: "10px", marginBottom: "10px" }}>
                <span className="purple">Teamarbete:</span> En systemvetare är van vid att arbeta i team och kan bidra till en effektiv och samarbetsinriktad arbetsmiljö. De kan också samarbeta med andra specialister och avdelningar för att leverera tekniska lösningar som möter företagets behov.
                </li>
            </ul>
            </div>
          </Col>
          <Col
    md={5}
    style={{ paddingTop: "140px", paddingBottom: "50px" }}
    className="about-img"
>
    <div style={{ marginBottom: '300px' }}>
        <img src={laptopImg} alt="about" className="img-fluid" />
    </div>
    <div style={{ marginTop: '30px' }}>
        <img src={hacke} alt="about" className="img-fluid" />
    </div>
</Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Systemvetenskap;