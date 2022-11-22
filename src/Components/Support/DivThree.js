import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import * as d from "./Support.styled";

const buttonLearnStyle = {
  background: "#599F22",
  color: "#FFFFFF",
  textTransform: "none",
  padding: "12px 25px",
  fontSize: "14px",
  fontWeight: 400,
  borderRadius: "10px",
};

const DivThree = () => {
  const navigate  = useNavigate();
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
    <d.DivThreeCon>
      <d.DivInnerCon>
        <div
          style={{
            textAlign: "center",
            fontSize: windowWidth < 1200 ? "30px" : "40px",
            fontWeight: "700",
            paddingTop: "100px",
            color: "#599f22",
          }}
        >
          Didn’t find what you need?
        </div>
        <div
          style={{
            width: "fit-content",
            margin: "auto",
            paddingTop: "50px",
            paddingBottom: "50px",
          }}
        >
          <Button
            style={buttonLearnStyle}
            onClick={() => navigate( "/contactus")}
          >
            Contact Support
          </Button>
        </div>
      </d.DivInnerCon>
    </d.DivThreeCon>
  );
};

export default DivThree;
