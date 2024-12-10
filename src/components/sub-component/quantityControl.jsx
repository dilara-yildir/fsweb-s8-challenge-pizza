import React from "react";

const QuantityControl = ({ formData, handleQuantityChange }) => {
  return (
    <div>
      <button onClick={() => handleQuantityChange("decrease")}>−</button>
      <span>{formData.quantity}</span>
      <button onClick={() => handleQuantityChange("increase")}>+</button>
    </div>
  );
};

export default QuantityControl;
