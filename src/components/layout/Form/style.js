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

export const SubmitButton = styled.button`
    display: block;
  min-height: 60px;
  padding: 0 24px;
  min-width: 100%;
  max-width: 700px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  font-weight: bold;
  line-height: 58px;
  text-align: center;
  text-decoration: none;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => props.theme.buttonColor};
  border: none;
  background-image: none;
  box-shadow: none;
  cursor: pointer;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;
  box-sizing: border-box;
  font-family: ${(props) => props.theme.fontFamily};

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.buttonColorHoverActive};
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    background-color: ${(props) => props.theme.buttonColor};
  }
`;
