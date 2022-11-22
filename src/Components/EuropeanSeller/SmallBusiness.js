import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as d from "./Seller.styled.js";
import * as b from "./Buyer.styled.js";
import Button from "@mui/material/Button";

import RegForm from "./SmallBusinessRegForm";
import { ReactComponent as RightArrow } from "../../Constants/Svgs/Vector.svg";
import { ReactComponent as RightArrow2 } from "../../Constants/Svgs/ArrowRight.svg";

import img11 from "../../Constants/images/smtip1.png"
import img22 from "../../Constants/images/smtip2.png"
import img33 from "../../Constants/images/smtip3.png"

const tips = [
  {
    image: img11,
    date: "22 JUNE 2021",
    min: "5",
    title: "New Shipping Size Available on Amazon EU",
    details:
      "Lorem ipsum dummy text for an article description.  These should be short, yet informative.",
    link: "",
  },

  {
    image: img22,
    date: "22 JUNE 2021",
    min: "5",
    title: "10 Best Platforms for Reselling Apparel",
    details:
      "Lorem ipsum dummy text for an article description.  These should be short, yet informative.",
    link: "",
  },
  {
    image: img33,
    date: "22 JUNE 2021",
    min: "5",
    title: "Best Consumer Electronics to Resell for",
    details:
      "Lorem ipsum dummy text for an article description.  These should be short, yet informative.",
    link: "",
  },
];

const buttonGetStyle = {
  background: "#EFF6E9",
  color: "#333333",
  textTransform: "none",
  padding: "10px 12px",
  fontSize: "14px",
  fontWeight: 600,
  borderRadius: "10px",
};

const buttonGetStyleBlogs = {
  background: "#EFF6E9",
  marginRight: "15px",
  color: "#333333",
  textTransform: "none",
  padding: "10px 12px",
  fontSize: "14px",
  fontWeight: 600,
  borderRadius: "10px",
};

