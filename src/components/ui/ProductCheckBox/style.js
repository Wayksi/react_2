import styled from "styled-components";

export const StyledLabel = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 56px;
    padding: 0;
    margin: 0;
    cursor: pointer;
`;

export const HiddenCheckBox = styled.input.attrs({ type: "checkbox" })`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
    pointer-events: none;
`;

export const CustomCheckBox = styled.span`
    position: relative;
    box-sizing: border-box;
    width: 24px;
    height: 24px;
    background-color: ${(props) => props.theme.colorGray};
    border: 1px solid rgba(0, 0, 0, 0.1);

    ${StyledLabel}:hover & {
    border-color: #999;
    }

    ${HiddenCheckBox}:checked + & {
        background-color: #f7931e;
    }

    ${HiddenCheckBox}:checked:hover + & {
        background-color: #FC7427;
    }

    ${HiddenCheckBox}:checked + &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 7px;
    width: 8px;
    height: 14px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;
