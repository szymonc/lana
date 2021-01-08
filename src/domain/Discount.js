export default class Discount {
  type = "";
  threshold = 0;
  percent = 0;

  constructor({ type, threshold, percent }) {
    this.type = type;
    this.threshold = threshold || 0;
    this.percent = percent || 0;
  }
}
