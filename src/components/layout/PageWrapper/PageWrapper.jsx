import React from "react";
import Header from "@layout/Header/Header";
import Footer from "@layout/Footer/Footer";
import MainPage from "@pages/MainPage/MainPage";
import OrderPage from "@pages/OrderPage/OrderPage";
import { Main } from "./style";

function PageWrapper({ ...prop }) {
    return (
        <>
            <Header />
            <Main>
                {/* <MainPage features={features} /> */}
                <OrderPage {...prop} />
            </Main>
            <Footer />
        </>
    );
}

export default PageWrapper;
