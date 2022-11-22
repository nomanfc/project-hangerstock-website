import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import * as s from "./Seller.styled";

const buttonLearnStyle = {
  background: "#599F22",
  color: "#FFFFFF",
  textTransform: "none",
  padding: "10px 16px",
  fontSize: "14px",
  fontWeight: 600,
  borderRadius: "10px",
};

const SolutionBusiness = () => {
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
    <s.DivConSeller>
      <s.DivConInnerSeller>
        <s.CardOneSell style={{ height: "fit-content" }}>
          <div
            style={{
              color: "#599F22",
              fontSize: windowWidth < 1200 ? "30px" : "45px",
              fontWeight: 700,
              margin: "50px auto",
            }}
          >
            Solutions for all Business Sizes
          </div>
          <div
            style={{
              color: "#444444",
              fontSize: windowWidth < 1200 ? "14px" : "18px",
              fontWeight: 400,
              margin: "20px auto",
            }}
          >
            See how you can increase recovery, reduce expense, and diversify.
            your buyers for excess and liquidated merchandise
          </div>
        </s.CardOneSell>

        <s.CardOneSell style={{ background: "#FFFFFF" }}>
          <div
            style={{
              color: "#599F22",
              fontSize: "16px",
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            MORE THAN $50M REVENUE
          </div>
          <div
            style={{
              color: "#444444",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            Enterprise Company
          </div>

          <div
            style={{
              color: "#444444",
              fontSize: "14px",
              fontWeight: 400,
              textAlign: "center",
              padding: "25px",
            }}
          >
            For larger companies that require custom, private marketplaces.
          </div>

          <div>
            <Button
              style={buttonLearnStyle}
              onClick={() => navigate( "/enterprisebusiness")}
            >
              Learn More
            </Button>
          </div>
        </s.CardOneSell>

        <s.CardOneSell style={{ background: "#FFFFFF" }}>
          <div
            style={{
              color: "#599F22",
              fontSize: "16px",
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            LESS THAN $50M REVENUE
          </div>
          <div
            style={{
              color: "#444444",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            Small Company
          </div>

          <div
            style={{
              color: "#444444",
              fontSize: "14px",
              fontWeight: 400,
              textAlign: "center",
              padding: "25px",
            }}
          >
            For companies with smaller lot sizes and inventory.
          </div>

          <div>
            <Button
              style={buttonLearnStyle}
              onClick={() => navigate( "/smallbusiness")}
            >
              Learn More
            </Button>
          </div>
        </s.CardOneSell>
      </s.DivConInnerSeller>
    </s.DivConSeller>
  );
};

export default SolutionBusiness;
