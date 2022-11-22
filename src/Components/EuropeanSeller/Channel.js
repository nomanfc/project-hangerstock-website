import React, { useState, useEffect } from "react";
import * as h from "./Seller.styled";

const Channel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function reportWindowSize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", reportWindowSize);
   
    return () => window.removeEventListener("resize", reportWindowSize);
  }, []);

  
  return (
    <h.DivCon>
      <h.Title2
        style={{ width: "75%", fontSize: windowWidth < 1200 ? "20px" : "35px" }}
      >
        Whether you are looking for a B2B resale platform that can meet the
        needs of your enterprise or just need a channel to turn your excess
        inventory into cash, choose Hanger Stock.
      </h.Title2>

      <div
        style={{
          display: "flex",
          width: "90%",
          margin: "30px auto",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <h.Container>

          <img
            src={require("../../Constants/images/con1.png")}
            style={{ marginTop: "15px" }}
          />
          <div style={{ fontWeight: 700, color: "#444444" }}>
            Higher Recovery
          </div>

          <div style={{ textAlign: "center", color: "#414144" }}>
            30% higher recovery rates for your excess, refurbished, and
            liquidation merchandise than legacy solutions
          </div>
        </h.Container>

        <h.Container>
          <img
            src={require("../../Constants/images/con2.png")}
            style={{ marginTop: "15px" }}
          />
          <div style={{ fontWeight: 700, color: "#444444" }}>Speed</div>

          <div style={{ textAlign: "center", color: "#414144" }}>
            We move your inventory fast with easy and efficient binding shipping
            options
          </div>
        </h.Container>

        <h.Container>
          <img
            src={require("../../Constants/images/con3.png")}
            style={{ marginTop: "15px" }}
          />
          <div style={{ fontWeight: 700, color: "#444444" }}>
            Brand & Channel Control
          </div>

          <div style={{ textAlign: "center", color: "#414144" }}>
            Ensure your product is sold only in the channels you want and the
            geographies you choose
          </div>
        </h.Container>

        <h.Container>
          <img
            src={require("../../Constants/images/con4.png")}
            style={{ marginTop: "15px" }}
          />
          <div style={{ fontWeight: 700, color: "#444444" }}>
            Diversified Buyer Base
          </div>

          <div style={{ textAlign: "center", color: "#414144" }}>
            Hanger Stock's diversified buyer base of hundreds of thousands of
            buyers delivers the maximum recovery rate for your merchandise
          </div>
        </h.Container>
      </div>
    </h.DivCon>
  );
};

export default Channel;
