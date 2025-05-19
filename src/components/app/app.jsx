import React from "react";
import PageWrapper from "/src/components/layout/PageWrapper/PageWrapper";
//import features from "@mocks/features";
import productsWithImages from "@mocks/products";
import { GlobalStyle } from "./style";

export default function App() {
    return (
      <>
        <GlobalStyle />
        <PageWrapper products={productsWithImages}/>;
      </>
    )
  }
  