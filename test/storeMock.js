
const storeMock = {
  products: [
    {
      id: "TSHIRT",
      price: 20,
      qty: 3,
      productDetails: {
        productCode: "X7R2OPX",
        name: "Shirt",
      },
      discountDetails: {
        type: "bulkz",
        threshold: 3,
        percent: 0.05,
        amount: 0,
      },
    },
    {
      id: "MUG",
      price: 7.5,
      qty: 4,
      productDetails: {
        productCode: "X2G2OPZ",
        name: "Mug",
      },
      discountDetails: {
        type: "2x1",
        threshold: 3,
        percent: 0.05,
        amount: 0,
      },
    },
    {
      id: "CAP",
      price: 5,
      qty: 4,
      productDetails: {
        productCode: "X3W2OPY",
        name: "Cap",
      },
      discountDetails: {
        type: "2x1",
        threshold: 3,
        percent: 0.05,
        amount: 0,
      },
    },
  ],

  currency: "€",
};

export default storeMock
