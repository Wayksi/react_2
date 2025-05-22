import styled from "styled-components";
import { Img } from "@components/styled";

export const Product = styled.div`
    display: grid;
    grid-template-columns: 248px 1fr;
    gap: 20px;
    box-sizing: border-box;
    padding: 20px;
    margin: 0;
    height: 288px;
    background-color: ${(props) => props.theme.colorWhite};
    border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled(Img)`
    width: 248px;
    height: 100%;
    object-fit: cover;
`;

export const ProductContentWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column; 
    gap: 16px;   
`;

export const TabContainer = styled.div`
    display: flex;
    gap: 8px;
`;

export const Tab = styled.button`
    box-sizing: border-box;
    padding: 7px 11px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 14px;
    line-height: 150%;
    font-weight: 400;
    color: ${({ $active }) => ($active ? "white" : "#333333")};
    background-color: ${({ $active }) => ($active ? "#88aa4d" : "##f6f6f6")};
    cursor: pointer;
`;

export const Price = styled.span`
    position: absolute;
    bottom: 0;
    align-self: start;
    padding: 4px 8px;
    background-color: #D8ECFE;
    font-size: 14px;
    line-height: 150%;
    font-weight: 700;
`;
