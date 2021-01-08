import { action, computed, makeObservable, observable } from "mobx";
import Discount from "./Discount";

export default class Product {
  id = null;
  price = 0;
  qty = 0;
  discount = null;
  productCode =  ""
  name = "";

  constructor({ id, price, qty, discount, name,productCode }) {
    makeObservable(this, {
      qty: observable,
      createDiscount: action,
      setQty: action,

      increaseQty: action,
      decreaseQty: action,

      discountAmount: computed,
    });

    this.id = id;
    this.price = price;
    this.name = name;
    this.productCode = productCode;
    this.qty = qty || 0;
    this.discount = discount || null;
  }

  createDiscount(discount) {
    this.discount = new Discount(discount);
  }

  increaseQty() {
    this.qty++;
  }

  decreaseQty() {
    if (this.qty > 0) {
      this.qty--;
    }
  }

  setQty(qty) {
    this.qty = qty;
  }

  get discountAmount() {
    if (this.discount && this.qty <= 0) {
      return 0;
    }

    if (this.discount.type === "2x1") {
      return Math.floor(this.qty / 2) * this.price;
    } else if (
      this.discount.type === "bulk" &&
      this.qty >= this.discount.threshold
    ) {
      return this.price * this.qty * this.discount.percent;
    } else {
      return 0;
    }
  }
}
