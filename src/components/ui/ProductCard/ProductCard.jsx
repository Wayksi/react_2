import React from "react";
import { useState } from "react";
import Title, { TitleSize } from "@ui/Title/Title";
import ProductDescription from "../ProductDescription/ProductDescription";
import ProductSpecification from "../ProductSpecification/ProductSpecification";
import ProductProperties from "../ProductProperties/ProductProperties";
import { Product, ProductImage, ProductContentWrapper, TabContainer, Tab } from "./style";

function ProductCard({ src, alt, name, description, price, specification, properties }) {
    const [activeTab, setActiveTab] = useState("description");

    const renderTabContent = () => {
        switch (activeTab) {
            case "description":
                return <ProductDescription description={description} price={price} />;
            case "specification":
                return <ProductSpecification specification={specification} />;
            case "properties":
                return <ProductProperties properties={properties} />;
            default: 
                return null;
        }
    };

    return (
        <Product>
            <ProductImage src={src} alt={alt} />
            <ProductContentWrapper>
                <Title size={TitleSize.SMALL}>{name}</Title>
                <TabContainer>
                    <Tab $active={activeTab === "description"} onClick={() => setActiveTab("description")}>Описание</Tab>
                    <Tab $active={activeTab === "specification"} onClick={() => setActiveTab("specification")}>Характеристики</Tab>
                    <Tab $active={activeTab === "properties"} onClick={() => setActiveTab("properties")}>Свойства</Tab>
                </TabContainer>
                
                {renderTabContent()}
            </ProductContentWrapper>
        </Product>
    );
}

export default ProductCard;
