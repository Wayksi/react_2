import React from "react";
import Title, { TitleSize } from "@ui/Title/Title";
import { Product, ProductImage, ProductContentWrapper, TabContainer, Tab, Description, Price } from "./style";

function ProductCard() {
    return (
        <Product>
            <ProductImage src="/" alt="fd" />
            <ProductContentWrapper>
                <Title size={TitleSize.SMALL}>Филе бедра цыпленка</Title>
                <TabContainer>
                    <Tab active>Описание</Tab>
                    <Tab>Характеристики</Tab>
                    <Tab>Свойства</Tab>
                </TabContainer>
                <Description>
                    Филе бедра без кожи и кости. Птица содержится в свободных птичниках, выращивается на натуральных зерновых кормах, что влияет положительно на вкус мяса. Филейная часть бедра обладает насыщенным вкусом и мясным ароматом.
                </Description>
                <Price>400 руб. / 700 гр.</Price>
            </ProductContentWrapper>
        </Product>
    );
}

export default ProductCard;
