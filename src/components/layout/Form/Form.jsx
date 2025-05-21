import React from "react";
import { StyledForm, StyledFieldSet, StyledLegend, SubmitButton } from "./style";
import ProductCheckBox from "@ui/ProductCheckBox/ProductCheckBox";
import TextInput from "@ui/TextInput/TextInput";
import Price from "@ui/Price/Price";

function Form({ products, selected, onSelectedChange, selectedSlug }) {
    const handleChange = (e) => {
        const { value, checked } = e.target;
        onSelectedChange((prev) => ({
        ...prev,
        [value]: checked,
        }));
    };

    const totalPrice = products.filter((product) => selectedSlug.includes(product.slug))
                       .reduce((sum, product) => {
                            const match = product.price.match(/^(\d+)/);
                            const numericPrice = match ? parseInt(match[1], 10) : 0;
                            return sum + numericPrice;
                       }, 0);

    const handleSubmit = (e) => {
        e.preventDefault();

        const selectedProducts = Object.entries(selected).filter(([, checked]) => checked).map(([slug]) => slug);        
        console.log("Выбранные продукты:", selectedProducts);
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
                <Price total={totalPrice} />
                <SubmitButton type="submit">Купить</SubmitButton>
            </StyledFieldSet>
        </StyledForm>
    );
}

export default Form;
