import React from "react";
import Button from "@ui/Button/Button";
import { AppRoute } from "/src/const";
import { StyledButton } from "./style";
import { useLocation } from "react-router-dom";

const buttons = [
    {
        to: AppRoute.MAIN,
        button: (
            <StyledButton key={AppRoute.MAIN} link={AppRoute.MAIN}>
                Главная
            </StyledButton>
        )
    },
    {
        to: AppRoute.BUY,
        button: (
            <Button key={AppRoute.BUY} link={AppRoute.BUY}>
                Купить
            </Button>
        )
    }
];

function Nav() {
    const pageUrl = useLocation().pathname;
    return (
        <nav>
            {buttons
                .filter((button) => button.to !== pageUrl)
                .map((button) => button.button)}
        </nav>
    );
}

export default Nav;