import React from "react";

const SizeSelection = ({ handleChange, errors }) => {
  return (
    <div>
      <label>Boyut Seç *</label>
      {["S", "M", "L"].map((size, index) => (
        <div key={index}>
          <input
            type="radio"
            name="size"
            value={size}
            onChange={handleChange}
          />
          {size}
        </div>
      ))}
      {errors.size && <span className="error">{errors.size}</span>}
    </div>
  );
};

export default SizeSelection;