const SmallBusiness = () => {
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
  return (
    <>
      <b.DivOneCon
        style={{
          background: "#599F22",
        }}
      >
        <b.DivOneInnerCon>
          <b.DivOneInnerConLeft>
            <div
              style={{
                color: "#FFFFFF",
                fontSize: "16px",
                fontWeight: 400,
                marginTop: "30px",
                marginBottom: "20px",
              }}
            >
              JOIN HUNDREDS OF SELLERS OF EXCESS AND RETURNED MERCHANDISE
            </div>
            <div
              style={{
                color: "#FFFFFF",
                marginBottom: "20px",
                fontSize: windowWidth < 1200 ? "30px" : "45px",
                fontWeight: 700,
              }}
            >
              Gain access to thousands of buyers waiting to bid on your
              inventory
            </div>

            <div style={{ marginBottom: "50px" }}>
              <Button
                onClick={() => navigate( "/registration")}
                style={buttonGetStyleBlogs}
              >
                Signup Today
              </Button>

              <Button
                style={buttonGetStyle}
                onClick={() => navigate( "/contactus")}
              >
                Contact us
              </Button>
            </div>
          </b.DivOneInnerConLeft>
          <b.DivOneInnerConRight>
            <img
              src={require("../../Constants/Svgs/RectangleImage.png")}
              style={{
                borderRadius: "10px",
                maxHeight: "100%",
                maxwidth: "100%",
                transform: `skew(15deg)`,
              }}
            />
          </b.DivOneInnerConRight>
        </b.DivOneInnerCon>
      </b.DivOneCon>

      <d.DivFourCon>
        <div style={{ width: "90%", margin: "50px auto" }}>
          <div
            style={{
              fontSize: windowWidth < 1200 ? "30px" : "45px",
              fontWeight: 700,
              color: "#599F22",
              textAlign: "center",
            }}
          >
            Getting Started is Easy
          </div>
          <div
            style={{
              width: windowWidth < 1200 ? "90%" : "50%",
              margin: "20px auto 130px auto",
              fontSize: "15px",
              fontWeight: "600",
              color: "#444444",
              textAlign: "center",
            }}
          >
            Simply sign up with your contact information, your shipping
            information and provide your payment information for the monthly fee
            and you can begin to sell your merchandise immediately to buyers
            waiting to buy your inventory.
          </div>
        </div>
        <d.DivFourInnerCon>
          <d.DivRight>
            <d.Left>
              <d.ImageCon>
                <img
                  src={require("../../Constants/images/smallbusiness1.png")}
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
                      padding: "10px 10px",
                      marginRight: "15px",
                      background: " #599F22",
                      borderRadius: "10px",
                      color: "#FFFFFF",
                    }}
                  >
                    STEP 1
                  </span>
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#599F22",
                      fontWeight: 700,
                    }}
                  >
                    Sign Up
                  </span>
                </div>

                <div style={{ fontSize: "15px", marginTop: "20px" }}>
                  Sign up via our simple seller registration form
                </div>
              </div>
            </d.Right>
          </d.DivRight>

          <d.DivLeft>
            <d.Right>
              <div>
                <div>
                  <span
                    style={{
                      padding: "10px 10px",
                      marginRight: "15px",
                      background: " #599F22",
                      borderRadius: "10px",
                      color: "#FFFFFF",
                    }}
                  >
                    STEP 2
                  </span>
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#599F22",
                      fontWeight: 700,
                    }}
                  >
                    Post an auction
                  </span>
                </div>

                <div style={{ fontSize: "15px", marginTop: "20px" }}>
                  Post an auction
                </div>
              </div>
            </d.Right>
            <d.Left>
              <d.ImageCon>
                <img
                  src={require("../../Constants/images/smallbusiness2.png")}
                  style={{
                    borderRadius: "10px",
                    height: "100%",
                    width: "100%",
                  }}
                />
              </d.ImageCon>
            </d.Left>
          </d.DivLeft>

          <d.DivRight>
            <d.Left>
              <d.ImageCon>
                <img
                  src={require("../../Constants/images/smallbusiness3.png")}
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
                      padding: "10px 10px",
                      marginRight: "15px",
                      background: " #599F22",
                      borderRadius: "10px",
                      color: "#FFFFFF",
                    }}
                  >
                    STEP 3
                  </span>
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#599F22",
                      fontWeight: 700,
                    }}
                  >
                    Highter sales prices
                  </span>
                </div>

                <div style={{ fontSize: "15px", marginTop: "20px" }}>
                  See the higher sales prices roll in
                </div>

                <div
                  style={{
                    display: "flex",
                    marginTop: "20px",
                    alignItems: "center",
                  }}
                  onClick={() => navigate( "/allauctions")}
                >
                  <span
                    style={{
                      fontSize: windowWidth < 1200 ? "14px" : "20px",
                      color: "#599F22",
                      fontWeight: 700,
                      marginRight: "15px",
                      borderBottom: "1px solid #599F22",
                      cursor: "pointer",
                    }}
                  >
                    BROWSE AUCTIONS
                  </span>
                  <span>
                    <RightArrow style={{ cursor: "pointer" }} />
                  </span>
                </div>
              </div>
            </d.Right>
          </d.DivRight>
        </d.DivFourInnerCon>
        <div
          style={{
            width: "100%",
            margin: "150px auto 50px auto",
            border: "1px solid #FFFFFF",
            background: "rgba(248, 250, 248, 0.75)",
          }}
        >
          <div
            style={{
              fontSize: windowWidth < 1200 ? "30px" : "45px",
              fontWeight: 700,
              color: "#599F22",
              textAlign: "center",
              marginTop: "90px",
            }}
          >
            Not sure? Need help?
          </div>
          <div
            style={{
              width: windowWidth < 1200 ? "90%" : "25%",
              margin: "20px auto 130px auto",
              fontSize: "15px",
              fontWeight: "600",
              color: "#444444",
              textAlign: "center",
            }}
          >
            Our team of auction specialists are here to help you set up your
            auction to maximize your returns. Contact us
            <div
              onClick={() => navigate( "/contactus")}
              style={{
                color: "#599F22",
                width: "fit-content",
                margin: "20px auto",
                cursor: "pointer",
                borderBottom: "1px solid #599F22",
              }}
            >
              Contact us
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            margin: "50px auto",
            border: "1px solid #FFFFFF",
          }}
        >
          <div
            style={{
              fontSize: windowWidth < 1200 ? "30px" : "45px",
              fontWeight: 700,
              color: "#599F22",
              textAlign: "center",
            }}
          >
            Selling Tips
          </div>

          <div
            style={{
              height: "fit-content",
              display: "flex",
              justifyContent: " center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {tips?.map((data, index) => (
              <div
                key={index}
                style={{
                  width: "360px",
                  height: "450px",
                  margin: "25px",
                  borderRadius: "10px 10px 0px 0px",
                  borderBottom: "3px solid #C4C4C4",
                }}
              >
                <img
                  src={data?.image}
                  style={{ width: "100%", height: "50%", borderRadius: "10px" }}
                />
                <div
                  style={{
                    fontSize: "12px",
                    marginTop: "20px",
                    color: "#336F09",
                    fontWeight: 600,
                  }}
                >
                  {data?.date} . {data?.min} MIN READ
                </div>
                <div
                  style={{
                    fontSize: "18px",
                    marginTop: "10px",
                    color: "#444444",
                    fontWeight: 600,
                  }}
                >
                  {data?.title}
                </div>

                <div
                  style={{
                    fontSize: "14px",
                    marginTop: "10px",
                    color: "#444444",
                    fontWeight: 600,
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      width: "85%",
                      height: "85px",
                      overflow: "hidden",
                    }}
                  >
                    <span style={{ fontWeight: "400", fontSize: "13px" }}>
                      {data?.details}
                    </span>
                  </div>
                  <div style={{ marginRight: "10px" }}>
                    <RightArrow2
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate( "/sellerblog")}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            width: "100%",
            margin: "150px auto",
            background: "rgba(248, 250, 248, 0.75)",
          }}
        >
          <d.DivLeft style={{ width: "80%" }}>
            <d.Right>
              <div>
                <div>
                  <span
                    style={{
                      fontSize: windowWidth < 1200 ? "30px" : "45px",
                      color: "#599F22",
                      fontWeight: 700,
                    }}
                  >
                    Don’t take it from us, take it from our successful sellers
                  </span>
                </div>

                <div style={{ fontSize: "15px", marginTop: "20px" }}>
                  See how Kingdom Supply successfully leveraged Hyena Auction
                  Supply to grow their business
                </div>
              </div>
            </d.Right>
            <d.Left>
              <d.ImageCon style={{ marginTop: "50px", marginBottom: "50px" }}>
                <img
                  src={require("../../Constants/images/vidPreview.png")}
                  style={{
                    borderRadius: "10px",
                    height: "100%",
                    width: "100%",
                  }}
                />
              </d.ImageCon>
            </d.Left>
          </d.DivLeft>
        </div>

        <div
          style={{
            margin: "150px auto",
            height: "fit-content",
          }}
        >
          <RegForm />
        </div>
      </d.DivFourCon>
    </>
  );
};

export default SmallBusiness;
