import React from "react";
import Logo from "@ui/Logo/Logo";
import Nav from "@layout/Nav/Nav";
import "./style.css";

function Header () {
    return (
        <header className="header">
            <Logo />
            <Nav />
        </header>
    );
}

export default Header;
