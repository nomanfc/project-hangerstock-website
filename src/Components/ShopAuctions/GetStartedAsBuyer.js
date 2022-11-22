import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import * as g from "./ShopAuc.styled";

import img1 from "../../Constants/images/image 90.png"
import img2 from "../../Constants/images/image 91.png"
import img3 from "../../Constants/images/image 92.png"


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

const GetStartedAsBuyer = () => {
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

  const cardData = [
    {
      name: "Step - 1",
      tag: "Click on Marketplace",
      details:
        "See one or more marketplacves you like? Appl to bid on that marketplace-be sure to have your resale certificate handy!",
      url: img1,
    },
    {
      name: "Step - 2",
      tag: "Register",
      details: `We’ll notify you as soon as your marketplace registration is approved. From there, you’ll be up and running`,
      url: img2,
    },

    {
      name: "Step - 2",
      tag: "Start Bidding",
      details: `Finally start your bidding.`,
      url: img3,
    },

  ];

  return (
    <g.GetAsBuyerCon>
      <div
        style={{
          fontSize: windowWidth < 1200 ? "30px" : "45px",
          fontWeight: 600,
          color: "#599F22",
          width: "100%",
          textAlign: "center",
        }}
      >
        Get Started as a buyer
      </div>
      <g.CardHolderBuyer style={{justifyContent:"center"}}>
        {cardData.map((data, index) => (
          <g.CardConBuyer key={index}>
            <Card style={{ width: "100%", height: "100%", border: "none" }}>
              <Card.Img
                variant="top"
                style={{
                  height: "250px",
                  objectFit: "cover",
                  borderBottom: "1px solid rgba(196, 196, 196, 0.48)",
                  margin: "auto",
                  width: "100%",
                  borderRadius: "15px",
                }}
                src={data.url}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "15px",
                    fontWeight: 700,
                  }}
                >
                  <span>{data.name}</span>
                  <span
                    style={{
                      marginLeft: "30px",
                      padding: "10px 10px",
                      background: "#EFF6E9",
                      color: "#43771A",
                      borderRadius: "10px",
                      fontSize: "13px",
                      fontWeight: 700,
                    }}
                  >
                    {data.tag}
                  </span>
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "14px",
                    color: "#444444",
                    fontWeight: "400",
                  }}
                >
                  {data.details}
                </Card.Text>
              </Card.Body>
            </Card>
          </g.CardConBuyer>
        ))}
      </g.CardHolderBuyer>
      <div style={{ width: "fit-content", margin: "auto" }}>
        <Button
          style={buttonLearnStyle}
          onClick={() => navigate( "/buyersblog")}
        >
          View All Blogs
        </Button>
      </div>
    </g.GetAsBuyerCon>
  );
};

export default GetStartedAsBuyer;
