import React from "react";
import Header from "@layout/Header/Header";
import Footer from "@layout/Footer/Footer";
import MainPage from "@pages/MainPage/MainPage";
import "./style.css";

function PageWrapper({ features }) {
    return (
        <>
            <Header />
            <main className="page-wrapper__main">
                <MainPage features={features} />
            </main>
            <Footer />
        </>
    );
}

export default PageWrapper;
