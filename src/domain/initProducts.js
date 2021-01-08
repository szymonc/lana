import Product from "./Product";

export default function initProducts() {
  return [
    new Product({
      id: "TSHIRT",
      price: 20,
      productCode: "X7R2OPX",
      name: "Shirt",
    }),
    new Product({
      id: "MUG",
      price: 7.5,
      productCode: "X2G2OPZ",
      name: "Mug",
    }),
    new Product({
      id: "CAP",
      price: 5,
      name: "Cap",
      productCode: "X3W2OPY",
    }),
  ];
}
