import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import * as h from "./Seller.styled";

const HowItWork = () => {
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

  const buttonGetStyle = {
    background: "#EFF6E9",
    color: "#333333",
    textTransform: "none",
    padding: windowWidth < 1200 ? "10px 10px" : "10px 20px",
    fontSize: "14px",
    fontWeight: 600,
    borderRadius: "10px",
    border: "1px solid #599F22",
    width: windowWidth < 900 ? "100%" : "fit-content",
  };

  const buttonLearnStyle = {
    background: "#599F22",
    color: "#FFFFFF",
    textTransform: "none",
    padding: windowWidth < 1200 ? "10px 10px" : "10px 16px",
    fontSize: "14px",
    fontWeight: 600,
    width: windowWidth < 900 ? "100%" : "fit-content",
    borderRadius: "10px",
  };
  return (
    <h.DivOne>
      <h.Title1 style={{ textAlign: "center" }}>
        Connecting buyers with sellers of excess, returned, refurbished and
        liquidation inventory
      </h.Title1>
      <h.Title2 style={{ fontSize: windowWidth < 1200 ? "20px" : "40px" }}>
        Hundreds of Thousands of Buyers Looking to Purchase From The World's
        Best Sellers
      </h.Title2>

      <h.DivThreeCon>
        <div
          style={{
            width: "fit-content",
            margin: "auto",
            fontSize: "20px",
            fontWeight: 700,
          }}
        >
          What Kind Of Business Are You?
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: windowWidth < 900 ? "column" : "row",
            width: "fit-content",
            margin: "20px auto",
          }}
        >
          <div
            style={{
              marginRight: windowWidth < 900 ? "0px" : "15px",
              marginBottom: windowWidth < 900 ? "15px" : "0px",
            }}
          >
            <Button
              style={buttonLearnStyle}
              onClick={() => navigate( "/enterprisebusiness")}
            >
              I’m a enterprise company
            </Button>
            <div
              style={{
                marginTop: "5px",
                fontSize: "13px",
                color: "#444444",
                textAlign: "center",
                fontWeight: 400,
              }}
            >
              *More than a $50M revenue
            </div>
          </div>
          <div>
            <Button
              style={buttonGetStyle}
              onClick={() => navigate( "/smallbusiness")}
            >
              I’m a small business
            </Button>
            <div
              style={{
                marginTop: "5px",
                fontSize: "13px",
                color: "#444444",
                textAlign: "center",
                fontWeight: "400",
              }}
            >
              *Less than a $50M revenue
            </div>
          </div>
        </div>
      </h.DivThreeCon>
    </h.DivOne>
  );
};

export default HowItWork;
