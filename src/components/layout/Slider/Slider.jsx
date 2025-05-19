import React from "react";
import { SliderWrapper, SliderList } from "./style";
import ProductCard from "@ui/ProductCard/ProductCard";

function Slider() {
    return (
        <SliderWrapper>
            <SliderList>
                <ProductCard />
                <ProductCard />
            </SliderList>
        </SliderWrapper>
    );
};

export default Slider;
