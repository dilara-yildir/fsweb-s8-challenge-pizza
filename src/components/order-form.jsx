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
import { useNavigate } from "react-router-dom";
import logo from "/assets/Iteration-1-assets/logo.svg";

import axios from "axios";

const OrderForm = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    size: "",
    dough: "",
    toppings: [],
    specialInstructions: "",
    quantity: 1,
  });

  const toppingsPrices = {
    Pepperoni: 5,
    Domates: 5,
    Biber: 5,
    sosis: 5,
    Mısır: 5,
    Sucuk: 5,
    Domates: 5,
    "Kanada Jambonu": 5,
    Ananas: 5,
    Biber: 5,
    "Tavuk Izgara": 5,
    Jalepeno: 5,
    kabak: 5,
    soğan: 5,
    sarımsak: 5,
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

    const toppingsCost = formData.toppings.reduce(
      (total, topping) => total + toppingsPrices[topping],
      0
    );
    return (basePrice + toppingsCost) * formData.quantity;
  };

  const calculateSelectionsTotal = () => {
    // calculateTotal sonucundan sadece ek malzeme toplamını çıkar
    const total = calculateTotal();

    // Ek malzeme fiyatlarını hesapla
    const toppingsCost = formData.toppings.reduce(
      (total, topping) => total + toppingsPrices[topping],
      0
    );

    // Seçimlerin toplamı: Total - toppings
    return total - toppingsCost;
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
    if (validate()) {
      axios
        .post("https://reqres.in/api/pizza", formData)
        .then(() => {
          navigate("/success"); // Başarılı işlem sonrası yönlendirme
        })
        .catch((error) => {
          console.error("Sipariş gönderilirken bir hata oluştu:", error);
        });
    }
  };

  return (
    <>
      {/* Header Bölümü */}
      <div
        style={{
          backgroundColor: "#CE2829",
          padding: "50px 0",
          textAlign: "center",
        }}
      >
        <img src={logo} alt="Teknolojik Yemekler" style={{ width: "280px" }} />
      </div>

      <Container
        style={{ maxWidth: "600px", margin: "20px auto", padding: "5px 5px" }}
      >
        {/* Pizza Başlık ve Açıklama */}
        <Row className="mb-4">
          <Col>
            <h2>Position Absolute Acı Pizza</h2>
            <h3
              style={{
                fontFamily: "barlow",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              85.50₺
            </h3>
            <p
              className="text-muted mt-3"
              style={{ lineHeight: "1.6", fontSize: "1rem", textAlign: "left" }}
            >
              Frontend Dev olarak hala position:absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen
              pizzetta denir.
            </p>
          </Col>
        </Row>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <div>
              <Row>
                <Col sm="6">
                  <Label for="size">Boyut Seç *</Label>
                  {["Küçük", "Orta", "Büyük"].map((size, index) => (
                    <Col sm="4" key={index}>
                      <Label key={index} check style={{ marginRight: "20px" }}>
                        <Input
                          style={{ marginBottom: "30px" }}
                          type="radio"
                          name="size"
                          value={size}
                          onChange={handleChange}
                        />{" "}
                        {size}
                      </Label>
                    </Col>
                  ))}
                  {errors.size && (
                    <FormText color="danger">{errors.size}</FormText>
                  )}
                </Col>
                <Col sm="6">
                  <Label for="dough">Hamur Seç *</Label>
                  <Input
                    type="select"
                    name="dough"
                    id="dough"
                    value={formData.dough}
                    onChange={handleChange}
                  >
                    <option value="">Hamur Kalınlığı</option>
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
                  <Label check>
                    <Input
                      style={{ marginBottom: "15px" }}
                      type="checkbox"
                      name="toppings"
                      value={topping}
                      onChange={handleChange}
                      disabled={
                        formData.toppings.length >= 10 &&
                        !formData.toppings.includes(topping)
                      }
                    />{" "}
                    {topping}
                  </Label>
                </Col>
              ))}
              {errors.toppings && (
                <FormText color="danger">{errors.toppings}</FormText>
              )}
            </Row>
          </FormGroup>

          <FormGroup>
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
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    maxWidth: "100px",
                  }}
                >
                  <Button
                    style={{ display: "flex" }}
                    color="warning"
                    onClick={() => handleQuantityChange("decrease")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="10"
                      height="30"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                      ></path>
                    </svg>
                  </Button>
                  <div
                    style={{
                      maxWidth: "50px",
                      textAlign: "center",
                      fontSize: "1.2rem",
                    }}
                  >
                    {formData.quantity}
                  </div>
                  <Button
                    style={{ display: "flex" }}
                    color="warning"
                    onClick={() => handleQuantityChange("increase")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="10"
                      height="30"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                      ></path>
                    </svg>
                  </Button>
                </div>
              </FormGroup>
            </Col>
            <Col sm="6" style={{marginBottom:50}}>
              <Card className="p-3">
                <CardBody>
                  <h5>Sipariş Toplamı</h5>
                  <p>
                    Seçimler: {calculateTotal() - calculateSelectionsTotal()}₺
                  </p>
                  <p>Toplam: {calculateTotal().toFixed(2)}₺</p>
                </CardBody>
              </Card>
              <Button  type="submit" color="warning" block >
                Sipariş Ver
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default OrderForm;
