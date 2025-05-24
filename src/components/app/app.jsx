import React from "react";
import PageWrapper from "/src/components/layout/PageWrapper/PageWrapper";
import features from "@mocks/features";
import productsWithImages from "@mocks/products";
import { GlobalStyle } from "./style";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "/src/const";
import MainPage from "@pages/MainPage/MainPage";
import OrderPage from "@pages/OrderPage/OrderPage";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage features={features} />} />
            <Route
              path={AppRoute.BUY.replace(AppRoute.MAIN, "")}
              element={<OrderPage products={productsWithImages} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  )
}
  