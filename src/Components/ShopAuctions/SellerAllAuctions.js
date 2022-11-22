import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { IoArrowBackSharp } from "react-icons/io5";
import { VscArrowRight } from "react-icons/vsc";
import * as s from "./ShopAuc.styled";

import { get_submitted_auctions_by_user_id } from "../../HTTP_REQUESTS/api_";

function secondsToHms(d) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  var hDisplay = h > 0 ? h + (h == 1 ? "h " : "h ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? "m " : "m ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? "s" : "s") : "";
  return hDisplay + " " + mDisplay;
}

const SellerAllAuctions = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let [sellerAuction, setSellerAuction] = useState();

  const fetchData = useCallback(async () => {
    const data = await get_submitted_auctions_by_user_id(
      location?.state?.product_details?.user_id
    );
    setSellerAuction(data.data.data);
  }, []);


  console.log(sellerAuction)

  useEffect(() => {
    fetchData().catch(console.error);
  }, [fetchData]);

  const handleDetails = (data) => (e) => {
    navigate("/auctiondetails", { state: data });
  };

  return (
    <div style={{ width: "90%", margin: "40px auto 100px auto" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ marginBottom: "25px", cursor: "pointer" }}>
          <IoArrowBackSharp
            onClick={() => navigate(-1)}
            style={{
              color: "#599f22",
              fontSize: "25px",
            }}
          />
        </div>
      </div>
      <div
        style={{
          fontWeight: 600,
          fontSize: "25px",
          borderBottom: "0.5px solid #D3D3D3",
          paddingBottom: "15px",
          color: "#599f22",
        }}
      >
        {" "}
        All Auctions From This Seller
      </div>
      <div
        style={{
          width: "100%",
          height: "fit-content",
          marginTop: "40px",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {sellerAuction?.map((data, index) => (
          <s.CardCon key={index}>
            <Card
              onClick={handleDetails({ data })}
              style={{
                width: "100%",
                borderRadius: "10px",
                height: "100%",
              }}
            >
              <Card.Img
                variant="top"
                style={{
                  borderBottom: "1px solid rgba(196, 196, 196, 0.48)",
                  margin: "auto",
                  padding: "5px",
                  height: "fit-content",
                  width: "130px",
                  objectFit: "fill",
                }}
                src={require("../../Constants/Svgs/ad484750-8a64-43cc-8b27-13c1efc2b9f6.jpeg")}
              />
              <img
                variant="top"
                style={{
                  borderBottom: "1px solid rgba(196, 196, 196, 0.48)",
                  margin: "auto",
                  width: "100%",
                  height: "150px",
                  objectFit: "fill",
                }}
                src={
                  data && data.default_image
                    ? `https://main.hangerstock.com/api/auction/media/file/${data.default_image}`
                    : `https://www.caspianpolicy.org/no-image.png`
                }
              />
              <Card.Body>
                <Card.Text
                  style={{
                    fontSize: "13px",
                    height: "20px",
                    width: "100%",
                    overflow: "hidden",
                    fontWeight: 700,
                  }}
                >
                  {data?.title}
                </Card.Text>
                <Card.Text
                  style={{
                    fontSize: "13px",
                    height: "78px",
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  {data?.description}
                </Card.Text>
                {/* <Card.Text style={{ marginTop: "10px", fontSize: "13px" }}>
                  <span style={{ fontWeight: 700 }}>Bids: </span>{" "}
                  <span>{data?.bid_count}</span>
                </Card.Text> */}

                <Card.Text style={{ fontSize: "13px" }}>
                  <span style={{ fontWeight: 700 }}>Closes in :</span>{" "}
                  {data?.bid_ends_in_second !== null &&
                  data?.bid_ends_in_second > 0 ? (
                    secondsToHms(data?.bid_ends_in_second)
                  ) : (
                    <span style={{ color: "red" }}>Closed</span>
                  )}
                </Card.Text>
                <div style={{ width: "100%", position: "relative" }}>
                  <VscArrowRight
                    style={{
                      width: "fit-content",
                      color: "#599f22",
                      fontSize: "20px",
                      fontWeight: 700,
                      position: "absolute",
                      right: 0,
                      cursor: "pointer",
                    }}
                  />
                </div>
              </Card.Body>
            </Card>
          </s.CardCon>
        ))}
      </div>
    </div>
  );
};

export default SellerAllAuctions;
