import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import Button from "@mui/material/Button";
import * as h from "./home.styled";

const RowSevenRegister = () => {
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

  const buttonLearnStyle = {
    background: "#599F22",
    color: "#FFFFFF",
    textTransform: "none",
    padding: "16px 48px",
    fontSize: "14px",
    fontWeight: 600,
    margin: "30px auto 20px auto",
    borderRadius: "10px",
    width: windowWidth < 800 ? "100%" : "fit-content",
  };
  return (
    <h.RowEight>
      <h.RowCon8>
        <h.Row8Left>
          <div
            style={{
              height: "315px",
              width: "70%",
              margin: "auto",
              borderRadius: "15px",
            }}
          >
            {" "}
            <img
              src={require("../../Constants/images/image 80.png")}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "15px",
              }}
            />
          </div>
        </h.Row8Left>
        <h.Row8Right>
          <div
            style={{
              fontSize: "45px",
              fontStyle: "normal",
              fontWeight: "700",
              color: "#599F22",
              padding: "12px 25px",
            }}
          >
            Ready to get started?
          </div>
          <div
            style={{
              fontSize: "15px",
              fontWeight: 400,
              color: "#666666",
              width: "fit-content",
              margin: "auto",
              borderRadius: "10px",
              cursor: "pointer",
              zIndex: 1000,
              padding: "12px 25px",
            }}
          >
            Hanger Stock is here to help you source all your inventory needs so
            you can spend less time worrying and more time selling.Get Started
            as A supply seller today..
          </div>
          <div style={{ padding: "10px 25px" }}>
            {" "}
            <Button
              style={buttonLearnStyle}
              onClick={() => navigate("/registration")}
            >
              Register Here
            </Button>
          </div>
        </h.Row8Right>
      </h.RowCon8>
    </h.RowEight>
  );
};

export default RowSevenRegister;
