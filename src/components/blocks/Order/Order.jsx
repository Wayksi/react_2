import React from "react";
import { StyledOrder } from "./style";
import Form from "@layout/Form/Form";
import Slider from "@layout/Slider/Slider";

function Order({ products }) {    
    return (
        <StyledOrder>
            <Form />
            <Slider products={products} />
        </StyledOrder>
    );
}

export default Order;
