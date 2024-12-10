import React from "react";

const OrderSummary = ({ calculateTotal }) => {
  return (
    <div>
      <h5>Sipariş Toplamı</h5>
      <p>Toplam: {calculateTotal().toFixed(2)}₺</p>
    </div>
  );
};

export default OrderSummary;
