import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import moment from "moment";
import Pagination from "@mui/material/Pagination";
import { get_shipping_blog } from "../../HTTP_REQUESTS/api_";

const Shipping = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentAuctions = blog?.slice(indexOfFirstPage, indexOfLastPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const fetchData = useCallback(async () => {
    const res = await get_shipping_blog();
    setBlog(res.data.data);
  }, []);

  useEffect(() => {
    fetchData().catch(console.error);
  }, [fetchData]);

  const gotoDetails = (data) => (e) => {
    navigate("/shippingdetails", { state: data });
  };

  return (
    <div>
      <div
        style={{
          background: "#599F22",
          color: "#FFFFFF",
          textAlign: "center",
          fontSize: "40px",
          fontWeight: 700,
          padding: "25px",
        }}
      >
        Hanger Stock Shipping Information
      </div>
      <div
        style={{
          height: "fit-content",
          display: "flex",
          justifyContent: " center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {currentAuctions?.length > 0 ? (
          currentAuctions?.map((data, index) => (
            <div
              key={index}
              style={{
                width: "360px",
                height: "450px",
                margin: "50px 20px",
                borderRadius: "10px 10px 0px 0px",
                borderBottom: "3px solid #C4C4C4",
              }}
            >
              <img
                src={
                  data && data.file_key
                    ? `https://main.hangerstock.com/api/auction/media/file/${data.file_key}`
                    : null
                }
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
                {moment(`${data?.created_at}`).format("ll")} . HangerStock
                Editorial Team
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
                    {data?.description}
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
          ))
        ) : (
          <div
            style={{
              color: "black",
              textAlign: "center",
              width: "100%",
              marginTop: "50px",
              fontSize: "20px",
              fontWeight: 600,
              color: "gray",
            }}
          >
            no post found
          </div>
        )}
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          margin: "20px auto 50px auto",
        }}
      >
        <Pagination
          count={Math.ceil(blog?.length / postPerPage)}
          variant="outlined"
          onChange={handlePageChange}
          showFirstButton
          showLastButton
          shape="rounded"
          style={{ margin: "auto" }}
        />
      </div>
    </div>
  );
};

export default Shipping;
