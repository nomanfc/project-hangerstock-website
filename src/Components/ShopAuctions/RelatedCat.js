import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as r from "./ShopAuc.styled.js";
import Button from "@mui/material/Button";

import img1 from "../../Constants/images/Ellipse 18.png"
import img2 from  "../../Constants/images/Ellipse 19.png"
import img3 from "../../Constants/images/image 73.png"
import img4 from "../../Constants/images/CellPhones.png"



const RelatedCat = () => {
  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function reportWindowSize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", reportWindowSize)
    return () => window.removeEventListener("resize", reportWindowSize);
  }, []);

  const imageUrl = [
    {
      url: img1 ,
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
    <r.RelatedCon>
      <div
        style={{
          color: "#599F22",
          fontSize: windowWidth < 1200 ? "30px" : "40px",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        <span style={{}}>Related Categories </span>
      </div>

      <r.CardHolder style={{display:"flex", justifyContent:"center" }}>
        {imageUrl.map((data, index) => (
          <r.RelatedConCard
            key={index}
            onClick={() => navigate( "/allauctions")}
          >
            <r.ConCardInnerBox>
              <img
                src={data.url}
                style={{
                  borderRadius: "50%",
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  padding: "5px",
                }}
              ></img>
            </r.ConCardInnerBox>
            <r.CateName style={{ fontSize: "14px" }}>{data.cat}</r.CateName>
          </r.RelatedConCard>
        ))}
      </r.CardHolder>
      <div style={{ width: "fit-content", margin: "auto" }}>
        <Button
          style={buttonLearnStyle}
          onClick={() => navigate( "/allauctions")}
        >
          Browse All
        </Button>
      </div>
    </r.RelatedCon>
  );
};

export default RelatedCat;
