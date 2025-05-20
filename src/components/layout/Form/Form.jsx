import React from "react";
import { StyledForm, StyledFieldSet, StyledLegend } from "./style";
import ProductCheckBox from "@ui/ProductCheckBox/ProductCheckBox";
import TextInput from "@ui/TextInput/TextInput";
import Button from "@ui/Button/Button";
import Price from "@ui/Price/Price";

function Form({ products, selected, onSelectedChange }) {
    const handleChange = (e) => {
        const { value, checked } = e.target;
        onSelectedChange((prev) => ({
        ...prev,
        [value]: checked,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Выбранные продукты:", selected);
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledFieldSet>
                <StyledLegend>Выберите продукты</StyledLegend>                
                {products.map((product) => (
                    <ProductCheckBox 
                        key={product.slug}
                        label={product.name}
                        name="product"
                        value={product.slug}
                        checked={!!selected[product.slug]}
                        onChange={handleChange}
                />
                ))}                
            </StyledFieldSet>
            <StyledFieldSet>
                <StyledLegend>Сделать заказ</StyledLegend>
                <TextInput
                    name="mail"
                    placeholder="Введите адрес доставки"                    
                    onChange={handleChange}
                />
                <Price />
                <Button>Купить</Button>
            </StyledFieldSet>
        </StyledForm>
    );
}

export default Form;
