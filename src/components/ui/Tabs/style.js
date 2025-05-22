import styled from "styled-components";
import { Ul, Li } from "@components/styled";

export const Header = styled(Ul)`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
`;

export const TabItem = styled(Li)`
    padding: 0;
`;

export const TabButton = styled.button`
    display: block;
    box-sizing: border-box;
    padding: 7px 11px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 14px;
    line-height: 150%;
    font-weight: 400;
    color: ${({ $isActive }) => ($isActive ? "white" : "#333333")};
    background-color: ${({ $isActive }) => ($isActive ? "#88aa4d" : "#f6f6f6")};
    cursor: pointer;
`;

export const TabContent = styled.div`
    font-size: 14px;
    text-align: left;
    max-height: ${(props) => props.$maxContentHeiht || "none"};
    overflow-y: overlay;
`;
