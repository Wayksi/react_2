import React from "react";
import Title, { TitleSize } from "../Title/Title";
import ProductSpecification from "../ProductSpecification/ProductSpecification";
import Tabs from "../Tabs/Tabs";
import { Product, ProductImage, ProductContentWrapper, Price} from "./style";

function ProductCard({ product }) {
    const tabList = [
        {
            title: "Oписание",
            content: product.description
        },
        {
            title: "Характеристики",
            content: <ProductSpecification list={product.specification} />
        },
        {
            title: "Свойства",
            content: <ProductSpecification list={product.properties} />
        }
    ];

    return (
        <Product>
            <ProductImage src={product.src} alt={product.name} />
            <ProductContentWrapper>
                <Title size={TitleSize.SMALL}>{product.name}</Title>
                <Tabs maxContentHeiht="105px" tabList={tabList}></Tabs> 
                <Price>
                    {product.price} руб. / {product.weight} гр.
                </Price>               
            </ProductContentWrapper>
        </Product>
    );
}

export default ProductCard;
