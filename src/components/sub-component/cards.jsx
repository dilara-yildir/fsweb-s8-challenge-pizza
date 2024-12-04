import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
const Cards = ({setPizza}) =>{
    return (
    <Container>
      <Row>
        {/* Kartlar */}
        {[
          {
            title: "Özel Lezzetus",
            description: "Position Absolute Acı Burger",
            buttonColor: "warning",
          },
          {
            title: "Hackathlon Burger Menü",
            description: "Tam Kapsamlı Lezzet!",
            buttonColor: "warning",
          },
          {
            title: "Çooook Hızlı Kurye",
            description: "Lezzet Hızlı ve Güvenli!",
            buttonColor: "danger",
          },
        ].map((card, index) => (
          <Col md="4" className="mb-4" key={index}>
            <Card
              className={`bg-${
                card.buttonColor === "warning" ? "danger" : "dark"
              } text-white`}
            >
              <CardBody>
                <CardTitle tag="h5">{card.title}</CardTitle>
                <CardText>{card.description}</CardText>
                <Button onClick={
                  () => {
                    setPizza({ title: card.title, description: card.description });
                  }
                } color={card.buttonColor}>Sipariş Ver</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container> 
  );
};

export default Cards;
