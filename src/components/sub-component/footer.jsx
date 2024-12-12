import React from "react";
import { Container, Row, Col } from "reactstrap";
import AddressIcon from "/Assets/Iteration-2-aseets/footer/icons/icon-1.png";
import EmailIcon from "/Assets/Iteration-2-aseets/footer/icons/icon-2.png";
import PhoneIcon from "/Assets/Iteration-2-aseets/footer/icons/icon-3.png";
import logo from "/Assets/Iteration-2-aseets/footer/logo-footer.svg";

const li = [
  { image: "/Assets/Iteration-2-aseets/footer/insta/li-0.png" },
  { image: "/Assets/Iteration-2-aseets/footer/insta/li-1.png" },
  { image: "/Assets/Iteration-2-aseets/footer/insta/li-2.png" },
  { image: "/Assets/Iteration-2-aseets/footer/insta/li-3.png" },
  { image: "/Assets/Iteration-2-aseets/footer/insta/li-4.png" },
  { image: "/Assets/Iteration-2-aseets/footer/insta/li-5.png" },

];

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

        <Col md="3">
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
              <li style={{ paddingBottom: "10px" }} key={index}>{menu}</li>
            ))}
          </ul>
        </Col>

        <Col md="3" className="media-group">
          <h5 className="social-media">Instagram</h5>
          {Array.from({ length: Math.ceil(li.length / 3) }, (_, i) => (
            <Row key={i} className="mb-2">
              {li.slice(i * 3, i * 3 + 3).map((item, index) => (
                <Col sm="4" key={index} className="mb-2">
                  <img src={item.image} alt="Instagram" className="img-fluid" />
                </Col>
              ))}
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
