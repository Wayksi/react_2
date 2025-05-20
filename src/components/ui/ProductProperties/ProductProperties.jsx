import React from "react";
import { PropertiesList, PropertiesItem, PropertiesName } from "./style";

function ProductProperties({ properties }) {
const propName = {
    energyValue: "Энергетическая ценность:",
    nutritionValue: "Пищевая ценность:"
  };

    return (
        <PropertiesList>
            {Object.entries(properties).map(([prop, value]) => (
                <PropertiesItem key={prop}>
                    <PropertiesName>{propName[prop] || prop}</PropertiesName>
                    {value}
                </PropertiesItem>
            ))}
        </PropertiesList>
    );
}

export default ProductProperties;
