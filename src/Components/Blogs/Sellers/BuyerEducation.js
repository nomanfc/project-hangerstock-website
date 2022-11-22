import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

import img from "../../../Constants/images/phone1.png";

const BuyerEducation = () => {
  const navigate = useNavigate();

  const gotoDetails = (data) => (e) => {
    navigate("/sellerblog/detailpage", { state: data });
  };
  const tips = [
    {
      image: img,
      date: "22 JUNE 2021",
      min: "5",
      title: "New Shipping Size Available on Amazon EU",
      details:
        "Lorem ipsum dummy text for an article description.  These should be short, yet informative.",
      link: "",
    },
  ];

  return (
    <div>
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
              {data?.date} . {data?.min} AMIN READ
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
                <ArrowCircleRightOutlinedIcon
                  onClick={gotoDetails({ data })}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyerEducation;
