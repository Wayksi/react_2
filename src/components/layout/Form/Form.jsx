import React, { useState } from "react";
import { StyledForm, StyledFieldSet, StyledLegend, SubmitButton } from "./style";
import ProductCheckBox from "@ui/ProductCheckBox/ProductCheckBox";
import TextInput from "@ui/TextInput/TextInput";
import Price from "@ui/Price/Price";

function Form({ products, selected, onSelectedChange, selectedSlug }) {
    const [email, setEmail] = useState("");

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;

        if (type === "checkbox") {
            onSelectedChange((prev) => ({
                ...prev,
                [value]: checked,
            }));
        } else if (name === "mail") {
            setEmail(value);
        }

    };

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    };
    const isFormValid = isValidEmail(email) && selectedSlug.length > 0;

    const totalPrice = products.filter((product) => selectedSlug.includes(product.slug))
        .reduce((sum, product) => {
            const match = product.price.match(/^(\d+)/);
            const numericPrice = match ? parseInt(match[1], 10) : 0;
            return sum + numericPrice;
        }, 0);

    const handleSubmit = (e) => {
        e.preventDefault();

        const selectedProducts = Object.entries(selected).filter(([, checked]) => checked).map(([slug]) => slug);

        const message = `
                Электронная почта: ${email}

                Выбранные продукты:
                ${selectedProducts.join(", ")}

                Цена заказа: ${totalPrice} руб.
            `;

        alert(message);
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
                    type="email"
                    placeholder="Введите адрес доставки"
                    onChange={handleChange}
                />
                <Price total={totalPrice} />
                <SubmitButton type="submit" disabled={!isFormValid}>Купить</SubmitButton>
            </StyledFieldSet>
        </StyledForm>
    );
}

export default Form;
