import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import * as h from "../ShopAuctions/ShopAuc.styled";

import img1 from "../../Constants/images/image 25.png"
import img2 from "../../Constants/images/image 150.png"
import img3 from "../../Constants/images/image 24.png"
import img4 from "../../Constants/images/image 23.png"

const MarketPlace = () => {
  const navigate = useNavigate();

  const imageUrl = [
    {
      url: img1,
      cat: "Fashion Accessories",
    },

    {
      url: img2,
      cat: "Cell Phones",
    },

    {
      url: img3,
      cat: "Cell Phones",
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
    <>
      <h.RowFour
        style={{
          margin: "50px auto",
          width: "90%",
          height: "fit-content",
        }}
      >
        <div
          style={{
            fontSize: "45px",
            fontStyle: "normal",
            fontWeight: "700",
            color: "#599F22",
            width: "100%",
            textAlign: "center",
          }}
        >
          Leading marketplaces for all your inventory needs
        </div>
        <div
          style={{
            width: " 85%",
            textAlign: "center",
            margin: "20px auto 70px auto",
          }}
        >
          Browse thousands of live auctions from major brands you know and love.
        </div>

        <div
          style={{
            width: "100%",
            marginTop: "70px",
            fontWeight: "700",
            fontSize: "20px",
            marginLeft: "15px",
          }}
        >
          <span> Popular Marketplaces</span>
        </div>
        <h.Cardcon style={{ marginTop: "10px", marginBottom: "30px" }}>
          {imageUrl.map((data, index) => (
            <h.Card key={index}
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
        <div style={{ float: "right", color: "#599F22", cursor: "pointer" }}>
          Browse All
        </div>

        <div
          style={{
            width: "100%",
            marginTop: "70px",
            fontWeight: "700",
            fontSize: "20px",
            marginLeft: "15px",
          }}
        >
          <span> New Marketplaces</span>
        </div>
        <h.Cardcon style={{ marginTop: "10px", marginBottom: "30px" }}>
          {imageUrl.map((data, index) => (
            <h.Card
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
        <div style={{ float: "right", color: "#599F22", cursor: "pointer" }}>
          Browse All
        </div>

        <div
          style={{
            width: "100%",
            marginTop: "70px",
            fontWeight: "700",
            fontSize: "20px",
            marginLeft: "15px",
          }}
        >
          <span> All Marketplaces</span>
        </div>
        <h.Cardcon
          style={{
            marginTop: "10px",
            marginBottom: "30px",
          }}
        >
          {imageUrl.map((data, index) => (
            <h.Card
              style={{ cursor: "pointer" }}
              onClick={() => navigate( "/allauctions")}
            >
              <img
                src={data?.url}
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
      </h.RowFour>
    </>
  );
};

export default MarketPlace;
