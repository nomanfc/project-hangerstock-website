import React from "react";
import * as d from "./Support.styled";

const DivOne = () => {
  return (
    <d.DivOneCon>
      <d.DivInnerCon style={{ textAlign: "center" }}>
        <div
          style={{
            color: "#FFFFFF",
            fontSize: window.innerWidth < 1200 ? "25px" : "40px",
            fontWeight: 700,
            padding: window.innerWidth < 1200 ? "30px" : "50px",
            marginBottom: "70px"
          }}
        >
          Hello there, How can we help?
        </div>
      </d.DivInnerCon>
    </d.DivOneCon>
  );
};

export default DivOne;
