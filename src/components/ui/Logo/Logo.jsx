import React from "react";
import LogoIcon from "/src/assets/logo.svg?react";
import { StyledLogo, Text } from "./style";

function Logo () {
    return (
        <StyledLogo href="/">
            <LogoIcon />
            <Text>Фермерские продукты</Text>
        </StyledLogo>
    );
}

export default Logo;
