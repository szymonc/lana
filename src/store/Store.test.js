import {Store} from "./Store";
import initProducts from "../domain/initProducts";
import initDiscounts from "../domain/initDiscounts";


let store;

beforeEach(() => {
    store = new Store( );
});

afterEach(() => {
    // cleanup on exiting
    store = null;
});

it("creates new Store", () => {
    expect(store.products.length).toBe(0);
});

it("creates new products", () => {
    store.createProducts(initProducts())
    expect(store.products.length).toBe(3);
});

it("creates new discounts", () => {
    store.createProducts(initProducts())
    store.createDiscounts(initDiscounts())
    expect(store.products[0].discount).toBeDefined();
    expect(store.products[1].discount).toBeNull();
    expect(store.products[2].discount).toBeDefined();
});


it("calculates price and discount", () => {
    store.createProducts(initProducts())
    store.createDiscounts(initDiscounts())
    store.products[0].increaseQty();
    store.products[0].increaseQty();
    store.products[0].increaseQty();
    store.products[1].increaseQty();
    store.products[2].increaseQty();
    store.products[2].increaseQty();
    expect(store.totalPrice).toBe(77.5);
    expect(store.totalDiscount).toBe(8);
});
