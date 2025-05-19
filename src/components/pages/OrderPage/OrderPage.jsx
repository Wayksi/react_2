import React from "react";
import Order from "@blocks/Order/Order";

export default function OrderPage({ products }) {
    return (
        <Order products={products} />
    );
}
