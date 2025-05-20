import React from "react";
import { SpecificationList, SpecificationName, SpecificationItem } from "./style";

function ProductSpecification({ specification }) {
const specName = {
    mass: "Масса:",
    term: "Срок годности:",
    breed: "Порода:",
    origin: "Место происхождения:",
  };

    return (
        <SpecificationList>
            {Object.entries(specification).map(([spec, value]) => (
                <SpecificationItem key={spec}>
                    <SpecificationName>{specName[spec] || spec}</SpecificationName>
                    {value}
            </SpecificationItem> 
            ))}                       
        </SpecificationList>
    );
}

export default ProductSpecification;
