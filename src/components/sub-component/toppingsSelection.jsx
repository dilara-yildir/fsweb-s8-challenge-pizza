import React from "react";

const ToppingsSelection = ({ handleChange, formData, toppingsPrices }) => {
  return (
    <div>
      <label>Ek Malzemeler</label>
      <div>
        {Object.keys(toppingsPrices).map((topping, index) => (
          <div key={index}>
            <input
              type="checkbox"
              name="toppings"
              value={topping}
              onChange={handleChange}
              disabled={
                formData.toppings.length >= 10 &&
                !formData.toppings.includes(topping)
              }
            />
            {topping}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToppingsSelection;
