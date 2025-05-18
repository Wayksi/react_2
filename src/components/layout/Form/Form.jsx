import React, { useState } from "react";
import { StyledForm, StyledFieldSet, StyledLegend } from "./style";
import ProductCheckBox from "@ui/ProductCheckBox/ProductCheckBox";
import TextInput from "@ui/TextInput/TextInput";
import Button from "@ui/Button/Button";
import Price from "@ui/Price/Price";

const products = [
    "Филе бедра цыпленка",
    "Филе бедра гуся",
    "Мякоть бедра говяжья",
    "Грудка цыпленка на кости",
    "Голень цыпленка"
];

const defaultSelected = ["Филе бедра цыпленка", "Филе бедра гуся", "Мякоть бедра говяжья"]

function Form() {
    const [selected, setSelected] = useState(() =>
        defaultSelected.reduce((acc, item) => {
            acc[item] = true;
            return acc;
        }, {})
    );

    const handleChange = (e) => {
        const { value, checked } = e.target;
        setSelected((prev) => ({
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
                    <ProductCheckBox key={product}
                        label={product}
                        name="product"
                        value={product}
                        checked={!!selected[product]}
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
