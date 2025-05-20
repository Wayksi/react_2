import styled from "styled-components";
import { Li } from "@components/styled"

export const PropertiesList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 14px;
    line-height: 150%;
    font-weight: 400;
    color: #000000;
`;

export const PropertiesItem =styled(Li)`
    display: block;
`;

export const PropertiesName = styled.p`
    display: inline;
    padding: 0;
    margin: 0;
    margin-right: 4px;
    font-weight: 700;
`;