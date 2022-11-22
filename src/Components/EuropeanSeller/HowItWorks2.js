import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import * as h from "./Seller.styled";

const HowItWork2 = () => {
  const navigate = useNavigate();

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
    color: "#444444",
    textTransform: "none",
    padding: windowWidth < 1200 ? "10px 10px" : "10px 20px",
    fontSize: "14px",
    fontWeight: 600,
    borderRadius: "10px",
    border: "1px solid #599F22",
    width: windowWidth < 900 ? "100%" : "fit-content",
  };

  const buttonLearnStyle = {
    background: "#EFF6E9",
    color: "#444444",
    textTransform: "none",
    padding: windowWidth < 1200 ? "10px 10px" : "10px 16px",
    fontSize: "14px",
    fontWeight: 600,
    width: windowWidth < 900 ? "100%" : "fit-content",
    borderRadius: "10px",
  };

  return (
    <h.DivOne
      style={{
        background: "#599F22",
        height: "fit-content",
        margin: "100px auto",
      }}
    >
      <div
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <h.Title1 style={{ textAlign: "center", color: "white" }}>
          BUSINESS TO BUSINESS ENTERPRISE AND SMALL BUSINESS AUCTION PLATFORM
          FOR EXCESS & LIQUIDATED INVENTORY
        </h.Title1>
        <h.Title2 style={{ color: "white" }}>
          Ready to partner with Hanger Stock?
        </h.Title2>

        <h.DivThreeCon>
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
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontWeight: 400,
                }}
              >
                *More than a €50M revenue
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
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontWeight: "400",
                }}
              >
                *Less than a €50M revenue
              </div>
            </div>
          </div>
        </h.DivThreeCon>
      </div>
    </h.DivOne>
  );
};

export default HowItWork2;
