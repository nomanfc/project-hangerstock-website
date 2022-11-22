import React from "react";

import * as d from "./Buyer.styled";

const DivTwo = () => {
  return (
    <>
      <d.DivTwoCon>
        <d.DivTwoInnerCon>
          <d.DivTwoInnerConLeft>
            <img
              src={require("../../Constants/Svgs/Ellipse 6.png")}
              style={{
                borderRadius: "10px",
                maxHeight: "100%",
                maxwidth: "100%",
              }}
            />
          </d.DivTwoInnerConLeft>

          <d.DivTwoInnerConRight>
            <div
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#444444",
                margin: "40px 0px",
              }}
            >
              Think of HangerStock Auction as a starting point to help you find and
              view the type of merchandise you're seeking.
            </div>

            <div
              style={{ fontSize: "15px", fontWeight: 400, color: "#444444" }}
            >
              Think of HangerStock Auction as a starting point to help you find and
              view the type of merchandise you're seeking.
            </div>
          </d.DivTwoInnerConRight>
        </d.DivTwoInnerCon>
      </d.DivTwoCon>
    </>
  );
};

export default DivTwo;
