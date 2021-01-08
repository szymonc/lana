import "./App.css";
import React from "react";

import { Cart } from "./components/cart/Cart";
import { Summary } from "./components/summary/Summary";
import initProducts from "./domain/initProducts";
import { useStore } from "./store/useStore";
import Checkout from "./domain/Checkout";
import initDiscounts from "./domain/initDiscounts";


function App() {
  const products = initProducts();
  const pricingRules = initDiscounts();

  const {store} = useStore();

  store.createProducts(products);
  const co = new Checkout(pricingRules, store);
  co.scan("TSHIRT").scan("TSHIRT").scan("TSHIRT");
  const totalPrice = co.total;
  console.log("Total price on init:", totalPrice);
  store.setCheckout(co);
  return (
    <main className="App">
        <Cart />
        <Summary />
    </main>
  );
}

export default App;
