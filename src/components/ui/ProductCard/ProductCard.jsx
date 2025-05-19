import React from "react";
import Title, { TitleSize } from "@ui/Title/Title";
import { Product, ProductImage, ProductContentWrapper, TabContainer, Tab, Description, Price } from "./style";

function ProductCard({ src, alt, name, description, price }) {
    return (
        <Product>
            <ProductImage src={src} alt={alt} />
            <ProductContentWrapper>
                <Title size={TitleSize.SMALL}>{name}</Title>
                <TabContainer>
                    <Tab $active={true}>Описание</Tab>
                    <Tab>Характеристики</Tab>
                    <Tab>Свойства</Tab>
                </TabContainer>
                <Description>
                    {description}
                </Description>
                <Price>{price}</Price>
            </ProductContentWrapper>
        </Product>
    );
}

export default ProductCard;
