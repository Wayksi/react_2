import React from "react";
import LogoIcon from "/src/assets/logo.svg?react";
import { AppRoute } from "/src/const";
import { StyledLogo, StyledLogoMainPage, Text } from "./style";
import { useLocation } from "react-router-dom";

function Logo () {
    const { pathName } = useLocation();
    return pathName === AppRoute.MAIN ? (
        <StyledLogoMainPage>
            <LogoIcon />
            <Text>Фермерские продукты</Text>
        </StyledLogoMainPage>
    ) : (
        <StyledLogo to={AppRoute.MAIN}>
            <LogoIcon />
            <Text>Фермерские продукты</Text>
        </StyledLogo>
    );
}

export default Logo;
