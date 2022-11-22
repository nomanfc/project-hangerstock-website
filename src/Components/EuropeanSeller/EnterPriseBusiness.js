import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import RegFormEnter from "./EnterpriseBusinessForm";

import img1 from "../../Constants/images/image 25.png";
import img2 from "../../Constants/images/image 150.png";
import img3 from "../../Constants/images/image 24.png";
import img4 from "../../Constants/images/image 23.png";

import img11 from "../../Constants/images/smtip1.png";
import img22 from "../../Constants/images/smtip2.png";
import img33 from "../../Constants/images/smtip3.png";

import * as d from "./Seller.styled.js";
import * as h from "../Home/home.styled";

const buttonGetStyle = {
  background: "#EFF6E9",
  color: "#333333",
  textTransform: "none",
  padding: "10px 16px",
  fontSize: "14px",
  fontWeight: 600,
  borderRadius: "10px",
};

const buttonLearnStyle = {
  background: "#599F22",
  color: "#FFFFFF",
  textTransform: "none",
  padding: "10px 16px",
  fontSize: "14px",
  fontWeight: 600,
  borderRadius: "10px",
};

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

const EnterPrise = () => {
  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function reportWindowSize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", reportWindowSize);
    return () => window.removeEventListener("resize", reportWindowSize);
  }, []);

  return (
    <>
      <h.RowOne style={{ padding: windowWidth < 1200 ? "50px 0px" : "0px" }}>
        <h.RowCon>
          <h.RowOneLeft>
            <h.RlCon>
              <p
                style={{ color: "#FFFFFF", fontSize: "16px", fontWeight: 400 }}
              >
                SELL YOUR EXCESS INVENTORY ON HANGER STOCK
              </p>
              <h1
                style={{
                  color: "#FFFFFF",

                  fontSize: windowWidth < 1200 ? "30px" : "40px",
                  fontWeight: 700,
                }}
              >
                See why the world’s leading retailers are choosing Hanger Stock
                to move their excess inventory
              </h1>

              <div style={{ marginTop: "35px" }}>
                <Button
                  style={buttonGetStyle}
                  onClick={() => navigate("/contactusent")}
                >
                  Contact us
                </Button>
              </div>

              <div
                style={{
                  color: "#FFFFFF",
                  fontSize: "16px",
                  fontWeight: 600,
                  marginTop: "30px",
                }}
              >
                Less than $50M in revenue?
              </div>
              <div
                style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 400 }}
              >
                <a
                  href="/smallbusiness"
                  style={{
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  Check out our small business solution
                </a>
              </div>
            </h.RlCon>
          </h.RowOneLeft>
          <h.RowOneRight>
            <h.RrCon>
              <h.RrConD2 style={{ transform: "skew(-15deg)" }}>
                <h.RrConD2I1>
                  <img
                    src={require("../../Constants/images/Shoes.png")}
                    style={{
                      borderRadius: "10px",
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                  />
                </h.RrConD2I1>
                <h.RrConD2I2>
                  <img
                    src={require("../../Constants/images/Tshirts.png")}
                    style={{
                      borderRadius: "10px",
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                  />
                </h.RrConD2I2>
              </h.RrConD2>
            </h.RrCon>
          </h.RowOneRight>
        </h.RowCon>
      </h.RowOne>
      <d.DivFourCon>
        <div style={{ width: "90%", margin: "100px auto" }}>
          <div
            style={{
              fontSize: windowWidth < 1200 ? "30px" : "45px",
              fontWeight: 700,
              color: "#599F22",
              textAlign: "center",
            }}
          >
            The world’s leading retailers work with Hanger Stock
          </div>
          <div
            style={{
              width: "100%",
              marginTop: "70px",
              fontWeight: "700",
              fontSize: "20px",
              marginLeft: "15px",
            }}
          ></div>
          <h.Cardcon style={{ marginTop: "10px", marginBottom: "30px" }}>
            {imageUrl.map((data, index) => (
              <h.Card
                style={{
                  cursor: "pointer",
                  height: "150px",
                  width: "300px",
                  boxShadow: "none",
                }}
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
        </div>
        <d.DivFourInnerCon>
          <div
            style={{
              fontSize: windowWidth < 1200 ? "30px" : "45px",
              fontWeight: 700,
              color: "#599F22",
              textAlign: "center",
              margin: "50px auto",
              width: windowWidth < 1400 ? "90%" : "50%",
            }}
          >
            The time to sort out your excess inventory is now
          </div>
          <p
            style={{
              width: windowWidth < 1400 ? "90%" : "45%",
              textAlign: "center",
              marginBottom: "70px",
            }}
          >
            The longer your returned, refurbished or excess inventory sits in
            your warehouse, the more it costs your company. You might be working
            with legacy options like jobbers, liquidators, or putting your
            merchandise back on the shelf. But what if there was a better way?
          </p>
          <d.DivRight>
            <d.Left>
              <d.ImageCon>
                <img
                  src={require("../../Constants/images/graph.png")}
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
                      fontSize: "20px",
                      color: "#599F22",
                      fontWeight: 700,
                    }}
                  >
                    Higher Recovery Rates
                  </span>
                </div>

                <div style={{ fontSize: "15px", marginTop: "20px" }}>
                  Hyena Auction operates the world’s largest B2B marketplace for
                  returned and excess inventory, connecting some of the largest
                  retailers and leading manufacturers to hundreds of thousands
                  of vetted business buyers all over the globe. By partnering
                  with B-Stock, these brands can attain the highest recovery
                  rates possible for secondary-market merchandise across all
                  categories, conditions, geographies, and quantitie
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
                      fontSize: "20px",
                      color: "#599F22",
                      fontWeight: 700,
                    }}
                  >
                    No more spreadsheets.. No more faxing.. No more
                    negotiating..
                  </span>
                </div>

                <div style={{ fontSize: "15px", marginTop: "20px" }}>
                  Eliminate the pain points of the traditional liquidation
                  process and convert your excess inventory to cash in just 15
                  days. Improve the operational efficiency of your liquidation
                  program by automating your process. Hyena Auction turns your
                  excess inventory to cash fast.
                </div>
              </div>
            </d.Right>
            <d.Left>
              <d.ImageCon>
                <img
                  src={require("../../Constants/images/sheet.png")}
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
            fontSize: windowWidth < 1200 ? "30px" : "45px",
            fontWeight: 700,
            color: "#599F22",
            textAlign: "center",
            margin: "150px auto 30px auto",
            width: windowWidth < 1200 ? "90%" : "50%",
          }}
        >
          Have cell phone inventory to resell?
        </div>
        <p
          style={{
            width: windowWidth < 1200 ? "90%" : "45%",
            textAlign: "center",
            margin: "auto",
            marginBottom: "70px",
          }}
        >
          See why Hyena Auction is the world’s largest marketplace for returned
          and pre-owned cell phones.
        </p>
        <div style={{ margin: "50px auto", width: "fit-content" }}>
          <Button
            style={buttonGetStyle}
            onClick={() => navigate("/sellphonesellers")}
          >
            Learn How to Get Started
          </Button>
        </div>

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
            Want to learn more?
          </div>
          <div
            style={{
              width: windowWidth < 1200 ? "90%" : "25%",
              margin: "20px auto 100px auto",
              fontSize: "15px",
              fontWeight: "600",
              color: "#444444",
              textAlign: "center",
            }}
          >
            Our Hyena Auction Minute Videos, our Mobile Quarterly Digests, our
            Holiday Playbook and much more
            <div
              onClick={() => navigate("/sellerblog")}
              style={{
                color: "#599F22",
                width: "fit-content",
                margin: "20px auto",
                cursor: "pointer",
                borderBottom: "1px solid #599F22",
              }}
            >
              Check out
            </div>
          </div>
        </div>

        <div
          style={{
            width: windowWidth < 900 ? "90%" : "100%",
            margin: "150px auto 50px auto",
            border: "1px solid #FFFFFF",
          }}
        >
          <div
            style={{
              fontSize: windowWidth < 1200 ? "25px" : "45px",
              fontWeight: 700,
              color: "#599F22",
              textAlign: "center",
            }}
          >
            Trusted by the biggest and best retailers in the world
          </div>
          <p style={{ textAlign: "center", marginBottom: "70px" }}>
            Don’t take it from us, let our partners tell their story of how
            Hyena Auction has driven higher recovery rates than their old legacy
            solutions
          </p>

          <div
            style={{
              height: "fit-content",
              display: "flex",
              justifyContent: " center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {imageUrl?.map((data, index) => (
              <div
                key={index}
                style={{
                  width: "300px",
                  height: "400px",
                  margin: "25px",
                  borderRadius: "10px",
                  padding: "20px",
                  border: "1px solid #C4C4C4",
                }}
              >
                <img
                  src={data?.url}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    margin: "auto",
                    height: "100px",
                    borderRadius: "10px",
                  }}
                />
                <div
                  style={{
                    fontSize: "40px",
                    marginTop: "20px",
                    color: "#336F09",
                    fontWeight: 600,
                    textAlign: "center",
                    color: "#2A5F9E",
                  }}
                >
                  500%
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    margin: "10px auto",
                    width: "60%",
                    color: "#444444",
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  increase in sales between Nov '19 and June '20
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
                  <Button
                    style={buttonGetStyle}
                    sx={{ margin: "20px auto" }}
                    // onClick={() => navigate( "/allauctions")}
                  >
                    Read the story
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            margin: "150px auto",
            height: "fit-content",
          }}
        >
          <RegFormEnter />
        </div>
      </d.DivFourCon>
    </>
  );
};

export default EnterPrise;
