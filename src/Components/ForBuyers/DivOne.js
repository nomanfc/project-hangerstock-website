import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import * as d from "./Buyer.styled";
import { useNavigate } from "react-router-dom";
import background from "../../Constants/Svgs/Rectangle.png";

const buttonGetStyle = {
  background: "#EFF6E9",
  color: "#333333",
  textTransform: "none",
  padding: "10px 12px",
  fontSize: "14px",
  fontWeight: 600,
  borderRadius: "10px",
};

const buttonGetStyleBlogs = {
  background: "#EFF6E9",
  marginRight: "15px",
  color: "#333333",
  textTransform: "none",
  padding: "10px 12px",
  fontSize: "14px",
  fontWeight: 600,
  borderRadius: "10px",
};

const DivOne = () => {
  const navigate = useNavigate()

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
    <>
      <d.DivOneCon
        style={{
          background: "#599F22",
        }}
      >
        <d.DivOneInnerCon>
          <d.DivOneInnerConLeft>
            <div
              style={{
                color: "#FFFFFF",
                fontSize: "16px",
                fontWeight: 400,
                marginTop: "30px",
                marginBottom: "30px",
              }}
            >
              ONLINE AUCTIONS FOR LIQUIDATION, RETURNS, AND OVERSTOCK
            </div>
            <div
              style={{
                color: "#FFFFFF",

                fontSize: windowWidth < 1200 ? "30px" : "45px",
                fontWeight: 700,
              }}
            >
              Shop for inventory from the world’s top retailers, manufacturers,
              and private sellers.
            </div>
            <div
              style={{
                color: "#FFFFFF",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            >
              At any given time there are thousands of listings open for bidding
              across dozens of liquidation marketplaces.
            </div>
            <div>
              <Button
                onClick={() => navigate( "/registrationbuyer")}
                style={buttonGetStyleBlogs}
              >
                Signup Today
              </Button>

              <Button
                style={buttonGetStyle}
                onClick={() => navigate( "/marketplace")}
              >
                Marketplaces
              </Button>
            </div>
          </d.DivOneInnerConLeft>
          <d.DivOneInnerConRight>
            <img
              src={require("../../Constants/Svgs/RectangleImage.png")}
              style={{
                borderRadius: "10px",
                maxHeight: "100%",
                maxwidth: "100%",
                transform: `skew(15deg)`,
              }}
            />
          </d.DivOneInnerConRight>
        </d.DivOneInnerCon>
      </d.DivOneCon>
    </>
  );
};

export default DivOne;
