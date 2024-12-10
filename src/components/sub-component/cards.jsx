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
          width: "100%",
        }}
      >
        <Col md="6">
          <Card className="text-white h-100" style={{ position: "relative" }}>
            <CardImg
              className="card-img"
              src="Assets/Iteration-2-aseets/cta/kart-1.png"
              alt="Pizza"
            />

            <CardBody
              className="card-body"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                flexDirection: "column",
                borderRadius: "30px",
              }}
            >
              <CardTitle tag="h3" className="card-1">
                <p>Özel Lezzetus</p>
              </CardTitle>
              <CardText className="card-1-description">
                Position: Absolute Acı Burger
              </CardText>
              <Button
                className="card-1-button"
                onClick={() => {
                  navigate("order");
                }}
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
                image: "Assets/Iteration-2-aseets/cta/kart-2.png",
              },
              {
                title: (
                  <>
                    <span className="highlight-red">Çooook</span>
                    
                    <span className="span-title"> hızlı npm gibi kurye</span>
                  </>
                ),
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
                      height: "250px",
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
                    <CardTitle tag="h5" className="card-2">
                      {card.title}
                    </CardTitle>
                    <CardText>{card.description}</CardText>
                    <Button
                      className="card-2-button"
                      onClick={() => {
                        navigate("order");
                      }}
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
