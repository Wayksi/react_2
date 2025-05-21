import React from "react";
import { Wrapper, StyledSpan, TotalPrice } from "./style";

function Price({ total }) {
    return (
        <Wrapper>
            <StyledSpan>Цена</StyledSpan>
            <TotalPrice>{total.toLocaleString()} руб.</TotalPrice>
        </Wrapper>
    );
}

export default Price;
