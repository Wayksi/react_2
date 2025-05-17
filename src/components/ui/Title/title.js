import styled, { css } from "styled-components";

export const TitleSize = {
    BIG: "big",
    MEDIUM: "medium",
    SMALL: "small",
    EXTRA_SMALL: "extra_small"
};

const TitleSizeValue = {
    [TitleSize.BIG]: {
        lineHeight: "50px",
        fontSize: "44px"
    },
    [TitleSize.MEDIUM]: {
        lineHeight: "41px",
        fontSize: "36px"
    },
    [TitleSize.SMALL]: {
        lineHeight: "31px",
        fontSize: "24px"
    },
    [TitleSize.EXTRA_SMALL]: {
        lineHeight: "27px",
        fontSize: "18px"
    }
};

export const Title = styled.h1`
    margin: 0;
    padding: 0;
    margin-bottom: ${(props) => props.marginBottom || 0}px;
    font-weight: bold;
    ${(props) => {
        const values = TitleSizeValue[props.size || TitleSize.MEDIUM];
        return css`
            font-size: ${values.fontSize};
            line-height: ${values.lineHeight};
        `;
    }};
`;

export default Title;
