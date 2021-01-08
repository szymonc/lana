import React from "react";
import { observer } from "mobx-react";
import DiscountRow from "./DiscountRow";

function renderProductDiscounts(products, currency) {
  return products
    .filter((product) => product.discount)
    .map((product) => {
      const offerTypeLabel =
        product.discount.type === "2x1" ? "2x1" : "x" + product.qty;
      const offerLabel = `${offerTypeLabel} ${product.name.toLowerCase()} offer`;

      return (
        <DiscountRow
          text={offerLabel}
          price={-product.discountAmount}
          currency={currency}
          key={product.id}
        />
      );
    });
}

const Discounts = observer(({ products, currency }) => {
  const productsDiscount = renderProductDiscounts(products, currency);

  return (
    <div className="summary-discounts wrapper-half border">
      <h2>Discounts</h2>
      <ul>{productsDiscount}</ul>
    </div>
  );
});
export default Discounts;
