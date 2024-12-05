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
  CardImg
} from "reactstrap";

const Cards = ({ navigate }) => {
  return (
    <Container>
      <Row
        className="gy-4 mx-auto"
        style={{
          width: "70%", 
        }}
      >
       
        <Col md="6">
          <Card className="text-white h-100" style={{ position: "relative" }}>
            
            <CardImg
              src="Assets/Iteration-2-aseets/cta/kart-1.png"
              alt="Pizza"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%", 
              }}
            />
            
            <CardBody
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                flexDirection: "column",
                borderRadius: "10px",
              }}
            >
              <CardTitle tag="h3" className="mb-3">
                Özel Lezzetus
              </CardTitle>
              <CardText className="mb-4">Position Absolute Acı Burger</CardText>
              <Button
                onClick={() => {
                  navigate("order");
                }}
                color="warning"
              >
                Sipariş Ver
              </Button>
            </CardBody>
          </Card>
        </Col>

       
        <Col md="6">
          <Row className="gy-4">
            {[
              {
                title: "Hackathlon Burger Menü",
                description: "Tam Kapsamlı Lezzet!",
                buttonColor: "warning",
                image: "Assets/Iteration-2-aseets/cta/kart-2.png", 
              },
              {
                title: "Çooook Hızlı Kurye",
                description: "Lezzet Hızlı ve Güvenli!",
                buttonColor: "danger",
                image: "Assets/Iteration-2-aseets/cta/kart-3.png", 
              },
            ].map((card, index) => (
              <Col md="12" key={index}>
                <Card
                  className="h-100 text-white"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <CardImg
                    src={card.image}
                    alt={card.title}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "185px",
                    }}
                  />
                  <CardBody
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      flexDirection: "column",

                    }}
                  >
                    <CardTitle tag="h5">{card.title}</CardTitle>
                    <CardText>{card.description}</CardText>
                    <Button
                      onClick={() => {
                        navigate("order");
                      }}
                      color={card.buttonColor}
                    >
                      Sipariş Ver
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>


    </Container>
  );
};

export default Cards;
