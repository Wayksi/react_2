import styled, { css } from "styled-components";

const gridList = css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${(props) => props.theme.indent};
    font-size: 0;
    line-height: 0;
    text-align: ${(props) => props.$align || "center"};

    & > li {
        font-size: var(--li-font-size);
        line-height: var(--li-line-height);
        vertical-align: top;
    }
`;

const Ul = styled.ul`
    margin: 0;
    padding: 0;
    --li-font-size: ${(props) => props.$fontSize ? `${props.$fontSize}px` : props.theme.fontSizeDefault};
    --li-line-height: ${(props) => props.$lineHeight ? `${props.$lineHeight}px` : "27px"};
    ${(props) => (props.$isGridList ? gridList : "")}
`;

export default Ul;
