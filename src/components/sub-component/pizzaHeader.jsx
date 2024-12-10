import React from "react";

const PizzaHeader = ({ navigate, currentPage }) => {
  return (
    <div className="header">
      <div className="header-nav">
        <nav>
          <span
            onClick={() => navigate("home")}
            className={currentPage === "home" ? "active" : ""}
          >
            Anasayfa
          </span>
          <span>  </span>
          <span
            onClick={() => navigate("order")}
            className={currentPage === "order" ? "active" : ""}
          >
            Sipariş Oluştur
          </span>
        </nav>
      </div>
      <div className="pizza-info">
        <h5>Position Absolute Acı Pizza</h5>
        <h4>85.50₺</h4>
        <p>
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre...
        </p>
      </div>
    </div>
  );
};

export default PizzaHeader;
