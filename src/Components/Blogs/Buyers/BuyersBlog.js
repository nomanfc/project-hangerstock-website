import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import AllBlogs from "./AllBlogs";
import BuyerEducation from "./BuyerEducation";
import GettingStarted from "./GettingStarted";
import DetailsPage from "./DetailsPage";

const BuyersBlog = () => {
  const navigate = useNavigate();
  var pagelink = window.location.pathname;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function reportWindowSize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", reportWindowSize);
    return () => window.removeEventListener("resize", reportWindowSize);
  }, []);


  return (
    <div style={{ marginBottom: "150px" }}>
      <div
        style={{
          background: "#599F22",
          color: "#FFFFFF",
          textAlign: "center",
          fontSize: windowWidth < 1200 ? "30px" : "40px",
          fontWeight: 700,
          padding: "25px",
        }}
      >
        Hanger Stock Buyer Blog
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: windowWidth < 700 ? "12px" : "18px",
          padding: "25px",
          display: "flex",
          fontWeight: 600,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span
          onClick={() => navigate("/buyersblog")}
          style={{
            marginRight: "30px",
            cursor: "pointer",
            borderBottom:
              pagelink === "/buyersblog" ? "4px solid  #599F22" : "none",
          }}
        >
          All Posts
        </span>
        {/* <span
          onClick={() => navigate("/buyersblog/buyereducation")}
          style={{
            marginRight: "30px",
            cursor: "pointer",
            borderBottom:
              pagelink === "/buyersblog/buyereducation"
                ? "4px solid #599F22"
                : "none",
          }}
        >
          Buyer Education
        </span> */}
        <span
          onClick={() => navigate("/buyersblog/gettingstarted")}
          style={{
            marginRight: "30px",
            cursor: "pointer",
            borderBottom:
              pagelink === "/buyersblog/gettingstarted"
                ? "4px solid #599F22"
                : "none",
          }}
        >
          Getting Started
        </span>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<AllBlogs />} />
          <Route path="/buyereducation" element={<BuyerEducation />} />
          <Route path="/gettingstarted" element={<GettingStarted />} />
          <Route path="/detailpage" element={<DetailsPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default BuyersBlog;
