import React from "react";
import { observer } from "mobx-react";

 const Price = observer(({ product, type }) => {
  const price = type === "price" ? product.price : product.price * product.qty;

  return (
    <div className={`col-${type}`}>
      <span className="product-price">{price}</span>
      <span className="product-currency currency">{product.currency}</span>
    </div>
  );
});

export default Price;
