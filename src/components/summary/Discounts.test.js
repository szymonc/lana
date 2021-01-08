import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Store } from "../../store/Store";
import Discounts from "./Discounts";
import initProducts from "../../domain/initProducts";
import initDiscounts from "../../domain/initDiscounts";

let container;
let store;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
  store = new Store();
  store.createProducts(initProducts());
  store.createDiscounts(initDiscounts());
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
  store = null;
});

it("renders correctly", () => {
  act(() => {
    render(<Discounts products={store.products} />, container);
  });
  expect(container.querySelectorAll(".summary-discounts")).toHaveLength(1);
  expect(container.querySelectorAll(".summary-discounts ul li")).toHaveLength(
    2
  );
});

it("renders discounts", () => {
  store.products[0].increaseQty();
  store.products[0].increaseQty();
  store.products[0].increaseQty();
  act(() => {
    render(<Discounts products={store.products} currency="$" />, container);
  });
  expect(
    container.querySelectorAll(".summary-discounts ul li")[0].textContent
  ).toBe("x3 shirt offer-3$");
  expect(
    container.querySelectorAll(".summary-discounts ul li")[1].textContent
  ).toBe("2x1 cap offer0$");
});
