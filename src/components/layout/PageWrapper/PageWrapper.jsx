import React from "react";
import Header from "@layout/Header/Header";
import Footer from "@layout/Footer/Footer";
import MainPage from "@pages/MainPage/MainPage";
import { Main } from "./style";

function PageWrapper({ features }) {
    return (
        <>
            <Header />
            <Main>
                <MainPage features={features} />
            </Main>
            <Footer />
        </>
    );
}

export default PageWrapper;
