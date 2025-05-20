import React from "react";
import Title, { TitleSize } from "@ui/Title/Title";
import ProductDescription from "../ProductDescription/ProductDescription";
import ProductSpecification from "../ProductSpecification/ProductSpecification";
import ProductProperties from "../ProductProperties/ProductProperties";
import { Product, ProductImage, ProductContentWrapper, TabContainer, Tab } from "./style";

function ProductCard({ src, alt, name, description, price, specification, properties }) {
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
                {/* <ProductDescription description={description} price={price} /> */}
                {/* <ProductSpecification specification={specification} /> */}
                <ProductProperties properties={properties} />
            </ProductContentWrapper>
        </Product>
    );
}

export default ProductCard;
