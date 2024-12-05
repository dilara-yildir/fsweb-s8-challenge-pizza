import React from "react";
import logo from "/assets/Iteration-1-assets/logo.svg";
import Footer from "./sub-component/footer";

const SuccessOrder = ({ pizza }) => {

  return (
    <>
      <div className="success-order">
        <img src={logo} alt="Teknolojik Yemekler" className="logo" />
        <h6 className="sub-title">Lezzetin Yolda</h6>

        {/* Main Content */}
        <main className="content">
          <h1 className="order-title">SİPARİŞ ALINDI</h1>
          <hr style={{ marginTop: "30px", marginBottom: "30px" }} />
        </main>
        <div class="pizza-info">
          <h5>{pizza.title}</h5>
          <p>
            Boyut: <span class="highlight">{pizza.size}</span>
          </p>
          <p>
            Hamur: <span class="highlight">{pizza.dough}</span>
          </p>
          <p>
            Ek Malzemeler:{" "}
            <span class="highlight">
              {pizza?.toppings?.join(", ")}
            </span>
          </p>
        </div>
        <div className="order-total">
          <h5>Sipariş Toplamı</h5>
          <p>
            Seçimler <span className="total">{pizza.chooses}</span>
          </p>
          <p>
            Toplam <span className="total">{pizza.total}</span>
          </p>
        </div>

      </div>
      <div className="footer">
        <footer className="bg-dark text-white py-4">
          <Footer />
        </footer>
      </div>
    </>


  );
};

export default SuccessOrder;
