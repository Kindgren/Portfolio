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

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

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
              <p>
              En <span className="purple">systemvetare</span> är mer än bara en expert inom <span className="purple">systemutveckling </span> 
              och <span className="purple">IT-lösningar</span>. Som en systemvetare har jag en djupgående förståelse och gedigen 
              erfarenhet inom det breda fältet av teknik, organisation och mänsklig interaktion, 
              vilket utrustar mig för att hantera och lösa en mängd komplexa problem. Min kunskap sträcker sig 
              över teknikens gränser till att förstå hur tekniken kan effektiviseras och integreras i organisatoriska 
              processer för att leverera innovativa och effektiva lösningar som svarar mot verksamhetens behov och utmaningar.
               Denna balans mellan teknik och organisation gör att jag kan skapa <span className="purple">system </span> 
               och <span className="purple">applikationer</span> som inte bara är tekniskt avancerade utan också anpassade 
               till organisationens struktur, processer och människors behov. Ytterligare en viktig aspekt av mitt arbete
                som systemvetare är att kunna förena teknikens och människans perspektiv. 
                Genom att kombinera mina analytiska färdigheter och kreativa tankegång, kan jag utforma tekniska 
                lösningar som är intuitiva och lätta att använda för människor, vilket bidrar till att driva förändring 
                och effektivitet. Mitt perspektiv som systemvetare handlar om att skapa harmoni mellan teknik, organisation 
                och människan, och på så sätt kan jag bidra till att organisationer får ut det mesta av sina 
                teknikinvesteringar och skapar en bättre arbetsmiljö för deras anställda.
              </p>
            </div>
            <div ref={ref2} className={inView2 ? 'slide-in' : ''} style={{ paddingBottom: "50px" }}>
              <h1 className="section-heading" style={{ paddingBottom: "20px", textAlign: "center" }}>
                Vad kan en <span className="purple">systemvetare</span>?
              </h1>
              <p>
              Som <span className="purple">systemvetare</span> har jag en bred bas av kunskaper och färdigheter inom 
              <span className="purple">datavetenskap</span>, <span className="purple">informationssystem</span> och 
              <span className="purple"> systemutveckling</span>. Jag kan bidra till att <span className="purple">utforma, utveckla
               och implementera</span> tekniska lösningar för att optimera verksamheten. Min kunskap om <span className="purple">programmering </span> 
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
              Anställa en <span className="purple">systemvetare</span>?
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