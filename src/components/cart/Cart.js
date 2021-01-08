import React from "react";
import Title from "../shared/Title";
import TableHeader from "./TableHeader";
import Products from "./Products";

export function Cart() {
    return (
        <section className="products">
            <Title title="Shopping cart" />
            <TableHeader />
            <Products />
        </section>
    );
}
