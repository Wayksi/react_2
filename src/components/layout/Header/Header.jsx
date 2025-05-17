import React from "react";
import Logo from "@ui/Logo/Logo";
import Nav from "@layout/Nav/Nav";
import { StyledHeader } from "./style";

function Header () {
    return (
        <StyledHeader>
            <Logo />
            <Nav />
        </StyledHeader>
    );
}

export default Header;
