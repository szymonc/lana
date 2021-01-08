import { action, computed, makeObservable, observable } from "mobx";

export class Store {
  products = [];
  currency = "€";
  co;

  constructor() {
    makeObservable(this, {
      products: observable,
      currency: observable,

      createProducts: action,
      createDiscounts: action,

      allItemsQty: computed,
      totalPrice: computed,
      totalDiscount: computed,
    });
  }

  createProducts(products) {
    this.products = [...products];
  }

  createDiscounts(discounts) {
    discounts.forEach((discount) => {
      this.getProductById(discount.id).createDiscount(discount);
    });
  }

  setCheckout(co) {
    this.co = co;
  }

  get totalPrice() {
    return this.products.reduce((a, b) => a + b.price * b.qty, 0);
  }

  get totalDiscount() {
    return this.products.reduce(
      (a, b) => a + (b.discount && b.discountAmount) || 0,
      0
    );
  }
  get allItemsQty() {
    return this.products.reduce((a, b) => a + b.qty, 0);
  }

  getProductById(productId) {
    return this.products.find((product) => product.id === productId);
  }
}
