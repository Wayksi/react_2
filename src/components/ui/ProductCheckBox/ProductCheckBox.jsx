import React from "react";
import { StyledLabel, HiddenCheckBox, CustomCheckBox } from "./style";

function ProductCheckBox({ label, name, value, checked, onChange }) {
    return (
        <StyledLabel>
            {label}
            <HiddenCheckBox
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <CustomCheckBox />
        </StyledLabel>
    );
}

export default ProductCheckBox;
