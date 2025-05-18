import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex; 
    flex-direction: column;
    gap: 18px;
`;

export const StyledFieldSet = styled.fieldset`
    padding: 24px 20px 12px;
    margin: 0;
    background-color: ${(props) => props.theme.colorWhite};
    border: none;
`;

export const StyledLegend = styled.legend`
    position: relative;
    top: 24px;
    padding: 0;
    margin-bottom: 12px;
    font-size: ${(props) => props.theme.fontSizeDefault};
    color: ${(props) => props.theme.colorBlackForText};
    font-weight: bold;
`;
