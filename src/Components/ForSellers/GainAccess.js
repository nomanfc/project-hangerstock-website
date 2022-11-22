import React, { useState, useEffect } from "react";
import * as d from "../ForBuyers/Buyer.styled";
import { ReactComponent as Map } from "../../Constants/Svgs/map.svg";

const GainAccess = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function reportWindowSize() {
      setWindowWidth(window.innerWidth);
    }
    // Trigger this function on resize
    window.addEventListener("resize", reportWindowSize);
    //  Cleanup for componentWillUnmount
    return () => window.removeEventListener("resize", reportWindowSize);
  }, []);
  return (
    <d.DivFourInnerCon>
      <d.DivRight>
        <d.Left>
          <d.ImageCon>
            <img
              src={require("../../Constants/images/map.jpg")}
              style={{
                borderRadius: "10px",
                height: "100%",
                width: "100%",
              }}
            />
          </d.ImageCon>
        </d.Left>
        <d.Right style={{ margin: "auto" }}>
          <div>
            <div>
              <span
                style={{
                  color: "#599F22",
                  fontSize: windowWidth < 1200 ? "30px" : "45px",
                  fontWeight: 700,
                  width: "80%",
                }}
              >
                Gain access to buyers in 135 countries
              </span>
            </div>

            <div style={{ fontSize: "15px", marginTop: "20px" }}>
              Hundreds of thousands of vetted business buyers all over the globe
              are ready to bid on your inventory today!
            </div>
          </div>
        </d.Right>
      </d.DivRight>

      <d.DivRight style={{ margin: "60px" }}>
        <d.Right style={{ margin: "auto" }}>
          <div>
            <div>
              <span
                style={{
                  color: "#599F22",
                  fontSize: windowWidth < 1200 ? "30px" : "45px",
                  fontWeight: 700,
                  width: "80%",
                }}
              >
                Connect with buyers across all categories
              </span>
            </div>

            <div style={{ fontSize: "15px", marginTop: "20px" }}>
              Hanger Stock perates the world’s largest B2B marketplace for
              returned and excess inventory, connecting some of the largest
              retailers and leading manufacturers to hundreds of thousands of
              vetted business buyers all over the globe.
            </div>
          </div>
        </d.Right>
        <d.Left>
          <d.ImageCon>
            <img
              src={require("../../Constants/images/image 133.png")}
              style={{
                borderRadius: "10px",
                height: "100%",
                width: "100%",
              }}
            />
          </d.ImageCon>
        </d.Left>
      </d.DivRight>
    </d.DivFourInnerCon>
  );
};

export default GainAccess;
