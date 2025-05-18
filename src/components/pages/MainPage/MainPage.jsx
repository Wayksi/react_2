import React from "react";
import About from "@blocks/About/About";
import FeaturesList from "@blocks/FeaturesList/FeaturesList";
import Order from "@blocks/Order/Order";

function MainPage({ features }) {
  return (
    <>
      <About />
      <FeaturesList features={features} />
      <Order />
    </>
  );
}

export default MainPage;
