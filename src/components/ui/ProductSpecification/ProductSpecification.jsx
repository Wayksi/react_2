import React from "react";
import { SpecificationList, SpecificationName, SpecificationItem } from "./style";

function ProductSpecification({ list = [], delimeter = ": " }) {
    return (
        <SpecificationList>
            {list.map((option, index) => (
                <SpecificationItem key={`tab${index * 10}`}>
                    <SpecificationName>
                        {option.property}
                        {delimeter}
                    </SpecificationName>
                    {option.value}
            </SpecificationItem> 
            ))}                       
        </SpecificationList>
    );
}

export default ProductSpecification;
