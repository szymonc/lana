import React from "react";
import { useStore } from "../../store/useStore";
import ProductDetails from "./ProductDetails";
import Quantity from "./Quantity";
import Price from "./Price";
import { observer } from "mobx-react";

const Products = observer(() => {
  const { store } = useStore();
  return <ul className="products-list">{renderProducts(store.products)}</ul>;
});

function renderProducts(products) {
  return products.map((product) => {
    return (
      <li className="product row" key={product.id}>
        <ProductDetails product={product} />
        <Quantity product={product} />
        <Price product={product} type="price" />
        <Price product={product} type="total" />
      </li>
    );
  });
}
export default Products;
