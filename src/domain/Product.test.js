import Product from "./Product";


let pr;
beforeEach(() => {
  // setup a DOM element as a render target
  pr = new Product({
    id: "TSHIRT",
    price: 20,
    productCode: "X7R2OPX",
    name: "Shirt",
  });
});

afterEach(() => {
  // cleanup on exiting
  pr = null;
});

it("creates new Product", () => {
  expect(pr.id).toBe("TSHIRT");
  expect(pr.price).toBe(20);
  expect(pr.productCode).toBe("X7R2OPX");
  expect(pr.name).toBe("Shirt");
});

it("set proper quantity", () => {
  expect(pr.qty).toBe(0);
  pr.increaseQty();
  expect(pr.qty).toBe(1);
  pr.decreaseQty();
  expect(pr.qty).toBe(0);
});

it("create Discount and check amount", () => {
  expect(pr.discount).toBe(null);
  pr.createDiscount({
    id: "TSHIRT",
    type: "bulk",
    threshold: 3,
    percent: 0.05,
  });
  expect(pr.discount).toBeDefined();
  expect(pr.discount.type).toBe("bulk");
  expect(pr.discountAmount).toBe(0);
  pr.increaseQty();
  pr.increaseQty();
  expect(pr.discountAmount).toBe(0);
  pr.increaseQty();
  expect(pr.discountAmount).toBe(3);
});
