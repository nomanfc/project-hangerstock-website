import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as h from "./home.styled";
import Button from "@mui/material/Button";

import aprl from "../../Constants/images/image 73.png"
import sale from "../../Constants/images/image 78.png"
import undr from "../../Constants/images/image 77.png"
import actv from "../../Constants/images/image 78.png"
 
const RowFiveCate = () => {
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
      url: aprl,
      cat: "Apparel",
    },
    {
      url: sale,
      cat: "Whole sale",
    },

    {
      url: undr,
      cat: "Underwear",
    },
    {
      url: actv,
      cat: "Active wear",
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
      <h.RowFive>
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
          Hundreds of product categories to choose from
        </div>
        <h.Cardcon5>
          {imageUrl.map((data, index) => (
            <h.Card5 key={index} style={{ position: "relative" }}>
              <img
                src={data.url}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "15px",
                  margin: "auto",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "15px",
                  left: 0,
                  right: 0,
                }}
              >
                <div
                  onClick={() => (window.location.href = "/allauctions")}
                  style={{
                    fontSize: windowWidth < 1200 ? "15px" : "20px",
                    fontWeight: 700,
                    background: "#FFFFFF",
                    width: "fit-content",
                    margin: "auto",
                    padding: "10px 20px",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  {data.cat}
                </div>
              </div>
            </h.Card5>
          ))}
        </h.Cardcon5>
        <Button
          style={buttonLearnStyle}
          onClick={() => navigate("/allauctions")}
        >
          Veiw all Categories
        </Button>
      </h.RowFive>
    </>
  );
};

export default RowFiveCate;
