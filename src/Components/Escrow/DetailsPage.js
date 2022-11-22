import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";

const DetailsPage = () => {
  const { state } = useLocation();
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
    <div style={{ marginTop: "70px", marginBottom: "200px" }}>
      <div
        style={{
          width: windowWidth < 1200 ? "95%" : "60%",
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{ marginBottom: "25px", cursor: "pointer" }}
            onClick={() => navigate( "/shipping")}
          >
            <IoArrowBackSharp
              style={{
                color: "#599f22",
                fontSize: "25px",
              }}
            />
          </div>
        </div>
        <div
          style={{
            fontSize: "25px",
            fontWeight: 600,
            color: "#444444",
          }}
        >
          {state?.data.title}
        </div>

        <div
          style={{
            fontSize: "14px",
            fontWeight: 600,
            color: "#599F22",
            margin: "15px 0px",
          }}
        >
          {state?.data.date + " " + "-" + " Hanger Stock Editorial Team"}
        </div>

        <div
          style={{
            fontSize: "14px",
            fontWeight: 600,
            color: "#599F22",
            margin: "15px 0px",

            height: "400px",
            borderRadius: "10px",
          }}
        >
          <img
            src={require(`${state?.data.image}`)}
            style={{ width: "100%", height: "100%", borderRadius: "10px" }}
          />
        </div>

        <div
          style={{
            fontSize: "14px",
            fontWeight: 400,
            color: "#444444",
            margin: "35px 0px",
          }}
        >
          <p>{state?.data.details}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
