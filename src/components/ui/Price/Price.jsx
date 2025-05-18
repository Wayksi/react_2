import React from "react";
import { Wrapper, StyledSpan, TotalPrice } from "./style";

function Price() {
    return (
        <Wrapper>
            <StyledSpan>Цена</StyledSpan>
            <TotalPrice>1 200 руб.</TotalPrice>
        </Wrapper>
    );
}

export default Price;
