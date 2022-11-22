import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as h from "./ShopAuc.styled";
import Button from "@mui/material/Button";

import RelatedCat from "./RelatedCat";
import GetStartedAsBuyer from "./GetStartedAsBuyer";
import SelectRegion from "./SelectRegion";
import SelectCat from "./SelectCat";
import SelectMarket from "./SelectMarket";

import img1 from "../../Constants/images/Ellipse 5.png"
import img2 from "../../Constants/images/Ellipse 4.png"
import img3 from "../../Constants/images/Ellipse 6.png"
import img4 from "../../Constants/images/Ellipse 7.png"
import img5 from "../../Constants/images/Ellipse 8.png"
import img6 from "../../Constants/images/Ellipse 9.png"

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

const ShopAucLading = () => {
  const navigate = useNavigate();
  const [isRegiTrue, setIsRegiTrue] = useState(false);
  const [isCatTrue, setIsCatTrue] = useState(false);
  const [isMarketTrue, setIsMarketTrue] = useState(false);

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

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleRegi = (e) => {
    setIsRegiTrue(true);
    setIsCatTrue(false);
    setIsMarketTrue(false);
  };

  const handleCat = (e) => {
    setIsRegiTrue(false);
    setIsCatTrue(true);
    setIsMarketTrue(false);
  };

  const handleMarket = (e) => {
    setIsRegiTrue(false);
    setIsCatTrue(false);
    setIsMarketTrue(true);
  };
  return (
    <>
      <h.RowOne style={{ padding: windowWidth < 1200 ? "50px 0px" : "0px" }}>
        <h.RowCon>
          <h.RowOneLeft>
            <h.RlCon>
              <p
                style={{ color: "#FFFFFF", fontSize: "16px", fontWeight: 400 }}
              >
                ONLINE AUCTIONS FOR LIQUIDATION, RETURNS, AND OVERSTOCK
              </p>
              <h1
                style={{
                  color: "#FFFFFF",

                  fontSize: windowWidth < 1200 ? "30px" : "40px",
                  fontWeight: 700,
                }}
              >
                Shop for inventory from the world’s top retailers,
                manufacturers, and private sellers.
              </h1>
              <p style={{ color: "#FFFFFF" }}>
                Source smart with accurate manifests and convenient shipping
                locations to fulfill your inventory needh. Browse by auctions
                closing now, newly listed or auctions by major brandh.
              </p>

              <div style={{ marginTop: "35px" }}>
                <Button
                  style={buttonGetStyle}
                  onClick={() => navigate( "/allauctions")}
                >
                  Browse All Auctions
                </Button>

                <Button
                  style={buttonLearnStyle}
                  onClick={() => navigate( "/marketplace")}
                  sx={{ marginLeft: "15px", border: "1px solid #FFFFFF" }}
                >
                  Marketplaces
                </Button>
              </div>
            </h.RlCon>
          </h.RowOneLeft>
          <h.RowOneRight>
            <h.RrCon>
              <h.RrConD1>
                <h.RrConD1I1>
                  <img
                    src={img1}
                    style={{
                      borderRadius: "50%",
                      height: "150px",
                      width: "150px",
                      boxShadow: "0px 0px 15px rgba(229, 251, 213, 0.85)",
                    }}
                  />
                </h.RrConD1I1>
                <h.RrConD1I2>
                  <img
                    src={img2}
                    style={{
                      borderRadius: "50%",
                      height: "100px",
                      width: "100px",
                      boxShadow: "0px 0px 15px rgba(229, 251, 213, 0.85)",
                    }}
                  />
                </h.RrConD1I2>
              </h.RrConD1>
              <h.RrConD2>
                <h.RrConD2I1>
                  <img
                    src={img3}
                    style={{
                      borderRadius: "50%",
                      height: "180px",
                      width: "180px",
                      boxShadow: "0px 0px 15px rgba(229, 251, 213, 0.85)",
                    }}
                  />
                </h.RrConD2I1>
                <h.RrConD2I2>
                  <img
                    src={img4}
                    style={{
                      borderRadius: "50%",
                      height: "200px",
                      width: "200px",
                      boxShadow: "0px 0px 15px rgba(229, 251, 213, 0.85)",
                    }}
                  />
                </h.RrConD2I2>
              </h.RrConD2>
              <h.RrConD3>
                <h.RrConD3I1>
                  {" "}
                  <img
                    src={img5}
                    style={{
                      borderRadius: "50%",
                      height: "150px",
                      width: "150px",
                      boxShadow: "0px 0px 15px rgba(229, 251, 213, 0.85)",
                    }}
                  />
                </h.RrConD3I1>
                <h.RrConD3I2>
                  {" "}
                  <img
                    src={img6}
                    style={{
                      borderRadius: "50%",
                      height: "120px",
                      width: "120px",
                      boxShadow: "0px 0px 15px rgba(229, 251, 213, 0.85)",
                    }}
                  />
                </h.RrConD3I2>
              </h.RrConD3>
            </h.RrCon>
          </h.RowOneRight>
        </h.RowCon>
      </h.RowOne>
      <div style={{ width: "80%", margin: "50px auto" }}>
        <RelatedCat />
      </div>
      <div style={{ width: "80%", margin: "100px auto" }}>
        <GetStartedAsBuyer />
      </div>
    </>
  );
};

export default ShopAucLading;
