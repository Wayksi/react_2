import React from "react";
import Header from "@layout/Header/Header";
import Footer from "@layout/Footer/Footer";
import { Main } from "./style";
import { Outlet } from "react-router-dom";

function PageWrapper() {
    return (
        <>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </>
    );
}

export default PageWrapper;
