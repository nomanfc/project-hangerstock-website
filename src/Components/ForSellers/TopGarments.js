import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import * as h from "../ShopAuctions/ShopAuc.styled";

import img1 from "../../Constants/images/image 25.png";
import img2 from "../../Constants/images/image 150.png";
import img3 from "../../Constants/images/image 24.png";
import img4 from "../../Constants/images/image 23.png";

const TopGarments = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function reportWindowSize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", reportWindowSize);
    return () => window.removeEventListener("resize", reportWindowSize);
  }, []);

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
      <h.RowFour>
        <div
          style={{
            fontSize: windowWidth < 1200 ? "25px" : "35px",
            fontStyle: "normal",
            fontWeight: "700",
            color: "#599F22",
            width: "100%",
            textAlign: "center",
          }}
        >
          Join the world’s largest Garment Manufacturers
        </div>
        <div style={{ width: " 85%", textAlign: "center", marginTop: "20px" }}>
          The world's largest retailers and manufacturers. Amazon, Target,
          Unilever, Walmart, and many more trust Hyena Action to drive higher
          recovery, offer brand and channel control, and cut down cycle times.
        </div>
        <h.Cardcon style={{ marginTop: "30px", marginBottom: "30px" }}>
          {imageUrl.map((data, index) => (
            <h.Card key={index} style={{ cursor: "pointer" }}>
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
          onClick={() => navigate("/marketplace")}
        >
          Browse All
        </Button>
      </h.RowFour>
    </>
  );
};

export default TopGarments;
