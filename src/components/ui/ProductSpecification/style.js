import styled from "styled-components";
import { Li } from "@components/styled"

export const SpecificationList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 14px;
    line-height: 150%;
    font-weight: 400;
    color: #000000;
`;

export const SpecificationItem =styled(Li)`
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const SpecificationName = styled.p`
    padding: 0;
    margin: 0;
    font-weight: 700;
`;


