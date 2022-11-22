import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import * as h from "./home.styled";

import img66 from "../../Constants/images/image 66.png"
import img67 from "../../Constants/images/image 67.png"
import img68 from "../../Constants/images/image 68.png"
import img69 from "../../Constants/images/image 69.png"
import img662 from "../../Constants/images/image 66.png"
import img391 from "../../Constants/images/Rectangle 391.png"

const RowFourGarment = () => {
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
  const navigate = useNavigate();

  const imageUrl = [
    {
      url: img66,
    },
    {
      url: img67,
    },
    {
      url: img68,
    },
    {
      url: img69,
    },
    {
      url: img662,
    },
    {
      url: img391,
    },
  ];

  const buttonLearnStyle = {
    background: "#599F22",
    color: "#FFFFFF",
    textTransform: "none",
    padding: "16px 48px",
    fontSize: "14px",
    fontWeight: 600,
    margin: "40px auto",
    borderRadius: "10px",
  };

  return (
    <>
      <h.RowFour>
        <div
          style={{
            fontSize: windowWidth < 1200 ? "30px" : "45px",
            textAlign: "center",
            fontStyle: "normal",
            fontWeight: "700",
            color: "#599F22",
            padding: "12px 25px",
          }}
        >
          Garment factory from brands
        </div>
        <h.Cardcon>
          {imageUrl.map((data, index) => (
            <h.Card
            key={index}
              style={{ cursor: "pointer" }}
              onClick={() => navigate( "/allauctions")}
            >
              <img
                src={`${data.url}`}
                style={{
                  objectFit: "cover",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  padding: "10px",
                  margin: "auto",
                }}
              />
            </h.Card>
          ))}
        </h.Cardcon>
        <Button
          style={buttonLearnStyle}
          onClick={() => navigate( "/marketplace")}
        >
          See all Marketplaces
        </Button>
      </h.RowFour>
    </>
  );
};

export default RowFourGarment;
