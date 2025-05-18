import styled from "styled-components";

export const StyledOrder = styled.section`
    display: grid;
    grid-template-columns: 353px 1fr;
    column-gap: 20px;
    box-sizing: border-box;
    height: 768px;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: ${(props) => props.theme.pagePadding};
    padding-right: ${(props) => props.theme.pagePadding};
    background-color: ${(props) => props.theme.colorGray};
`;
