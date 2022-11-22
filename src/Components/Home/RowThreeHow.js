import React, { useState, useEffect } from "react";
import * as h from "./home.styled";

const RowThreeHow = () => {
  const [con1, setCon1] = useState(false);
  const [con2, setCon2] = useState(false);
  const [con3, setCon3] = useState(false);
  const [con4, setCon4] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function reportWindowSize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", reportWindowSize);
    return () => window.removeEventListener("resize", reportWindowSize);
  }, []);

  const container1 = {
    width: "100%",
    height: "fit-content",
    padding: windowWidth < 1200 ? "14px 14px" : "14px 30px",
    borderRadius: "12px",
    marginTop: "20px",

    background: con1 ? "#599F22" : "#FFFFFF",
  };

  const container2 = {
    width: "100%",
    height: "fit-content",
    padding: windowWidth < 1200 ? "14px 14px" : "14px 30px",
    borderRadius: "12px",
    marginTop: "20px",

    background: con2 ? "#599F22" : "#FFFFFF",
  };

  const container3 = {
    width: "100%",
    height: "fit-content",
    padding: windowWidth < 1200 ? "14px 14px" : "14px 30px",
    borderRadius: "12px",
    marginTop: "20px",
    background: con3 ? "#599F22" : "#FFFFFF",
  };

  const container4 = {
    width: "100%",
    height: "fit-content",
    padding: windowWidth < 1200 ? "14px 14px" : "14px 30px",
    borderRadius: "12px",
    marginTop: "20px",
    background: con4 ? "#599F22" : "#FFFFFF",
  };

  const header1 = {
    fontSize: windowWidth < 1200 ? "20px" : "28px",
    fontStyle: "normal",
    fontWeight: "700",
    color: con1 ? "#FFFFFF" : "#444444",
  };

  const header2 = {
    fontSize: windowWidth < 1200 ? "20px" : "28px",
    fontStyle: "normal",
    fontWeight: "700",
    color: con2 ? "#FFFFFF" : "#444444",
  };

  const header3 = {
    fontSize: windowWidth < 1200 ? "20px" : "28px",
    fontStyle: "normal",
    fontWeight: "700",
    color: con3 ? "#FFFFFF" : "#444444",
  };

  const header4 = {
    fontSize: windowWidth < 1200 ? "20px" : "28px",
    fontStyle: "normal",
    fontWeight: "700",
    color: con4 ? "#FFFFFF" : "#444444",
  };

  const paragrapgh1 = {
    fontSize: windowWidth < 1200 ? "14px" : "16px",
    fontStyle: "normal",
    fontWeight: "400",
    color: con1 ? "#FFFFFF" : "#444444",
    paddingLeft: "60px",
  };

  const paragrapgh2 = {
    fontSize: windowWidth < 1200 ? "14px" : "16px",
    fontStyle: "normal",
    fontWeight: "400",
    color: con2 ? "#FFFFFF" : "#444444",
    paddingLeft: "60px",
  };

  const paragrapgh3 = {
    fontSize: windowWidth < 1200 ? "14px" : "16px",
    fontStyle: "normal",
    fontWeight: "400",
    color: con3 ? "#FFFFFF" : "#444444",
    paddingLeft: "60px",
  };

  const paragrapgh4 = {
    fontSize: windowWidth < 1200 ? "14px" : "16px",
    fontStyle: "normal",
    fontWeight: "400",
    color: con4 ? "#FFFFFF" : "#444444",
    paddingLeft: "60px",
  };
  return (
    <>
      <h.RowThree>
        <h.RowThreeCon>
          <h.RowThreeLeft>
            <h.R3lCon>
              <div
                style={{
                  fontSize: windowWidth < 1200 ? "30px" : "45px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  color: "#599F22",
                  padding: "12px 25px",
                  textAlign: windowWidth < 1200 ? "center" : "left",
                }}
              >
                How it work
              </div>

              <div
                style={container1}
                onMouseOver={() => setCon1(true)}
                onMouseOut={() => setCon1(false)}
              >
                <div style={header1}>
                  <span style={{ marginRight: "25px" }}>01</span>Register
                </div>
                <div style={paragrapgh1}>
                  See one or more marketplaces you like? Apply to bid on that
                  marketplace
                </div>
              </div>

              <div
                style={container2}
                onMouseOver={() => setCon2(true)}
                onMouseOut={() => setCon2(false)}
              >
                <div style={header2}>
                  <span style={{ marginRight: "25px" }}>02</span>Get Approved
                </div>
                <div style={paragrapgh2}>
                  Once we receive your application and you are approved, your
                  account will be up and running.
                </div>
              </div>

              <div
                style={container3}
                onMouseOver={() => setCon3(true)}
                onMouseOut={() => setCon3(false)}
              >
                <div style={header3}>
                  <span style={{ marginRight: "25px" }}>03</span>Begin Bidding
                </div>
                <div style={paragrapgh3}>
                  Start sourcing from top retailers, across dozens of categories
                </div>
              </div>

              <div
                style={container4}
                onMouseOver={() => setCon4(true)}
                onMouseOut={() => setCon4(false)}
              >
                <div style={header4}>
                  <span style={{ marginRight: "25px" }}>04</span>Win
                </div>
                <div style={paragrapgh4}>
                  We’ll show you the available payment and shipping options to
                  get your goods
                </div>
              </div>
            </h.R3lCon>
          </h.RowThreeLeft>
          <h.RowThreeRight>
            <h.R3rCon>
              <img
                src={require("../../Constants/images/image 64.png")}
                style={{
                  borderRadius: "10px",
                  maxHeight: "100%",
                  maxWidth: "100%",
                }}
              />
            </h.R3rCon>
          </h.RowThreeRight>
        </h.RowThreeCon>
      </h.RowThree>
    </>
  );
};

export default RowThreeHow;
