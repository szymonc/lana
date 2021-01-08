import React from "react";
import { observer } from "mobx-react";
import { useStore } from "../../store/useStore";
import Title from "../shared/Title";
import AllItems from "./AllItems";
import Discounts from "./Discounts";
import Total from "./Total";

export const Summary = observer(() => {
  const { store } = useStore();
  return (
    <aside className="summary">
      <Title title="Order Summary" />
      <AllItems
        text="Items"
        price={store.totalPrice}
        currency={store.currency}
        qty={store.allItemsQty}
      />
      <Discounts products={store.products} currency={store.currency} />
      <Total />
    </aside>
  );
});
