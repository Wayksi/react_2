import React from "react";
import { SliderWrapper, SliderList } from "./style";
import ProductCard from "@ui/ProductCard/ProductCard";
import { Li } from "@components/styled";

function Slider({ products }) {
    console.log(products);
    
    return (
        <SliderWrapper>
            <SliderList>
                {products.map((product) => (
                    <Li key={product.id}>
                        <ProductCard {...product} />                
                    </Li>
                ))}                
            </SliderList>
        </SliderWrapper>
    );
};

export default Slider;
