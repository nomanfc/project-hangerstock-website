import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as d from "./Buyer.styled";

import { ReactComponent as RightArrow } from "../../Constants/Svgs/Vector.svg";

const DivFour = () => {
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
      <d.DivFourCon style={{ margin: "80px auto 180px auto" }}>
        <div style={{ width: "80%", margin: "80px auto" }}>
          <div
            style={{
              fontSize: windowWidth < 1200 ? "30px" : "45px",
              fontWeight: 700,
              color: "#599F22",
              textAlign: "center",
            }}
          >
            Here’s How Hanger Stock Works
          </div>
          <div
            style={{
              fontSize: "15px",
              fontWeight: "600",
              color: "#444444",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            BUYING FROM OUR LIQUIDATION MARKETPLACES
          </div>
        </div>

        <d.DivFourInnerCon>
          <d.DivRight>
            <d.Left>
              <d.ImageCon>
                <img
                  src={require("../../Constants/Svgs/image 20.png")}
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
                    Register
                  </span>
                </div>

                <div style={{ fontSize: "15px", marginTop: "20px" }}>
                  See one or more marketplaces you like? Apply to bid on that
                  marketplace - be sure to have your resale certificate handy!
                </div>

                <div
                  style={{
                    display: "flex",
                    marginTop: "20px",
                    alignItems: "center",
                  }}
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
                    onClick={() =>
                      navigate( "/registrationbuyer")
                    }
                  >
                    REGISTER HERE
                  </span>
                  <span>
                    <RightArrow style={{ cursor: "pointer" }} />
                  </span>
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
                    Get Approved
                  </span>
                </div>

                <div style={{ fontSize: "15px", marginTop: "20px" }}>
                  We'll notify you as soon as your marketplace registration is
                  approved. From there, you'll be up and running.
                </div>
              </div>
            </d.Right>
            <d.Left>
              <d.ImageCon>
                <img
                  src={require("../../Constants/Svgs/step2.png")}
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
                  src={require("../../Constants/Svgs/step3.png")}
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
                    Browse
                  </span>
                </div>

                <div style={{ fontSize: "15px", marginTop: "20px" }}>
                  View live auctions from top retailers and brands, across
                  dozens of categories, conditions, and price points.
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

          <d.DivLeft>
            <d.Right style={{ marginLeft: "auto" }}>
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
                    STEP 4
                  </span>
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#599F22",
                      fontWeight: 700,
                    }}
                  >
                    Begin Bidding
                  </span>
                </div>

                <div style={{ fontSize: "15px", marginTop: "20px" }}>
                  See an auction you like? Submit your price! Our proxy bidding
                  system will automatically bid on your behalf.
                </div>
              </div>
            </d.Right>
            <d.Left style={{}}>
              <d.ImageCon>
                <img
                  src={require("../../Constants/Svgs/step4.png")}
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
                  src={require("../../Constants/Svgs/step5.png")}
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
                    STEP 5
                  </span>
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#599F22",
                      fontWeight: 700,
                    }}
                  >
                    Win
                  </span>
                </div>

                <div style={{ fontSize: "15px", marginTop: "20px" }}>
                  We’ll show you the available shipping options to get your
                  goods
                </div>
              </div>
            </d.Right>
          </d.DivRight>
        </d.DivFourInnerCon>
      </d.DivFourCon>
    </>
  );
};

export default DivFour;
