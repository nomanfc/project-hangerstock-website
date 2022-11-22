import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";


import RegFormPhone from "./SellerPhoneForm";


import * as d from "./Seller.styled.js";
import * as h from "../Home/home.styled";

import img1 from "../../Constants/images/image 25.png"
import img2 from "../../Constants/images/image 150.png"
import img3 from "../../Constants/images/image 24.png"
import img4 from "../../Constants/images/image 23.png"

import img11 from "../../Constants/images/smtip1.png"
import img22 from "../../Constants/images/smtip2.png"
import img33 from "../../Constants/images/smtip3.png"

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

const SellPhoneSellers = () => {
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

  return (
    <>
      <h.RowOne style={{ padding: windowWidth < 1200 ? "50px 0px" : "0px" }}>
        <h.RowCon>
          <h.RowOneLeft>
            <h.RlCon>
              <p
                style={{ color: "#FFFFFF", fontSize: "16px", fontWeight: 400 }}
              >
                WORLD'S LARGEST PLATFORM FOR EXCESS, RETURNED, REFURBISHED, AND
                TRADE-IN MOBILE DEVICES
              </p>
              <h1
                style={{
                  color: "#FFFFFF",

                  fontSize: windowWidth < 1200 ? "30px" : "45px",
                  fontWeight: 700,
                }}
              >
                Sell mobile phones and other mobile devices on Hanger Stock B2B
                sales platform
              </h1>

              <div style={{ marginTop: "35px" }}>
                <Button
                  style={buttonGetStyle}
                  onClick={() => navigate( "/contactus")}
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
              <h.RrConD2
                style={{
                  height: "350px",
                  width: "550px",
                }}
              >
                <img
                  src={require("../../Constants/images/phone1.png")}
                  style={{
                    borderRadius: "10px",
                    height: "100%",
                    width: "100%",
                  }}
                />
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
            Our B2B Sales Platform
          </div>
          <div
            style={{
              width: "100%",
              marginTop: "70px",
              textAlign: "center",
              fontWeight: "700",
              fontSize: windowWidth < 1200 ? "15px" : "20px",
            }}
          >
            Across our client marketplaces, we sell over 3,000,000 phones and
            over 5,000,000 mobile accessories annually.
          </div>
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
              width: windowWidth < 1200 ? "90%" : "50%",
            }}
          >
            How It Works
          </div>
          <p
            style={{
              width: windowWidth < 1200 ? "90%" : "80%",
              textAlign: "center",
              marginBottom: "70px",
            }}
          >
            Sell directly to secondary market buyers via your own B2B
            marketplace. The online auction platform creates competition,
            leading to higher average sales prices for mobile devices vs. legacy
            solutions. You have full control over who is buying your inventory
            and can set buyer restrictions. Targeted marketing campaigns ensure
            the right buyers see your inventory.
          </p>
          <d.DivRight>
            <d.Left>
              <d.ImageCon>
                <img
                  src={require("../../Constants/images/phone2.png")}
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
                    What You Get
                  </span>
                </div>

                <div style={{ fontSize: "15px", marginTop: "20px" }}>
                  <li>Instant buyer demand</li>
                  <li>Auction strategy to maximize your value </li>
                  <li>The highest returns for mobile devices </li>
                  <li>
                    Consistent listing schedule and condition codes ensure happy
                    buyers
                  </li>
                  <li>Easy-to-understand buyer terms & conditions </li>
                  <li>Real data on secondary market prices</li>
                  <li>
                    On-demand data on secondary market prices by brand, model,
                    and historical depreciation values
                  </li>
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
                      marginTop: "300px",
                    }}
                  >
                    Diverse Group of Buyers
                  </span>
                </div>

                <div style={{ fontSize: "15px", marginTop: "20px" }}>
                  Have your own buyers you want to bring to Hanger Stock to make
                  your mobile resell channels more efficient? No problem. Want
                  to recruit new buyers to increase competition for your excess
                  mobile inventory? No problem, B-Stock markets and brings
                  thousands of new buyers to our sellers every month.
                </div>
              </div>
            </d.Right>
            <d.Left>
              <d.ImageCon>
                <img
                  src={require("../../Constants/images/phone3.png")}
                  style={{
                    borderRadius: "10px",
                    height: "300px",
                  }}
                />
              </d.ImageCon>
            </d.Left>
          </d.DivLeft>
          <d.DivRight>
            <d.Left>
              <d.ImageCon>
                <img
                  src={require("../../Constants/images/phone4.png")}
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
                    Data Wiping
                  </span>
                </div>

                <div style={{ fontSize: "15px", marginTop: "20px" }}>
                  Hanger Stock is committed to ensuring consumer privacy through
                  verified data wiping processes for all returned, trade-in, and
                  excess mobile inventory.
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
                      marginTop: "300px",
                    }}
                  >
                    Recycling & R2 Certification
                  </span>
                </div>

                <div style={{ fontSize: "15px", marginTop: "20px" }}>
                  Hanger Stock is committed to helping our environment and
                  reducing the amount of merchandise that makes its way to
                  landfills around the world. In 2020 we saved 125M pounds of
                  consumer electronic products, giving them a second or third
                  life with consumers. R2 Certification provides transparency
                  and reduces the risk of devices containing personally
                  identifiable information.
                </div>
              </div>
            </d.Right>
            <d.Left>
              <d.ImageCon>
                <img
                  src={require("../../Constants/images/phone5.png")}
                  style={{
                    borderRadius: "10px",
                    height: "300px",
                  }}
                />
              </d.ImageCon>
            </d.Left>
          </d.DivLeft>

          <d.DivRight>
            <d.Left>
              <d.ImageCon>
                <img
                  src={require("../../Constants/images/phone6.png")}
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
                    Mobile Digest
                  </span>
                </div>

                <div style={{ fontSize: "15px", marginTop: "20px" }}>
                  Interested in seeing historical depreciation rates by make and
                  model? Curious how average sales prices have been impacted
                  with the release of new models? Check out our Quarterly Mobile
                  Digest to learn more
                </div>
              </div>
            </d.Right>
          </d.DivRight>
        </d.DivFourInnerCon>

        <div
          style={{
            margin: "150px auto",
            height: "fit-content",
          }}
        >
          <RegFormPhone />
        </div>
      </d.DivFourCon>
    </>
  );
};

export default SellPhoneSellers;
