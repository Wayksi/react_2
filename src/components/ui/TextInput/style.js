import styled from "styled-components";

export const StyledTextLabel = styled.label`
    font-size: 14px;    
`;

export const StyledInput = styled.input.attrs({ type: "mail" })`
    box-sizing: border-box;
    padding: 14px 12px 13px;
    margin-top: 12px;
    margin-bottom: 20px;
    width: 100%;
    min-height: 48px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: ${(props) => props.theme.colorGray};
`;
