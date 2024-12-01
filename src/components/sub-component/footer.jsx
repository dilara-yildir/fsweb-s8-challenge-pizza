import React from "react";
import { Container, Row, Col } from "reactstrap";
const Footer = () => {
  return (
    <Container>
      <Row>
        <Col md="4">
          <h5>Teknolojik Yemekler</h5>
          <p>341 Londonderry Road, İstanbul Türkiye</p>
          <p>Email: aciktim@teknolojikyemekler.com</p>
          <p>Tel: +90 216 123 45 67</p>
        </Col>

        <Col md="4">
          <h5>Sıcak Menüler</h5>
          <ul className="list-unstyled">
            {[
              "Terminal Pizza",
              "5 Kişilik Hackathlon Pizza",
              "useEffect Tavuklu Pizza",
              "Position Absolute Acı Burger",
            ].map((menu, index) => (
              <li key={index}>{menu}</li>
            ))}
          </ul>
        </Col>

        <Col md="4">
          <h5>Instagram</h5>
          <Row>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Col sm="4" key={item} className="mb-2">
                <div className="bg-secondary" style={{ height: "50px" }}></div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
