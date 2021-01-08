import React from "react";
import shirt from "../../img/shirt.png";
import mug from "../../img/mug.png";
import cap from "../../img/cap.png";

function getImg(id) {
  let img;
  switch (id) {
    case "TSHIRT":
      img = shirt;
      break;
    case "CAP":
      img = cap;
      break;
    case "MUG":
      img = mug;
      break;
    default:
      img = "";
  }
  return img;
}

export default function ProductDetails({ product }) {
  return (
    <div className="col-product">
      <figure className="product-image">
        <img src={getImg(product.id)} alt={product.name} />
        <div className="product-description">
          <h1>{product.name}</h1>
          <p className="product-code">{`Product code ${product.productCode}`}</p>
        </div>
      </figure>
    </div>
  );
}
