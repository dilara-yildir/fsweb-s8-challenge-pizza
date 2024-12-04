import React from "react";
import logo from "/assets/Iteration-1-assets/logo.svg";

const SuccessOrder = () => {
  return (
    <div className="success-order">
      <img src={logo} alt="Teknolojik Yemekler" className="logo" />
      <h6 className="sub-title">Lezzetin Yolda</h6>

      {/* Main Content */}
      <main className="content">
        <h1 className="order-title">SİPARİŞ ALINDI</h1>
        <hr style={{ marginTop: "30px", marginBottom: "30px" }} />
      </main>
      <div class="pizza-info">
        <h5>Position Absolute Acı Pizza</h5>
        <p>
          Boyut: <span class="highlight">L</span>
        </p>
        <p>
          Hamur: <span class="highlight">Süpper İnce</span>
        </p>
        <p>
          Ek Malzemeler:{" "}
          <span class="highlight">
            Pepperoni, Sosis, Mısır, Ananas, Jalepeno
          </span>
        </p>
      </div>
      <div className="order-total">
        <h5>Sipariş Toplamı</h5>
        <p>
          Seçimler <span className="total">25.00₺</span>
        </p>
        <p>
          Toplam <span className="total">110.50₺</span>
        </p>
      </div>
      <footer className="bg-dark text-white py-4">
      </footer>
    </div>
  );
};

export default SuccessOrder;
