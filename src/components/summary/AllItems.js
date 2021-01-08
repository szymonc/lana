import React from "react";
import { observer } from "mobx-react";

const AllItems = observer(({ text, price, currency, qty }) => {
  return (
    <ul className="summary-items wrapper border">
      <li>
        <span className="summary-items-number">{`${qty} ${text}`}</span>
        <span className="summary-items-price">
          {price}
          <span className="currency">{currency}</span>
        </span>
      </li>
    </ul>
  );
});

export default AllItems;
