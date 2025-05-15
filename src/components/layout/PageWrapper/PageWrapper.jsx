import React from "react";
import Header from "/src/components/layout/Header/Header";
import Footer from "/src/components/layout/Footer/Footer";
import MainPage from "/src/components/pages/MainPage/MainPage";
import "./style.css";

function PageWrapper() {
    return (
        <>
            <Header />
            <main className="page-wrapper__main">
                <PageWrapper />
            </main>
            <Footer />
        </>
    );
}

export default PageWrapper;
