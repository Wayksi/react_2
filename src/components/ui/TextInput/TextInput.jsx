import React from "react";
import { StyledTextLabel, StyledInput } from "./style";

function TextInput({ name, placeholder, onChange }) {
    return (
        <StyledTextLabel>            
            <StyledInput
                name={name}
                placeholder={placeholder}                                
                onChange={onChange}
            />
        </StyledTextLabel>        
    );
}

export default TextInput;
