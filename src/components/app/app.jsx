import React from "react";
import PageWrapper from "/src/components/layout/PageWrapper/PageWrapper";
import features from "@mocks/features";
import "./style.css";

export default function App() {
    return <PageWrapper features={features}/>;
  }
  