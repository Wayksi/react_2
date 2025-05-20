import React, { useState } from "react";
import { StyledOrder } from "./style";
import Form from "@layout/Form/Form";
import Slider from "@layout/Slider/Slider";

function Order({ products }) {
    const defaultSelected = ["chicken-thigh", "goose-thigh", "beef-thigh"];
    
    const [selected, setSelected] = useState(() =>
        defaultSelected.reduce((acc, p) => {
            acc[p] = true;
            return acc;
        }, {})
    );
    
    const selectedSlug = Object.entries(selected).filter(([, checked]) => checked).map(([slug]) => slug);
        
    const visibleProducts = products.filter((product) => selectedSlug.includes(product.slug));
    
    return (
        <StyledOrder>
            <Form products={products} selected={selected} onSelectedChange={setSelected} />
            <Slider products={visibleProducts} />
        </StyledOrder>
    );
}

export default Order;
