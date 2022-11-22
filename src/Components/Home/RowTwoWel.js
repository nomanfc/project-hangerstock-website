import React, { useState, useEffect } from "react";
import * as h from "./home.styled";

const RowTwoWel = () => {
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
      <h.RowTwo>
        <h.RowTwoLeft>
          <h.R2lCon>
            <h.R2lConD1>
              <h.R2lConD1I1>
                <img
                  src={require("../../Constants/images/image 60.png")}
                  style={{
                    borderRadius: "10px",
                    maxHeight: "100%",
                    maxWidth: "100%",
                    position: "absolute",
                    right: "0px",
                  }}
                />
              </h.R2lConD1I1>
              <h.R2lConD1I2>
                <img
                  src={require("../../Constants/images/image 62.png")}
                  style={{
                    borderRadius: "10px",
                    maxHeight: "100%",
                    maxWidth: "100%",
                    position: "absolute",
                    right: "0px",
                  }}
                />
              </h.R2lConD1I2>
            </h.R2lConD1>

            <h.R2lConD2>
              <h.R2lConD2I1>
                <img
                  src={require("../../Constants/images/image 63.png")}
                  style={{
                    borderRadius: "10px",
                    maxHeight: "100%",
                    maxWidth: "100%",
                    position: "absolute",
                    left: "0px",
                  }}
                />
              </h.R2lConD2I1>
              <h.R2lConD2I2>
                <img
                  src={require("../../Constants/images/image 61.png")}
                  style={{
                    borderRadius: "10px",
                    maxHeight: "100%",
                    maxWidth: "100%",
                    position: "absolute",
                    left: "0px",
                  }}
                />
              </h.R2lConD2I2>
            </h.R2lConD2>
          </h.R2lCon>
        </h.RowTwoLeft>
        <h.RowTwoRight>
          <h.R2rCon>
            <div
              style={{
                fontSize: windowWidth < 1200 ? "20px" : "28px",
                fontWeight: 700,
                color: "#599F22",
              }}
            >
              Welcome to a better way to source fashion stock items
            </div>
            <div
              style={{
                fontSize: windowWidth < 1200 ? "20px" : "28px",
                fontWeight: 700,
                color: "#444444",
                marginTop: "40px",
              }}
            >
              {" "}
              No middleman. No markups.
            </div>
            <div
              style={{
                fontSize: windowWidth < 1200 ? "15px" : "18px",
                fontWeight: 400,
                color: "#444444",
              }}
            >
              Buy direct from Garment factory and garment manufactures. You’ll
              find great deals on brands you know.
            </div>
            <div
              style={{
                fontSize: windowWidth < 1200 ? "20px" : "28px",
                fontWeight: 700,
                color: "#444444",
                marginTop: "35px",
              }}
            >
              All lot sizes, fashion categories, and price points.
            </div>
            <div
              style={{
                fontSize: windowWidth < 1200 ? "15px" : "18px",
                fontWeight: 400,
                color: "#444444",
              }}
            >
              We have thousands of auctions open for bidding around the clock.
            </div>
            <div
              style={{
                fontSize: windowWidth < 1200 ? "20px" : "28px",
                fontWeight: 700,
                color: "#444444",
                marginTop: "35px",
              }}
            >
              Low cost
            </div>
            <div
              style={{
                fontSize: windowWidth < 1200 ? "15px" : "18px",
                fontWeight: 400,
                color: "#444444",
              }}
            >
              From detailed listings to itemized manifests, you’ll know the
              quantity, quality, and condition of the inventory. Bid and buy
              with confidence.
            </div>
            <div
              style={{
                fontSize: windowWidth < 1200 ? "20px" : "28px",
                fontWeight: 700,
                color: "#444444",
                marginTop: "35px",
              }}
            >
              Customer Support!
            </div>
            <div
              style={{
                fontSize: windowWidth < 1200 ? "15px" : "18px",
                fontWeight: 400,
                color: "#444444",
              }}
            >
              Customer service team help you grow your business.
            </div>
          </h.R2rCon>
        </h.RowTwoRight>
      </h.RowTwo>
    </>
  );
};

export default RowTwoWel;
