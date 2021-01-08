import React from "react";

const DiscountRow = ({ text, price, currency }) => {
  return (
    <li>
      <span>{text}</span>
      <span>
        {price}
        {currency}
      </span>
    </li>
  );
};

export default DiscountRow;
