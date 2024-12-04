import React from "react";
import { Container, Row, Col } from "reactstrap";
import AddressIcon from "/Assets/Iteration-2-aseets/footer/icons/icon-1.png";
import EmailIcon from "/Assets/Iteration-2-aseets/footer/icons/icon-2.png";
import PhoneIcon from "/Assets/Iteration-2-aseets/footer/icons/icon-3.png";
import logo from "/Assets/Iteration-2-aseets/footer/logo-footer.svg";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col md="4">
           <img src={logo} alt="Teknolojik Yemekler" className="logo-footer" />
          <p className="d-flex align-items-center">
            <img src={AddressIcon} alt="Address Icon" className="footer-icon" />
            341 Londonderry Road, İstanbul Türkiye
          </p>
          <p className="d-flex align-items-center">
            <img src={EmailIcon} alt="Email Icon" className="footer-icon" />
            Email: aciktim@teknolojikyemekler.com
          </p>
          <p className="d-flex align-items-center">
            <img src={PhoneIcon} alt="Phone Icon" className="footer-icon" />
            Tel: +90 216 123 45 67
          </p>
        </Col>

        <Col md="4">
          <h6 className="footer-title">Hot Menu</h6>
          <ul className="list-unstyled">
            {[
              "Terminal Pizza",
              "5 Kişilik Hackathlon Pizza",
              "useEffect Tavuklu Pizza",
              "Beyaz Console Frosty",
              "Testler Geçti Mutlu Burger",
              "Position Absolute Acı Burger",
            ].map((menu, index) => (
              <li key={index}>{menu}</li>
            ))}
          </ul>
        </Col>

        <Col md="4" className="media-group">
          <h5 className="social-media">Instagram</h5>
          <Row>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Col sm="4" key={item} className="mb-2">
                <div className="bg-secondary"></div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
