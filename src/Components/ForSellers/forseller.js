import React from "react";

import HowItWork from "./HowItWorks";
import HowItWork2 from "./HowItWorks2";
import DivTwoWelcome from "./DivTwoWelcome";
import Channel from "./Channel";
import TopGarments from "./TopGarments";
import SolutionBusiness from "./SolutionBusiness";
import GainAccess from "./GainAccess";

const Forseller = () => {
  return (
    <div>
      <HowItWork />
      <DivTwoWelcome />
      <Channel />
      <div style={{ width: "85%", margin: "auto" }}>
        <TopGarments />
      </div>
      <SolutionBusiness />
      <GainAccess />
      <HowItWork2 />
    </div>
  );
};

export default Forseller;
