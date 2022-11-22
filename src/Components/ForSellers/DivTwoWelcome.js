import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import * as h from "./Seller.styled";

import { ReactComponent as Cycle } from "../../Constants/Svgs/NewChange2.svg";

const DivTwoWelcome = () => {
  const navigate = useNavigate()

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function reportWindowSize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", reportWindowSize);
    return () => window.removeEventListener("resize", reportWindowSize);
  }, []);

  const buttonLearnStyle = {
    color: "#FFFFFF",
    textTransform: "none",
    padding: "15px 20px",
    fontSize: "15px",
    fontWeight: 600,
    borderRadius: "10px",
    border: "1px solid #FFFFFF",
    margin: "50px auto",
  };
  return (
    <h.DivOneWel>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h.ImageCon1 style={{ margin: "auto" }}>
          <img
            src={require("../../Constants/Svgs/NewLogoImage.png")}
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "cover",
              margin: "auto ",
            }}
          />
        </h.ImageCon1>
        <h.TitleCon2 style={{ fontSize: windowWidth < 1200 ? "30px" : "45px" }}>
          Welcome to Hanger Stock Auction where you can find{" "}
          <span style={{ color: "#FFFFFF" }}>better buyers</span> to drive{" "}
          <span style={{ color: "#FFFFFF" }}>better recovery</span>
        </h.TitleCon2>

        <h.ImageCon1>
          <Cycle style={{ height: "100%", width: "100%" }} />
        </h.ImageCon1>
        <Button
          style={buttonLearnStyle}
          onClick={() => navigate( "/sellerblog")}
        >
          Visit Seller Blog For More
        </Button>
      </div>
    </h.DivOneWel>
  );
};

export default DivTwoWelcome;
