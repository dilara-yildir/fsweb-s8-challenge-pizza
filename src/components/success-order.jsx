import React from "react";
import logo from "/assets/Iteration-1-assets/logo.svg";

const SuccessOrder = () => {
  return (
    <div className="success-order">
      <img src={logo} alt="Teknolojik Yemekler" className="logo" />
      <h1 >TEBRİKLER!</h1>
      <p>SİPARİŞİNİZ ALINDI!</p>
    </div>
  );
};

export default SuccessOrder;
