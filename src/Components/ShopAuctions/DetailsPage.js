import React, { useState, useEffect, useCallback } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ReactImageMagnify from "react-image-magnify";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StarIcon from "@mui/icons-material/Star";
import GavelIcon from "@mui/icons-material/Gavel";
import LoginIcon from "@mui/icons-material/Login";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import LogoutIcon from "@mui/icons-material/Logout";
import Modal from "@mui/material/Modal";
import Accordion from "react-bootstrap/Accordion";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IoArrowBackSharp } from "react-icons/io5";
import {
  get_auction_details_by_aid,
  post_bid,
  get_settings,
  add_favt,
  get_favt_status_by_uid_aid,
  get_all_bids_by_aid,
  remove_favt,
} from "../../HTTP_REQUESTS/api_";

import TableManifest from "./Manifest Table/tableManifest";
import { useUserContext } from "../../Context/UserContext";

import "./style.css";

function hangerstockCommision(amount, commision) {
  return parseInt(amount) * (parseInt(commision) / parseInt(100));
}

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

//modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  height: "fit-content",
  border: "none",
  bgcolor: "background.paper",
  boxShadow: `rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px`,
  p: 4,
};

const styleD = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY: "scroll",
};

const AuctionDetail = (props) => {
  const { user, logout } = useUserContext();
  const location = useLocation();
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [details, setDetails] = useState();
  const [bid_data, setBidData] = useState({
    user_id: user?.id,
    auction_id: location.state.data.id,
  });
  const [settings, setSettings] = useState();
  const [load, setLoad] = useState(100000);
  const [allBids, setAllBids] = useState();
  const [openD, setOpenD] = React.useState(false);
  const handleCloseD = () => setOpenD(false);

  const handleModalData = () => {
    setOpenD(true);
    get_all_bids_by_aid(location.state.data.id).then((res) => {
      setAllBids(res.data.data);
    });
  };

  const [check, setCheck] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
    setCheck({
      ...check,
      auction_id: location.state.data.id,
      user_id: user?.id,
    });

    if (check?.user_id && check?.auction_id) {
    }
  }, [user]);

  const [bidSuccessMsg, setBidSuccessMsg] = useState(false);
  const [bidButton, setBidButton] = useState(false);
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(location.state.data.default_image);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //get auctions details
  const fetchData = useCallback(async () => {
    const data = await get_auction_details_by_aid(location.state.data.id);
    setDetails(data.data.data);

    const dataSettings = await get_settings();
    setSettings(dataSettings.data.data);
  }, []);

  useEffect(() => {
    setBidData({ ...bid_data, user_id: user?.id });
  }, [user]);

  useEffect(() => {
    get_favt_status_by_uid_aid(check).then((res) => {
      setStatus(res.data.is_favorite);
    });
  }, [check, load]);

  const fetchDataStatus = useCallback(async () => {
    const data = await get_auction_details_by_aid(location.state.data.id);
    setDetails(data.data.data);

    const dataSettings = await get_settings();
    setSettings(dataSettings.data.data);
  }, []);

  useEffect(() => {
    fetchData().catch(console.error);
  }, [fetchData, bid_data]);

  const handleBidChange = (e) => {
    setBidData({ ...bid_data, [e.target.name]: e.target.value });

    if (
      details?.product_details?.bid_ends_in_second !== null &&
      details?.product_details?.bid_ends_in_second > 0
    ) {
      if (details?.bidder_details.length) {
        if (
          e.target.value >=
          parseInt(details?.product_details?.max_bid) +
            parseInt(settings?.bid_interval)
        ) {
          fetchData();
          setBidButton(true);
        }

        if (
          e.target.value <
          parseInt(details?.product_details?.max_bid) +
            parseInt(settings?.bid_interval)
        ) {
          fetchData();
          setBidButton(false);
        }
      }

      if (!details?.bidder_details.length) {
        if (
          e.target.value >= parseInt(details?.bid_details?.opening_bid_amount)
        ) {
          fetchData();
          setBidButton(true);
        }

        if (
          e.target.value < parseInt(details?.bid_details?.opening_bid_amount)
        ) {
          fetchData();
          setBidButton(false);
        }
      }
    }
  };

  const handleBidSubmit = () => {
    if (user === null) {
      window.alert("Please login to post bid");
      setTimeout(() => {
        navigate("/buyerlogin");
      }, 500);
    }

    if (user && user.token) {
      post_bid(bid_data).then((res) => {
        if (res.data.success === 1) {
          setBidSuccessMsg(true);
          fetchData();
          setBidButton(false);
          setTimeout(() => {
            setBidSuccessMsg(false);
            fetchData();
          }, 2000);
        }
      });
    }
  };

  const handleImageChange = (data) => () => {
    setImage(data.data.file_key);
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    function reportWindowSize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", reportWindowSize);
    return () => window.removeEventListener("resize", reportWindowSize);
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetchData();
  //   }, 1000);
  // });

  const handleAddFavourite = (e) => {
    add_favt(check).then((res) => {
      if (res) {
        setLoad(load - 1);
      }
    });
  };

  const handleRemove = (e) => {
    // remove_favt()
  };

  return (
    <>
      <Modal
        open={openD}
        onClose={handleCloseD}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleD}>
          <div
            style={{
              borderBottom: "1px solid  	#DCDCDC",
              paddingBottom: "10px",
              width: "100%",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                height: "40px",
                display: "flex",
                alignItems: "center",
                width: "30%",
                fontSize: "14px",
                fontWeight: "600",
                justifyContent: "space-between",
              }}
            >
              <div style={{ margin: "auto" }}> Bid Amount</div>
            </div>

            <div
              style={{
                height: "40px",
                display: "flex",
                alignItems: "center",
                width: "30%",
                fontSize: "14px",
                fontWeight: "600",
                justifyContent: "space-between",
              }}
            >
              <div style={{ margin: "auto" }}>Posted At</div>
            </div>
          </div>

          {allBids?.map((data, index) => (
            <div
              key={index}
              style={{
                paddingBottom: "10px",
                width: "100%",
                height: "40px",
                display: "flex",
                marginTop: "25px",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                  fontSize: "14px",

                  justifyContent: "space-between",
                }}
              >
                <div style={{ margin: "auto" }}>{data?.bid_amount}</div>
              </div>

              <div
                style={{
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                  fontSize: "14px",

                  justifyContent: "space-between",
                }}
              >
                <div style={{ margin: "auto" }}>
                  {moment(data?.created_at)?.format("LL")}
                </div>
              </div>
            </div>
          ))}
        </Box>
      </Modal>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
            src={`https://main.hangerstock.com/api/auction/media/file/${image}`}
            onClick={handleOpen}
            style={{
              height: "400px",
              width: "100%",
              objectFit: "fill",
              cursor: "pointer",
            }}
          />
        </Box>
      </Modal>

      <div style={{ marginBottom: "150px", fontWeight: 700 }}>
        <div
          style={{
            width: windowWidth < 1200 ? "85%" : "80%",
            margin: "80px auto 150px auto",
            height: "fit-content",
          }}
        >
          <div
            style={{
              height: "20px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                right: 0,
                display: "flex",
                alignItems: "center",
              }}
            >
              {user === null ? (
                <div
                  style={{ marginRight: "20px", cursor: "pointer" }}
                  onClick={() => navigate("/buyerlogin")}
                >
                  {" "}
                  <LoginIcon style={{ color: "#599f22" }} />
                  <span style={{ color: "#599f22", fontWeight: 400 }}>
                    {" "}
                    Login
                  </span>
                </div>
              ) : (
                <div
                  style={{ marginRight: "20px", cursor: "pointer" }}
                  onClick={() => logout()}
                >
                  {" "}
                  <LogoutIcon style={{ color: "#599f22" }} />
                  <span style={{ color: "#599f22", fontWeight: 400 }}>
                    {" "}
                    Logout
                  </span>
                </div>
              )}

              <div
                style={{ marginRight: "0px", cursor: "pointer" }}
                onClick={() =>
                  (window.location.href = "https://app.hangerstock.com/")
                }
              >
                {" "}
                <span
                  style={{
                    color: "#599f22",
                    fontWeight: 400,
                    marginRight: "5px",
                  }}
                >
                  {" "}
                  Buyer Panel
                </span>
                <ArrowCircleRightIcon style={{ color: "#599f22" }} />
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{ marginBottom: "25px", cursor: "pointer" }}
              onClick={() => navigate(-1)}
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
              fontWeight: 600,
              fontSize: "25px",
              borderBottom: "0.5px solid #D3D3D3",
              paddingBottom: "15px",
              color: "#636363",
            }}
          >
            {" "}
            {location.state.data.title}
          </div>

          <div
            style={{
              display: user === null ? "block" : "none",
              margin: "20px 0px",
              padding: "10px 20px",
              background: "rgba(	89,159,34,0.2)",
            }}
          >
            <a href="/buyerlogin" style={{}}>
              Log in or apply
            </a>{" "}
            <span style={{ color: "#808080" }}>
              {" "}
              to see full auction details and to bid
            </span>
          </div>

          <div
            style={{
              height: "fit-content",
              display: "flex",
              justifyContent: "space-between",
              margin: "20px 0px",
              flexDirection: windowWidth < 1200 ? "column" : "row",
            }}
          >
            <div
              style={{
                height: "100%",
                width: windowWidth < 1200 ? "100%" : "40%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div style={{ width: "100%" }}>
                {windowWidth < 1200 ? (
                  <img
                    src={
                      image && image !== undefined && image !== null
                        ? `https://main.hangerstock.com/api/auction/media/file/${image}`
                        : "https://www.caspianpolicy.org/no-image.png"
                    }
                    onClick={handleOpen}
                    style={{
                      height: "400px",
                      width: "100%",
                      objectFit: "fill",
                      cursor: "pointer",
                    }}
                  />
                ) : (
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "",
                        // isFluidWidth: true,
                        src:
                          image && image !== undefined && image !== null
                            ? `https://main.hangerstock.com/api/auction/media/file/${image}`
                            : "https://www.caspianpolicy.org/no-image.png",
                        width: 450,
                        height: 350,
                      },

                      largeImage: {
                        alt: "",
                        src:
                          image && image !== undefined && image !== null
                            ? `https://main.hangerstock.com/api/auction/media/file/${image}`
                            : "https://www.caspianpolicy.org/no-image.png",
                        width: 1000,
                        height: 1000,
                      },
                    }}
                  />
                )}
              </div>

              <div
                style={{
                  margin: "20px auto 10px 0px",
                  padding: "5px 5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {user === null ? (
                  <div
                    onClick={handleImageChange}
                    style={{
                      border: "1px solid #F5F5F5",
                      height: "70px",
                      width: "70px",
                      margin: "10px",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "fill",
                        padding: "4px",
                        boxShadow: `rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px`,
                      }}
                      className="d-block w-100"
                      src={`https://main.hangerstock.com/api/auction/media/file/${location.state.data.default_image}`}
                      alt="First slide"
                    />
                  </div>
                ) : (
                  details?.media_files?.map((data, index) => (
                    <div
                      key={index}
                      onClick={handleImageChange({ data })}
                      style={{
                        border: "1px solid #F5F5F5",
                        height: "70px",
                        width: "70px",
                        margin: "10px",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "fill",
                          padding: "4px",
                          boxShadow: `rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px`,
                        }}
                        className="d-block w-100"
                        src={
                          data &&
                          data.file_key !== null &&
                          data.file_key !== undefined
                            ? `https://main.hangerstock.com/api/auction/media/file/${data.file_key}`
                            : `https://www.caspianpolicy.org/no-image.png`
                        }
                      />
                    </div>
                  ))
                )}
              </div>
            </div>

            <div
              style={{
                height: "fit-content",
                width: windowWidth < 1200 ? "100%" : "45%",
                display: "flex",
                alignItems: "center",
                color: "#808080",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "fit-content",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    padding: "10px 0px",
                    width: "100%",
                    marginBottom: "15px",
                    display: "flex",
                    alignItems: "center",
                    color: "#599f22",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      color: "black",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      navigate("/sellerauctions", { state: details })
                    }
                  >
                    <AccountCircleIcon style={{ color: "#599f22" }} />
                    <span style={{ marginLeft: "5px", color: "#599f22" }}>
                      View all auctions from this seller
                    </span>
                  </div>

                  {user === null || status === 1 ? null : (
                    <div>
                      {user?.id === details?.product_details?.user_id ? (
                        <div style={{ color: "orange" }}>
                          You owned this auction
                        </div>
                      ) : status ? (
                        <div
                          style={{
                            fontSize: "14px",
                            color: "black",
                            fontWeight: 600,
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                            display: "none",
                          }}
                          onClick={handleRemove}
                        >
                          <FavoriteBorderIcon style={{ color: "#599f22" }} />
                          <span style={{ marginLeft: "5px", color: "#599f22" }}>
                            Remove from favourite
                          </span>
                        </div>
                      ) : (
                        <div
                          style={{
                            fontSize: "14px",
                            color: "black",
                            fontWeight: 600,
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                          }}
                          onClick={handleAddFavourite}
                        >
                          <FavoriteIcon style={{ color: "#599f22" }} />
                          <span style={{ marginLeft: "5px", color: "#599f22" }}>
                            Add to favourite
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div
                  style={{
                    padding: "10px 20px",
                    width: "100%",
                    marginBottom: "15px",
                    display: "flex",
                    alignItems: "center",
                    background: "#BDD9A7",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      color: "black",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <LocalShippingIcon style={{ color: "#808080" }} />
                    <span style={{ marginLeft: "5px", color: "#808080" }}>
                      {details?.product_details?.quantity + " " + "Units"}
                    </span>
                  </div>

                  <div
                    style={{
                      fontSize: "12px",
                      color: "black",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <GavelIcon style={{ color: "#808080" }} />
                    <span style={{ marginLeft: "5px", color: "#808080" }}>
                      {details?.product_details?.bid_count + " " + "Bids"}
                    </span>
                  </div>

                  <div
                    style={{
                      fontSize: "12px",
                      color: "black",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <StarIcon style={{ color: "#808080" }} />
                    <span style={{ marginLeft: "5px", color: "#808080" }}>
                      {details?.product_details?.product_condition}
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "fit-content",
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "50%",
                    }}
                  >
                    Current Bid
                  </div>

                  <div
                    style={{
                      width: "50%",
                      fontWeight: "600",
                      color: "#444444",
                    }}
                  >
                    {details?.bidder_details.length
                      ? parseInt(
                          details?.product_details?.max_bid
                        ).toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })
                      : parseInt(
                          details?.bid_details?.opening_bid_amount
                        ).toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}

                    <span
                      style={{
                        fontSize: "15px",
                        color: "#599f22",
                        marginLeft: "15px",
                        cursor: "pointer",
                      }}
                      onClick={handleModalData}
                    >
                      {"(view all bids)"}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    width: "100%",
                    height: "140px",
                    display: "flex",
                    alignItems: "center",
                    display:
                      details?.product_details?.user_id === user?.id
                        ? "none"
                        : "flex",
                    marginBottom: windowWidth < 1200 ? "100px" : "10px",
                  }}
                >
                  <div
                    style={{
                      width: "50%",
                      height: "100%",
                      display: "flex",
                    }}
                  >
                    Your Maximum Bid
                  </div>

                  <div
                    style={{
                      width: "50%",
                      height: "140px",
                    }}
                  >
                    <div style={{ marginBottom: "15px" }}>
                      {" "}
                      <input
                        type="number"
                        name="bid_amount"
                        min="0"
                        placeholder={
                          details?.bidder_details.length
                            ? (
                                parseInt(details?.product_details?.max_bid) +
                                parseInt(49)
                              ).toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                              }) + "+" || ""
                            : parseInt(
                                details?.bid_details?.opening_bid_amount
                              ).toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                              }) + "+" || ""
                        }
                        onChange={handleBidChange}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div style={{ marginBottom: "5px" }}>
                      Enter{" "}
                      <span style={{ fontWeight: 600, color: "#444444" }}>
                        {" "}
                        {details?.bidder_details.length
                          ? (
                              parseInt(details?.product_details?.max_bid) +
                              parseInt(settings?.bid_interval)
                            ).toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })
                          : parseInt(
                              details?.bid_details?.opening_bid_amount
                            ).toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}
                      </span>{" "}
                      or more in whole USD dollars
                    </div>
                    <Button
                      disabled={bidButton ? false : true}
                      onClick={handleBidSubmit}
                      style={{
                        padding: "5px 10px",
                        background: "#599f22",
                        color: "#FFFFFF",
                        opacity: bidButton ? 1 : 0.6,
                      }}
                    >
                      BID NOW
                    </Button>
                  </div>
                </div>

                <div
                  style={{
                    width: "100%",
                    height: "fit-content",
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "50%",
                    }}
                  >
                    Additional Charges
                  </div>

                  <div
                    style={{
                      width: "50%",
                    }}
                  >
                    <span style={{ fontWeight: "600", color: "#444444" }}>
                      +
                      {details?.bidder_details.length
                        ? parseInt(
                            hangerstockCommision(
                              details?.product_details?.max_bid,
                              settings?.bid_commission_percentage
                            )
                          ).toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })
                        : parseInt(
                            hangerstockCommision(
                              details?.bid_details?.opening_bid_amount,
                              settings?.bid_commission_percentage
                            )
                          ).toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}{" "}
                    </span>{" "}
                    <span>Hanger Stock Fee</span>
                  </div>
                </div>

                <div
                  style={{
                    width: "100%",
                    height: "fit-content",
                    alignItems: "center",
                    marginBottom: "10px",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: "50%",
                    }}
                  ></div>

                  <div
                    style={{
                      width: "50%",
                    }}
                  >
                    <span style={{ fontWeight: "600", color: "#444444" }}>
                      + ${(details?.shipping_details?.shipping_cost)}{" "}
                    </span>{" "}
                    <span>Shipping cost</span>
                  </div>
                </div>

                <div
                  style={{
                    width: "100%",
                    height: "fit-content",
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "50%",
                      display: details?.bidder_details.length
                        ? "block"
                        : "none",
                    }}
                  >
                    Avg. Cost Per Unit
                  </div>

                  <div
                    style={{
                      width: "50%",
                      fontWeight: "600",
                      color: "#444444",
                      display: details?.bidder_details.length
                        ? "block"
                        : "none",
                    }}
                  >
                    {(
                      details?.product_details?.max_bid /
                      details?.product_details?.quantity
                    ).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </div>
                </div>

                <div
                  style={{
                    width: "100%",
                    height: "fit-content",
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "50%",
                    }}
                  >
                    Closes in
                  </div>

                  <div
                    style={{
                      width: "50%",
                      color: "#444444",
                      fontWeight: "600",
                    }}
                  >
                    {details?.product_details?.bid_ends_in_second !== null &&
                    details?.product_details?.bid_ends_in_second > 0 ? (
                      secondsToHms(details?.product_details?.bid_ends_in_second)
                    ) : (
                      <span style={{ color: "orange" }}>Closed</span>
                    )}
                  </div>
                </div>

                <div
                  style={{
                    width: "100%",
                    height: "fit-content",
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "50%",
                    }}
                  >
                    Close Date
                  </div>

                  <div
                    style={{
                      width: "50%",
                    }}
                  >
                    {details !== undefined &&
                    details?.product_details?.bid_ends_in_second !== null &&
                    details?.product_details?.bid_ends_in_second > 0 ? (
                      moment(details?.bid_details?.closed_at).format("LLLL")
                    ) : (
                      <span>-----</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "35px",
              display: user === null ? "none" : "block",
            }}
          >
            <Accordion defaultActiveKey="0" style={{ marginTop: "15px" }}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Manifest</Accordion.Header>
                <Accordion.Body>
                  <TableManifest dataTable={location.state.data.id} />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="0" style={{ marginTop: "15px" }}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Product Info</Accordion.Header>
                <Accordion.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      width: "98%",
                      marginTop: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontSize: "14px",
                      fontFamily: "Nunito Sans",

                      margin: "15px auto auto auto",
                    }}
                  >
                    <div
                      style={{
                        width: windowWidth < 1200 ? "45%" : "20%",
                        textAlign: "right",
                      }}
                    >
                      Category
                    </div>
                    :
                    <div
                      style={{
                        width: windowWidth < 1200 ? "45%" : "70%",
                        fontWeight: 400,
                      }}
                    >
                      {details?.product_details?.category}
                    </div>
                  </div>

                  <div
                    style={{
                      width: "98%",
                      marginTop: "20px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "15px auto auto auto",
                      fontSize: "14px",
                      fontFamily: "Nunito Sans",
                    }}
                  >
                    <div
                      style={{
                        width: windowWidth < 1200 ? "45%" : "20%",
                        textAlign: "right",
                      }}
                    >
                      Cosmetic condtion
                    </div>
                    :
                    <div
                      style={{
                        width: windowWidth < 1200 ? "45%" : "70%",
                        fontWeight: 400,
                      }}
                    >
                      {details?.product_details?.cosmetic_condition}
                    </div>
                  </div>

                  <div
                    style={{
                      width: "98%",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "15px auto auto auto",
                      fontSize: "14px",
                      fontFamily: "Nunito Sans",
                    }}
                  >
                    <div
                      style={{
                        width: windowWidth < 1200 ? "45%" : "20%",
                        textAlign: "right",
                      }}
                    >
                      Product condition
                    </div>
                    :
                    <div
                      style={{
                        width: windowWidth < 1200 ? "45%" : "70%",
                        fontWeight: 400,
                      }}
                    >
                      {details?.product_details?.product_condition}
                    </div>
                  </div>

                  <div
                    style={{
                      width: "98%",
                      marginTop: "20px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "15px auto auto auto",
                      fontSize: "14px",
                      fontFamily: "Nunito Sans",
                    }}
                  >
                    <div
                      style={{
                        width: windowWidth < 1200 ? "45%" : "20%",
                        textAlign: "right",
                      }}
                    >
                      Inventory type
                    </div>
                    :
                    <div
                      style={{
                        width: windowWidth < 1200 ? "45%" : "70%",
                        fontWeight: 400,
                      }}
                    >
                      {details?.product_details?.inventory_type}
                    </div>
                  </div>

                  <div
                    style={{
                      width: "98%",
                      marginTop: "20px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "15px auto auto auto",
                      fontSize: "14px",
                      fontFamily: "Nunito Sans",
                    }}
                  >
                    <div
                      style={{
                        width: windowWidth < 1200 ? "45%" : "20%",
                        textAlign: "right",
                      }}
                    >
                      Quantity
                    </div>
                    :
                    <div
                      style={{
                        width: windowWidth < 1200 ? "45%" : "70%",
                        fontWeight: 400,
                      }}
                    >
                      {details?.product_details?.quantity}
                    </div>
                  </div>
                  <div
                    style={{
                      width: "98%",
                      marginTop: "20px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "15px auto auto auto",
                      fontSize: "14px",
                      fontFamily: "Nunito Sans",
                    }}
                  >
                    <div
                      style={{
                        width: windowWidth < 1200 ? "45%" : "20%",
                        textAlign: "right",
                      }}
                    >
                      Packing details
                    </div>
                    :
                    <div
                      style={{
                        width: windowWidth < 1200 ? "45%" : "70%",
                        fontWeight: 400,
                      }}
                    >
                      {details?.product_details?.packaging_details}
                    </div>
                  </div>
                  <div
                    style={{
                      width: "98%",
                      marginTop: "20px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "15px auto auto auto",
                      fontSize: "14px",
                      fontFamily: "Nunito Sans",
                    }}
                  >
                    <div
                      style={{
                        width: windowWidth < 1200 ? "45%" : "20%",
                        textAlign: "right",
                      }}
                    >
                      Original Reatail Price
                    </div>
                    :
                    <div
                      style={{
                        width: windowWidth < 1200 ? "45%" : "70%",
                        fontWeight: 400,
                      }}
                    >
                      {details?.product_details?.original_retail_price}
                    </div>
                  </div>
                  <div
                    style={{
                      width: "98%",
                      marginTop: "20px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "15px auto auto auto",
                      fontSize: "14px",
                      fontFamily: "Nunito Sans",
                    }}
                  >
                    <div
                      style={{
                        width: windowWidth < 1200 ? "45%" : "20%",
                        textAlign: "right",
                      }}
                    >
                      Description
                    </div>
                    :
                    <div
                      style={{
                        width: windowWidth < 1200 ? "45%" : "70%",
                        fontWeight: 400,
                      }}
                    >
                      {details?.product_details?.description}
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="0" style={{ marginTop: "15px" }}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Shipping Info</Accordion.Header>
                <Accordion.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      width: "98%",
                      marginTop: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontSize: "14px",
                      fontFamily: "Nunito Sans",

                      margin: "15px auto auto auto",
                    }}
                  >
                    <div
                      style={{
                        width: windowWidth < 1200 ? "45%" : "20%",
                        textAlign: "right",
                      }}
                    >
                      Shipping Type
                    </div>
                    :
                    <div
                      style={{
                        width: windowWidth < 1200 ? "45%" : "70%",
                        fontWeight: 400,
                      }}
                    >
                      {details?.shipping_details?.shipping_type}
                    </div>
                  </div>

                  <div
                    style={{
                      width: "98%",
                      marginTop: "20px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "15px auto auto auto",
                      fontSize: "14px",
                      fontFamily: "Nunito Sans",
                    }}
                  >
                    <div
                      style={{
                        width: windowWidth < 1200 ? "45%" : "20%",
                        textAlign: "right",
                      }}
                    >
                      Shipping Cost
                    </div>
                    :
                    <div
                      style={{
                        width: windowWidth < 1200 ? "45%" : "70%",
                        fontWeight: 400,
                      }}
                    >
                      {details?.shipping_details?.shipping_cost}
                    </div>
                  </div>

                  <div
                    style={{
                      width: "98%",
                      marginTop: "20px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "15px auto auto auto",
                      fontSize: "14px",
                      fontFamily: "Nunito Sans",
                    }}
                  >
                    <div
                      style={{
                        width: windowWidth < 1200 ? "45%" : "20%",
                        textAlign: "right",
                      }}
                    >
                      Ship From
                    </div>
                    :
                    <div
                      style={{
                        width: windowWidth < 1200 ? "45%" : "70%",
                        fontWeight: 400,
                      }}
                    >
                      {details?.shipping_details?.ship_from}
                    </div>
                  </div>

                  <div
                    style={{
                      width: "98%",
                      marginTop: "20px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "15px auto auto auto",
                      fontSize: "14px",
                      fontFamily: "Nunito Sans",
                    }}
                  >
                    <div
                      style={{
                        width: windowWidth < 1200 ? "45%" : "20%",
                        textAlign: "right",
                      }}
                    >
                      Ship To
                    </div>
                    :
                    <div
                      style={{
                        width: windowWidth < 1200 ? "45%" : "70%",
                        fontWeight: 400,
                      }}
                    >
                      {details?.shipping_details?.ship_to}
                    </div>
                  </div>

                  <div
                    style={{
                      width: "98%",
                      marginTop: "20px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "15px auto auto auto",
                      fontSize: "14px",
                      fontFamily: "Nunito Sans",
                    }}
                  >
                    <div
                      style={{
                        width: windowWidth < 1200 ? "45%" : "20%",
                        textAlign: "right",
                      }}
                    >
                      Freight Type
                    </div>
                    :
                    <div
                      style={{
                        width: windowWidth < 1200 ? "45%" : "70%",
                        fontWeight: 400,
                      }}
                    >
                      {details?.shipping_details?.freight_name}
                    </div>
                  </div>
                  <div
                    style={{
                      width: "98%",
                      marginTop: "20px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "15px auto auto auto",
                      fontSize: "14px",
                      fontFamily: "Nunito Sans",
                    }}
                  >
                    <div
                      style={{
                        width: windowWidth < 1200 ? "45%" : "20%",
                        textAlign: "right",
                      }}
                    >
                      Shipping Notes
                    </div>
                    :
                    <div
                      style={{
                        width: windowWidth < 1200 ? "45%" : "70%",
                        fontWeight: 400,
                      }}
                    >
                      {details?.shipping_details?.shipping_note}
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuctionDetail;
