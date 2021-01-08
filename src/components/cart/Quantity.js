import React from "react";
import { observer } from "mobx-react";

const Quantity = observer(({ product }) => {
  return (
    <div className="col-quantity">
      <button className="count" onClick={() => product.decreaseQty()}>
        -
      </button>
      <input
        type="text"
        className="product-quantity"
        value={product.qty}
        onChange={(e) => product.setQty(e.target.value)}
      />
      <button
        className="count"
        onClick={() => {
          product.increaseQty();
        }}
      >
        +
      </button>
    </div>
  );
});

export default Quantity;
