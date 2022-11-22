import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import * as d from "./Buyer.styled";

const buttonGetStyle = {
  background: "#EFF6E9",
  color: "#333333",
  textTransform: "none",
  padding: "10px 40px",
  fontSize: "14px",
  fontWeight: 600,
  borderRadius: "10px",
};

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <d.DivFourCon>
        <div style={{ width: "80%", margin: "0px auto 80px auto" }}>
          <div
            style={{
              fontSize: "45px",
              fontWeight: 700,
              color: "#599F22",
              textAlign: "center",
              width: "60%",
              margin: "auto",
            }}
          >
            World’s Clothes Factory Inventory Sales E-commerce Platform
          </div>
        </div>

        <d.DivFourInnerCon>
          <d.DivRight style={{ marginTop: "50px" }}>
            <d.Left>
              <d.ImageCon>
                <img
                  src={
                    " https://www.pngitem.com/pimgs/m/138-1384524_our-vision-png-no-background-graphics-transparent-png.png"
                  }
                  style={{
                    borderRadius: "10px",
                    height: "100%",
                    width: "100%",
                  }}
                />
              </d.ImageCon>
            </d.Left>
            <d.Right>
              <div>
                <div>
                  <span
                    style={{
                      fontSize: "30px",
                      color: "#599F22",
                      fontWeight: 700,
                    }}
                  >
                    Our Vision
                  </span>
                </div>

                <div style={{ fontSize: "15px", marginTop: "20px" }}>
                  <div style={{ marginBottom: "10px" }}>
                    Every year, more than 15% of garment factory and manufacture
                    goods are returned or simply never sell. This creates tons
                    of unnecessary waste and costs garment manufacture billions
                    of dollars.
                  </div>

                  <div style={{ marginBottom: "10px" }}>
                    To transform the liquidation business through unrivaled
                    technology, analytics, and services that bring efficiency,
                    transparency, and value for other sellers and buyers of
                    returned, excess, cancelation, and other liquidation
                    inventory.
                  </div>

                  <div style={{ marginBottom: "10px" }}>
                    The return rates continue to rise, the cost associated with
                    processing returns is becoming a major pain point. To
                    transform the liquidation business through unrivaled
                    technology, analytics, and services that bring efficiency,
                    transparency, and value for both sellers and buyers of
                    returned, excess, and other liquidation inventory. This
                    means greater value for everyone involved, less waste, and a
                    healthier planet.
                  </div>
                </div>
              </div>
            </d.Right>
          </d.DivRight>

          <d.DivLeft style={{ marginTop: "150px", marginBottom: "150px" }}>
            <d.Right>
              <div>
                <div>
                  <span
                    style={{
                      fontSize: "30px",
                      color: "#599F22",
                      fontWeight: 700,
                    }}
                  >
                    Our Mission
                  </span>
                </div>

                <div style={{ fontSize: "15px", marginTop: "20px" }}>
                  Our mission is to make Clothing Wholesale and retail more
                  sustainable by eliminating all waste from returns.
                </div>
              </div>
            </d.Right>
            <d.Left>
              <d.ImageCon>
                <img
                  src={
                    "https://fuwangceramic.com/wp-content/uploads/2022/03/our-mission1.png"
                  }
                  style={{
                    borderRadius: "10px",
                    height: "100%",
                    width: "100%",
                  }}
                />
              </d.ImageCon>
            </d.Left>
          </d.DivLeft>
        </d.DivFourInnerCon>
        <div
          style={{
            width: "100%",
            margin: "100px auto 150px auto",
            border: "1px solid #FFFFFF",
            background: "#599f22",
          }}
        >
          <div
            style={{
              fontSize: "50px",
              fontWeight: 700,
              color: "#FFFFFF",
              textAlign: "center",
              marginTop: "90px",
            }}
          >
            We are Hiring
          </div>
          <div
            style={{
              width: "100%",
              margin: "20px auto 40px auto",
              fontSize: "20px",
              fontWeight: "600",
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            Ready to help us reinvent the recommerce industry?
            <div
              style={{
                color: "#FFFFFF",
                width: "fit-content",
                margin: "20px auto 100px auto",
                cursor: "pointer",
                borderBottom: "1px solid #599F22",
              }}
            >
              <Button
                style={buttonGetStyle}
                onClick={() => navigate("/contactus")}
              >
                Join us
              </Button>
            </div>
          </div>
        </div>
      </d.DivFourCon>
    </>
  );
};

export default About;
