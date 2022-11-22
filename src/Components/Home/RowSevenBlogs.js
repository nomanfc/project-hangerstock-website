import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import Button from "@mui/material/Button";
import * as h from "./home.styled";

import cloth from "../../Constants/images/cloth.png"
import stock from "../../Constants/images/inventory.png"
import regi from "../../Constants/images/register.png"
 
const imageUrl = [
  {
    url: cloth,
    cat: "Becoming a clothing Stock buyer on HA",
    details: `Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit amet`,
  },
  {
    url: stock,
    cat: "The quality Stock Inventory and Maximize your profit margin",
  },
  {
    url: regi,
    cat: "Register Now!",
  },
];

const RowSevenBlog = () => {
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
  };
  return (
    <h.RowSeven>
      <div
        style={{
          textAlign: "center",
          fontSize: windowWidth < 1200 ? "30px" : "45px",
          fontWeight: "700",
          color: "#599F22",
          width: "80%",
          margin: "20px auto 40px auto",
        }}
      >
        You might be wondering...
      </div>

      <h.CardCon7>
        {imageUrl.map((data, index) => (
          <h.Card7 key={index} style={{ position: "relative" }}>
            <img
              src={`${data.url}`}
              style={{
                objectFit: "cover",
                maxWidth: "100%",
                width: "100%",
                maxHeight: "100%",
                height: "100%",
                margin: "auto",
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                borderRadius: "25px",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "15px",
                left: "20px",
                right: "20px",
                zIndex: 100,
              }}
            >
              <div
                style={{
                  fontSize: windowWidth < 1200 ? "16px" : "20px",
                  fontWeight: 700,
                  background: "#FFFFFF",
                  width: "fit-content",
                  margin: "auto",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  zIndex: 1000,
                }}
              >
                {data.cat}
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#666666",
                    width: "fit-content",
                    margin: "auto",
                    borderRadius: "10px",
                    cursor: "pointer",
                    zIndex: 1000,
                  }}
                >
                  {data.details}
                </div>
              </div>
            </div>
          </h.Card7>
        ))}
      </h.CardCon7>
      <Button
        style={buttonLearnStyle}
        onClick={() => navigate( "/buyersblog")}
      >
        Veiw all Blogs
      </Button>
    </h.RowSeven>
  );
};

export default RowSevenBlog;
