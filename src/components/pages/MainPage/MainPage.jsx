import React from "react";
import About from "@blocks/About/About";
import FeaturesList from "@blocks/FeaturesList/FeaturesList";

function MainPage({ features }) {
  return (
    <>
      <About />
      <FeaturesList features={features} />
    </>
  );
}

export default MainPage;
