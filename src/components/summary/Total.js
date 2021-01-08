import React from "react";
import { observer } from "mobx-react";
import { useStore } from "../../store/useStore";

const Total = observer(() => {
  const { store } = useStore();

  return (
    <div className="summary-total wrapper">
      <ul>
        <li>
          <span className="summary-total-cost">Total cost</span>
          <span className="summary-total-price">
              { `${store.totalPrice - store.totalDiscount} ${store.currency}`}
          </span>
        </li>
      </ul>
      <button type="submit" onClick={()=>console.log("Total cost",store.co.total)}>Checkout</button>
    </div>
  );
});

export default Total;
