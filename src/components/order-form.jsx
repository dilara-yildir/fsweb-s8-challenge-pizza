import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Container,
  Card,
  CardBody,
  FormText,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from "/assets/Iteration-1-assets/logo.svg";
import formBanner from "/assets/Iteration-2-aseets/pictures/form-banner.png";

import axios from "axios";
import Footer from "./sub-component/footer";

const OrderForm = ({ navigate, currentPage, pizza, selectPizza, setOrder }) => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    size: "",
    dough: "",
    toppings: [],
    specialInstructions: "",
    quantity: 1,
    title: "",
    chooses: "",
    total: "",
  });
  const toppingsPrices = {
    Pepperoni: 5,
    Domates: 5,
    Biber: 5,
    Sosis: 5,
    Mısır: 5,
    Sucuk: 5,
    "Kanada Jambonu": 5,
    Ananas: 5,
    "Tavuk Izgara": 5,
    Jalepeno: 5,
    Kabak: 5,
    Soğan: 5,
    Sarımsak: 5,
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        toppings: checked
          ? [...prevData.toppings, value]
          : prevData.toppings.filter((topping) => topping !== value),
      }));
    } else if (name === "quantity") {
      setFormData((prevData) => ({
        ...prevData,
        quantity: parseInt(value, 10),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
      
    }
  };
  const handleQuantityChange = (type) => {
    setFormData((prevData) => ({
      ...prevData,
      quantity:
        type === "increase"
          ? prevData.quantity + 1
          : prevData.quantity > 1
          ? prevData.quantity - 1
          : 1,
    }));
  };
  const calculateTotal = () => {
    const basePrice =
      formData.size === "Büyük" ? 85 : formData.size === "Orta" ? 70 : 60;
    if (!formData.size) return 0;

    const toppingsCost = formData.toppings.reduce(
      (total, topping) => total + toppingsPrices[topping],
      0
    );
    return (basePrice + toppingsCost) * formData.quantity;
  };

  const calculateSelectionsTotal = () => {
    // calculateTotal sonucundan sadece ek malzeme toplamını çıkarır
    const total = calculateTotal();

    // Ek malzeme fiyatlarını hesaplar
    const toppingsCost = formData.toppings.reduce(
      (total, topping) => total + toppingsPrices[topping],
      0
    );

    // Seçimlerin toplamı: Total - toppings
    return total - toppingsCost * 2;
  };

  

  const validate = () => {
    const newErrors = {};
    if (formData.size === "") newErrors.size = "Boyut Seçiniz";
    if (formData.dough === "") newErrors.dough = "Hamur Seçimi Yapınız";
    if (formData.toppings.length < 4)
      newErrors.toppings = "En az dört malzeme seçiniz";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // Sabit alanları al
    const title = form.querySelector('[name="title"]').textContent;
    const chooses = form.querySelector('[name="chooses"]').textContent;
    const total = form.querySelector('[name="total"]').textContent;

    const prevdata = formData;
    prevdata.title = title;
    prevdata.chooses = chooses;
    prevdata.total = total;
    setFormData(prevdata);
    setOrder(prevdata);

    if (validate()) {
      axios
        .post("https://reqres.in/api/pizza", prevdata)
        .then((e) => {
          pizza(prevdata);
          navigate("success");
        })
        .catch((error) => {
          console.error("Sipariş gönderilirken bir hata oluştu:", error);
        });
    }
  };

  return (
    <>
      {/* Header Bölümü */}
      <div className="header">
        <img src={logo} alt="Teknolojik Yemekler" style={{ width: "280px" }} />
      </div>

      <div className="header-bottom">
        <img className="header-banner" src={formBanner} />

        <div className="header-nav">
          <nav>
            <NavLink
              onClick={() => navigate("home")}
              style={() =>
                currentPage == "home"
                  ? {
                      fontWeight: "bold",
                      color: "black",
                      textDecoration: "none",
                    }
                  : { color: "black", textDecoration: "none" }
              }
            >
              Anasayfa
            </NavLink>
            <span style={{ color: "white" }}>{" > "}</span>
            <NavLink
              onClick={() => navigate("order")}
              style={() =>
                currentPage == "order"
                  ? {
                      fontWeight: "bold",
                      color: "black",
                      textDecoration: "none",
                    }
                  : { color: "black", textDecoration: "none" }
              }
            >
              Sipariş Oluştur
            </NavLink>
          </nav>
          <Row className="mb-4">
            <Col>
              <h5 for="title" name="title" className="pizza-title">
                Position Absolute Acı Pizza
              </h5>
              <h4 className="pizza-price">85.50₺</h4>
              <div className="pizza-rating">
                <span>4.9</span>
                <span>(200)</span>
              </div>
              <p className="pizza-description">
                Frontend Dev olarak hala position:absolute kullanıyorsan bu çok
                acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
                çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel
                olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,
                genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan
                oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya
                bazen pizzetta denir.
              </p>
            </Col>
          </Row>
        </div>
      </div>

      <Container
        className="select-container"
        style={{ maxWidth: "540px", margin: "35px auto", padding: "5px 5px" }}
      >
        {/* Pizza Başlık ve Açıklama */}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <FormGroup hidden>
              <h5 for="title" name="title" className="pizza-title">
                Position Absolute Acı Pizza
              </h5>
            </FormGroup>

            <div>
              <Row>
                <Col sm="6" className="size-select">
                  <label htmlFor="size">Boyut Seç *</label>
                  <div className="button-group">
                    {["S", "M", "L"].map((size, index) => (
                      <Col sm="4" key={index}>
                        <div className="radio-container">
                          <Input
                            type="radio"
                            id={`size-${index}`}
                            name="size"
                            value={size}
                            onChange={handleChange}
                          />
                          <label htmlFor={`size-${index}`}>{size}</label>
                        </div>
                      </Col>
                    ))}
                    {errors.size && (
                      <FormText color="danger">{errors.size}</FormText>
                    )}
                  </div>
                </Col>
                <Col sm="6" className="dough-select">
                  <label htmlFor="dough">Hamur Seç *</label>
                  <Input
                    type="select"
                    name="dough"
                    id="dough"
                    className="dropdown"
                    value={formData.dough}
                    onChange={handleChange}
                  >
                    <option value="">—Hamur Kalınlığı Seç—</option>
                    <option value="İnce">İnce</option>
                    <option value="Orta">Orta</option>
                    <option value="Kalın">Kalın</option>
                  </Input>
                  {errors.dough && (
                    <FormText color="danger">{errors.dough}</FormText>
                  )}
                </Col>
              </Row>
            </div>
          </FormGroup>

          <FormGroup>
            <Label>Ek Malzemeler</Label>
            <p className="text-muted">En fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <Row>
              {Object.keys(toppingsPrices).map((topping, index) => (
                <Col sm="4" key={index}>
                  <div className="checkbox-group">
                    <Input
                      type="checkbox"
                      id={`topping-${index}`}
                      name="toppings"
                      value={topping}
                      onChange={handleChange}
                      disabled={
                        formData.toppings.length >= 10 &&
                        !formData.toppings.includes(topping)
                      }
                    />
                    <label htmlFor={`topping-${index}`}>{topping}</label>
                  </div>
                </Col>
              ))}
              {errors.toppings && (
                <FormText color="danger">{errors.toppings}</FormText>
              )}
            </Row>
          </FormGroup>

          <FormGroup>
            <Form>
              Ad Soyad
              <Input
                type="text"
                name="name"
                placeholder="Ad Soyad Giriniz"
                value={formData.name}
                onChange={handleChange}
              />
            </Form>
            <Label for="specialInstructions">Sipariş Notu</Label>
            <Input
              type="textarea"
              id="specialInstructions"
              name="specialInstructions"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              value={formData.specialInstructions}
              onChange={handleChange}
            />
          </FormGroup>

          <hr style={{ marginTop: "30px", marginBottom: "30px" }} />

          <Row>
            <Col sm="6">
              <FormGroup>
                <div
                  className="quantity-container"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    maxWidth: "100px",
                  }}
                >
                  <Button
                    className="quantity-button"
                    style={{
                      display: "flex",
                      borderTopRightRadius: "0px",
                      borderBottomRightRadius: "0px",
                      borderTopLeftRadius: "5px",
                      borderBottomLeftRadius: "5px",
                    }}
                    color="warning"
                    onClick={() => handleQuantityChange("decrease")}
                  >
                    {"−"}
                  </Button>
                  <div
                    style={{
                      maxWidth: "50px",
                      textAlign: "center",
                      fontSize: "1.2rem",
                      border: "1px solid #ccc",
                      padding: " 3.5px 15px",
                      borderRadius: "0px",
                    }}
                  >
                    {formData.quantity}
                  </div>
                  <Button
                    className="quantity-button-2"
                    style={{
                      display: "flex",
                      borderTopRightRadius: "5px",
                      borderBottomRightRadius: "5px",
                      borderTopLeftRadius: "0px",
                      borderBottomLeftRadius: "0px",
                    }}
                    color="warning"
                    onClick={() => handleQuantityChange("increase")}
                  >
                    +
                  </Button>
                </div>
              </FormGroup>
            </Col>
            <Col sm="6" style={{ marginBottom: 50 }}>
              <Card className="siparis-card">
                <CardBody>
                  <h5>Sipariş Toplamı</h5>

                  <Row style={{ color: "#292929" }}>
                    <Col>Seçimler</Col>
                    <Col name="chooses" for="chooses">
                      {(calculateTotal() - calculateSelectionsTotal()).toFixed(
                        2
                      )}
                      ₺
                    </Col>
                  </Row>

                  <Row style={{ color: "#CE2829" }}>
                    <Col>Toplam</Col>
                    <Col name="total" for="total">
                      {" "}
                      {calculateTotal().toFixed(2)}₺
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <Button type="submit" color="warning" block>
                Sipariş Ver
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
      <footer className="bg-dark text-white py-4">
        <Footer />
      </footer>
    </>
  );
};

export default OrderForm;
