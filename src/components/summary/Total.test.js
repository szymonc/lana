import React from "react";

import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import {useStore} from "../../store/useStore";
import storeMock from "../../../test/storeMock";
import Total from "./Total";

jest.mock("../../store/useStore");

let container;
let store;

beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
    storeMock.totalPrice = 110
    storeMock.totalDiscount =13
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
        render(<Total />, container);
    });
    expect(useStore).toHaveBeenCalled();
    expect(container.querySelectorAll(".summary-total.wrapper")).toHaveLength(1);
});

it("renders total price", () => {
    act(() => {
        render(<Total />, container);
    });
    console.log("jeje",storeMock.totalPrice()-storeMock.totalDiscount())
    expect(useStore).toHaveBeenCalled();
    expect(container.querySelector(".summary-total-price")).toHaveTextContent("97 €");
});

