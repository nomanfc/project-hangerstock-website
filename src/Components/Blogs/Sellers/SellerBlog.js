import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import AllBlogs from "./AllBlogs";
import HsNews from "./BuyerEducation";
import CategoryInfo from "./GettingStarted";
import IndustryInsights from "./IndustryInsights";
import DetailsPage from "./DetailsPage";

const SellerBlog = () => {
  const navigate = useNavigate();
  var pagelink = window.location.pathname;

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
        Hanger Stock Seller Blog
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
          onClick={() => navigate("/sellerblog")}
          style={{
            marginRight: "30px",
            cursor: "pointer",
            borderBottom:
              pagelink === "/sellerblog" ? "4px solid  #599F22" : "none",
          }}
        >
          All Posts
        </span>
        {/* <span
          onClick={() => navigate("/sellerblog/hsnews")}
          style={{
            marginRight: "30px",
            cursor: "pointer",
            borderBottom:
              pagelink === "/sellerblog/hsnews" ? "4px solid #599F22" : "none",
          }}
        >
          HS News
        </span>
        <span
          onClick={() => navigate("/sellerblog/categoryinfo")}
          style={{
            marginRight: "30px",
            cursor: "pointer",
            borderBottom:
              pagelink === "/sellerblog/categoryinfo"
                ? "4px solid #599F22"
                : "none",
          }}
        >
          Category Information
        </span> */}

        {/* <span
          onClick={() =>
            navigate("/sellerblog/industryinsights")
          }
          style={{
            marginRight: "30px",
            cursor: "pointer",
            borderBottom:
              pagelink === "/sellerblog/industryinsights"
                ? "4px solid #599F22"
                : "none",
          }}
        >
          Industry Insights
        </span> */}
      </div>

      <div>
        <Routes>
          <Route path="/" element={<AllBlogs />} />
          <Route path="/hsnews" element={<HsNews />} />
          <Route path="/categoryinfo" element={<CategoryInfo />} />
          <Route path="/industryinsights" element={<IndustryInsights />} />
          <Route path="/detailpage" element={<DetailsPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default SellerBlog;
