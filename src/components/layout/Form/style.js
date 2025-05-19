import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex; 
    flex-direction: column;
    gap: 18px;
`;

export const StyledFieldSet = styled.fieldset`
    position: relative;
    box-sizing: border-box;
    padding: 63px 20px 12px;
    margin: 0;
    background-color: ${(props) => props.theme.colorWhite};
    border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const StyledLegend = styled.legend`
    position: absolute;
    top: 24px;
    padding: 0;
    margin-bottom: 12px;
    font-size: ${(props) => props.theme.fontSizeDefault};
    color: ${(props) => props.theme.colorBlackForText};
    font-weight: bold;
`;
