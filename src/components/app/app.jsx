import React from "react";
import PageWrapper from "/src/components/layout/PageWrapper/PageWrapper";
import features from "@mocks/features";
import { GlobalStyle } from "./style";

export default function App() {
    return (
      <>
        <GlobalStyle />
        <PageWrapper features={features}/>;
      </>
    )
  }
  