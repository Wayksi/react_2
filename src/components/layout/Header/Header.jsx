import React from "react";
import Logo from "/src/components/ui/Logo/Logo";
import Nav from "/src/components/ui/Nav/Nav";
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
