import React, { useState } from "react";

import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button
} from "reactstrap";

const PizzaCard = () => {
  const [activeCategory, setActiveCategory] = useState("Pizza");

  const categories = [
    { name: "Ramen", icon: "Assets/Iteration-2-aseets/icons/1.svg" },
    { name: "Pizza", icon: "Assets/Iteration-2-aseets/icons/2.svg" },
    { name: "Burger", icon: "Assets/Iteration-2-aseets/icons/3.svg" },
    { name: "French fries", icon: "Assets/Iteration-2-aseets/icons/4.svg" },
    { name: "Fast food", icon: "Assets/Iteration-2-aseets/icons/5.svg" },
    { name: "Soft drinks", icon: "Assets/Iteration-2-aseets/icons/6.svg" },
  ];

  const menuItems = [
    {
      category: "Pizza",
      title: "Terminal Pizza",
      rating: 4.9,
      reviews: 200,
      price: "60₺",
      image: "/Assets/Iteration-2-aseets/pictures/food-1.png",
    },
    {
      category: "Pizza",
      title: "Position Absolute Acı Pizza",
      rating: 4.9,
      reviews: 200,
      price: "60₺",
      image: "/Assets/Iteration-2-aseets/pictures/food-2.png",
    },
    {
      category: "Burger",
      title: "useEffect Tavuklu Burger",
      rating: 4.9,
      reviews: 200,
      price: "60₺",
      image: "/Assets/Iteration-2-aseets/pictures/food-3.png",
    },
    {
      category: "French fries",
      title: "Patates Kızartması",
      rating: 4.8,
      reviews: 150,
      price: "25₺",
      image: "/Assets/Iteration-2-aseets/pictures/food-3.png",
    },
    {
      category: "Soft drinks",
      title: "Cola",
      rating: 4.7,
      reviews: 180,
      price: "15₺",
      image: "/Assets/Iteration-2-aseets/pictures/food-3.png",
    },
  ];

  return (
    <Container className="py-5">
      <h3 className="text-center">en çok paketlenen menüler</h3>
      <h2 className="text-center mb-4">Acıktıran Kodlara Doyuran Lezzetler</h2>

      {/* Kategori Seçimi */}
      <Row className="justify-content-center mb-4">
        {categories.map((category, index) => (
          <Col xs="auto" key={index} className="mb-2">
            <Button 
              color={activeCategory === category.name ? "dark" : "light"}
              onClick={() => setActiveCategory(category.name)}
              style={{
                borderRadius: "50px",
                padding: "10px 20px",
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
                fontFamily: "Barlow",
              }}
            >
              <span style={{ fontSize: "20px", marginRight: "10px" }}>
                <img src={category.icon} className="menu-icon" />
              </span>

              {category.name}
            </Button>
          </Col>
        ))}
      </Row>

      {/* Menü Kartları */}
      <Row className="justify-content-center">
        <Col md="8">
          <Row className="gy-4">
            {menuItems
              .filter((item) => item.category === activeCategory)
              .map((item, index) => (
                <Col md="6" lg="4" key={index}>
                  <Card className="h-100 text-center">
                    <CardImg
                      top
                      src={item.image}
                      alt={item.title}
                      style={{
                        padding: "20px",
                        objectFit: "contain",
                        width: "100%",
                        height: "300px",
                      }}
                    />
                    <CardBody>
                      <CardTitle style={{ textAlign: "left" }} tag="h5">
                        {item.title}
                      </CardTitle>
                      <div
                        className="d-flex align-items-center justify-content-between"
                        style={{ fontSize: "10px", margin: "10px 0" }}
                      >
                        {/* Puan ve Yorumlar */}
                        <div className="d-flex align-items-center">
                          <span style={{ marginRight: "5px" }}>
                            {item.rating}{" "}
                          </span>
                          <span
                            className="text-muted"
                            style={{ marginLeft: "5px" }}
                          >
                            ({item.reviews})
                          </span>
                        </div>

                        {/* Fiyat */}
                        <div
                          className="text-danger"
                          style={{
                            fontWeight: "bold",
                            fontSize: "16px",
                          }}
                        >
                          {item.price}
                        </div>
                      </div>
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

export default PizzaCard;
