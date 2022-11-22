import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import * as h from "./ShopAuc.styled";

import img1 from "../../Constants/images/image 25.png"
import img2 from "../../Constants/images/image 149.png"
import img3 from "../../Constants/images/image 153.png"
import img4 from "../../Constants/images/image 150.png"
import img5 from "../../Constants/images/image 151.png"
import img6 from "../../Constants/images/image 24.png"
import img7 from "../../Constants/images/image 23.png"
import img8 from "../../Constants/images/image 25.png"

const OtherMarkets = () => {
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
  const imageUrl = [
    {
      url: img1,
      cat: "Fashion Accessories",
    },
    {
      url: img2,
      cat: "Apparel & Footwear",
    },
    {
      url: img3,
      cat: "Fashion",
    },
    {
      url: img4,
      cat: "Cell Phones",
    },
    {
      url: img5,
      cat: "Cell Phones",
    },
    {
      url: img6,
      cat: "Cell Phones",
    },
    {
      url: img7,
      cat: "Cell Phones",
    },
    {
      url: img8,
      cat: "Cell Phones",
    },
  ];

  const buttonLearnStyle = {
    background: "#599F22",
    color: "#FFFFFF",
    textTransform: "none",
    padding: "16px 48px",
    fontSize: "14px",
    fontWeight: 600,
    margin: "40px",
    borderRadius: "10px",
  };

  return (
    <>
      <h.RowFour>
        <div
          style={{
            fontSize: windowWidth < 1200 ? "25px" : "45px",
            marginBottom: "40px",
            fontStyle: "normal",
            fontWeight: "700",
            color: "#599F22",
            width: "100%",
            textAlign: "center",
          }}
        >
          Other marketplaces you might be interested in
        </div>
        <h.Cardcon>
          {imageUrl.map((data, index) => (
            <h.Card
            key={index}
              style={{ cursor: "pointer" }}
              onClick={() => navigate( "/allauctions")}
            >
              <img
                src={data.url}
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
          Browse All
        </Button>
      </h.RowFour>
    </>
  );
};

export default OtherMarkets;
