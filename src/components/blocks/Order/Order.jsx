import React from "react";
import { StyledOrder } from "./style";
import Form from "@layout/Form/Form";
import Slider from "@layout/Slider/Slider";

function Order() {
    return (
        <StyledOrder>
            <Form />
            <Slider />
        </StyledOrder>
    );
}

export default Order;
