export default class Checkout {
  constructor(pricingRules, store) {
    this.products = [];
    this.store = store;
    if (pricingRules) {
      this.store.createDiscounts(pricingRules);
    }
  }

  scan(productId) {
    this.store.getProductById(productId).increaseQty();
    return this;
  }

  get total() {
    return this.store.totalPrice - this.store.totalDiscount;
  }
}
