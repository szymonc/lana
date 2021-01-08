import React from "react";

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Products from "./Products";
import { useStore } from "../../store/useStore";
import storeMock from "../../../test/storeMock";

jest.mock("../../store/useStore");

let container;
let store;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
  useStore.mockReturnValue({
    store: storeMock,
  });
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
    render(<Products />, container);
  });
  expect(useStore).toHaveBeenCalled();
  expect(container.querySelectorAll(".products-list")).toHaveLength(1);
  expect(container.querySelectorAll(".products-list li")).toHaveLength(3);
});

it("renders prices", () => {
  const selector = ".products-list .col-price .product-price";
  act(() => {
    render(<Products />, container);
  });
  expect(useStore).toHaveBeenCalled();
  expect(container.querySelectorAll(selector)[0]).toHaveTextContent("20");
  expect(container.querySelectorAll(selector)[1]).toHaveTextContent("7.5");
  expect(container.querySelectorAll(selector)[2]).toHaveTextContent("5");
});

it("renders total price", () => {
  const selector = ".products-list .col-total .product-price";
  act(() => {
    render(<Products />, container);
  });
  expect(useStore).toHaveBeenCalled();
  expect(container.querySelectorAll(selector)[0]).toHaveTextContent("60");
  expect(container.querySelectorAll(selector)[1]).toHaveTextContent("30");
  expect(container.querySelectorAll(selector)[2]).toHaveTextContent("20");
});
