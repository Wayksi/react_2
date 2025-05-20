import React from "react";
import { Description, Price } from "./style";

function ProductDescription({ description, price }) {
    return (
        <>
            <Description>
                {description}
            </Description>
            <Price>{price}</Price>
        </>
    );
}

export default ProductDescription;
