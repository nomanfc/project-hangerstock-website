import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import LoginIcon from "@mui/icons-material/Login";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Form from "react-bootstrap/Form";
import LogoutIcon from "@mui/icons-material/Logout";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Card from "react-bootstrap/Card";
import { VscArrowRight } from "react-icons/vsc";
import { Accordion } from "react-bootstrap";
import { HiOutlineChevronRight } from "react-icons/hi";

import SelectRegion from "./SelectRegion";
import SelectCat from "./SelectCat";
import SelectMarket from "./SelectMarket";
import * as s from "./ShopAuc.styled";
import { useUserContext } from "../../Context/UserContext";

//components
import RelatedCat from "./RelatedCat";
import OtherMarkets from "./OtherMarketPlaces";
import GetStartedAsBuyer from "./GetStartedAsBuyer";

import { IMAGE_URL, BASE_URL } from "../../Constants/constant";
import {
  get_all_auctions,
  get_images_by_key,
  get_all_conditions,
  get_all_shipments,
  get_all_categories,
  filter_by_category,
  filter_by_freight,
  filter_by_condition,
} from "../../HTTP_REQUESTS/api_";

//logo
import Logo from "../../Constants/Svgs/ad484750-8a64-43cc-8b27-13c1efc2b9f6.jpeg";

//dummy data
// const auctions = [
//   {
//     logo: "../../Constants/images/image 65.png",
//     image: "../../Constants/images/image 62.png",
//     details: `          573 Cases (Est. 6 Pallets) of 16 oz Hand Sanitizer, 6,876
//               Units, Brand New, Ext. ... 573 Cases (Est. 6 Pallets) of
//               16 oz Hand Sanitizer, 6,876 Units, Brand New, Ext. ... 573
//               Cases (Est. 6 Pallets) of 16 oz Hand Sanitizer, 6,876
//               Units, Brand New, Ext. ... 573 Cases (Est. 6 Pallets) of
//               16 oz Hand Sanitizer, 6,876 Units, Brand New, Ext. ...`,
//     bids: "10",
//     closein: "6h 2min",
//   },
// ];

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

const styleAc = {
  fontSize: "14px",
  color: "#444444",
  border: "none",
  marginBottom: "10px",
  borderBottom: "1px solid rgba(227, 227, 227, 0.75)",
};

const headerSty = { fontSize: "16px", fontWeight: 700 };

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "90vh",
  overflowY: "scroll",
  padding: "30px 30px",
  bgcolor: "background.paper",
  p: 4,
};

function removeNull(array) {
  return array.filter((x) => x !== null);
}

const Shopauction = () => {
  const { user, logout } = useUserContext();
  const navigate = useNavigate();
  const [isRegiTrue, setIsRegiTrue] = useState(false);
  const [isCatTrue, setIsCatTrue] = useState(false);
  const [isMarketTrue, setIsMarketTrue] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [conditions, setConditions] = useState();
  const [shipments, setShipments] = useState();
  const [categories, setCategories] = useState();

  const [auctions, setAuction] = useState([]);
  const [auctionCount, setAuctionCount] = useState();
  const [imageLink, setImageLink] = useState();

  const getUrl = async (dataImg) => {
    let url = await get_images_by_key(dataImg).then((res) => {
      return res.data;
    });

    return url;
  };

  useEffect(() => {
    get_all_conditions().then((res) => {
      setConditions(res.data.data);
    });

    get_all_shipments().then((res) => {
      setShipments(res.data.data);
    });

    get_all_categories().then((res) => {
      setCategories(res.data.data);
    });
  }, []);

  //states
  const [USS, setUSS] = useState();
  const [CSS, setCSS] = useState();
  const [ESS, setESS] = useState();
  const [ASS, setASS] = useState();
  const [UKS, setUKS] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(15);

  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentAuctions = auctions?.slice(indexOfFirstPage, indexOfLastPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  //get all auctions
  const fetchData = useCallback(async () => {
    const data = await get_all_auctions();
    setAuction(removeNull(data.data.data));
    setAuctionCount(data.data.total_auction);
  }, []);

  useEffect(() => {
    fetchData().catch(console.error);
  }, [fetchData]);

  useEffect(() => {
    function reportWindowSize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", reportWindowSize);
    return () => window.removeEventListener("resize", reportWindowSize);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 3000);
  }, []);

  //modal
  const [openUs, setOpenUs] = React.useState(false);
  const handleOpenUs = () => setOpenUs(true);
  const handleCloseUs = () => setOpenUs(false);

  const [openCan, setOpenCan] = React.useState(false);
  const handleOpenCan = () => setOpenCan(true);
  const handleCloseCan = () => setOpenCan(false);

  const [openEu, setOpenEu] = React.useState(false);
  const handleOpenEu = () => setOpenEu(true);
  const handleCloseEu = () => setOpenEu(false);

  const [openAs, setOpenAs] = React.useState(false);
  const handleOpenAs = () => setOpenAs(true);
  const handleCloseAs = () => setOpenAs(false);

  const [openUk, setOpenUk] = React.useState(false);
  const handleOpenUk = () => setOpenUk(true);
  const handleCloseUk = () => setOpenUk(false);

  const [checkedUsa, setCheckedUsa] = React.useState(false);
  const [checkedCan, setCheckedCan] = React.useState(false);
  const [checkedEu, setCheckedEu] = React.useState(false);
  const [checkedAsi, setCheckedAsi] = React.useState(false);
  const [checkedUk, setCheckedUk] = React.useState(false);

  const handleChangeUsa = (event) => {
    setCheckedUsa(event.target.checked);
  };

  const handleChangeCan = (event) => {
    setCheckedCan(event.target.checked);
  };

  const handleChangeEu = (event) => {
    setCheckedEu(event.target.checked);
  };

  const handleChangeAsi = (event) => {
    setCheckedAsi(event.target.checked);
  };

  const handleChangeUk = (event) => {
    setCheckedUk(event.target.checked);
  };

  const [conBn, setConBn] = useState(false);

  const handleChangeBn = (event) => {
    setConBn(event.target.checked);
  };

  const [ltl, setLtl] = useState(false);
  const [tload, setTload] = useState(false);

  const handleChangeLtl = (event) => {
    setLtl(event.target.checked);
  };

  const [con, setCon] = useState();
  const [ft, setFt] = useState();
  const [cat, setCat] = useState(false);

  const [conData, setConData] = useState();
  const [ftData, setFtData] = useState();
  const [catData, setCatData] = useState();

  const [appl, setAppl] = useState();
  const [access, setAccess] = useState();
  const [foot, setFoot] = useState();

  const handleChangeAppl = (e) => {
    setAppl(e.target.value);
  };

  const handleChangeAccess = (e) => {
    setAccess(e.target.value);
  };

  const handleChangeFoot = (e) => {
    setFoot(e.target.value);
  };

  const handleChangeCon = (data) => (e) => {
    setFt(e.target.checked);

    if (e.target.checked === true) {
      filter_by_condition(data.data.id).then((res) => {
        setAuction(res.data.data);
        setAuctionCount(res.data.total_auction);
      });
    }
    if (e.target.checked === false) {
      fetchData();
    }
  };

  const handleChangeFt = (data, index) => (e) => {
    setFt(e.target.checked);

    if (e.target.checked === true) {
      filter_by_freight(data.data.id).then((res) => {
        setAuction(res.data.data);
        setAuctionCount(res.data.total_auction);
      });
    }
    if (e.target.checked === false) {
      fetchData();
    }
  };

  const handleChangeCat = (data, index) => (e) => {
    setCat(e.target.checked);

    if (e.target.checked === true) {
      filter_by_category(data.data.id).then((res) => {
        setAuction(res.data.data);
        setAuctionCount(res.data.total_auction);
      });
    }
    if (e.target.checked === false) {
      fetchData();
    }
  };

  useEffect(() => {}, [catData]);

  const [market1, setMarket1] = useState(false);
  const [market2, setMarket2] = useState(false);
  const [market3, setMarket3] = useState(false);

  const handleChangeMark1 = (event) => {
    setMarket1(event.target.checked);
  };
  const handleChangeMark2 = (event) => {
    setMarket2(event.target.checked);
  };
  const handleChangeMark3 = (event) => {
    setMarket3(event.target.checked);
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

  const handleDetails = (data) => (e) => {
    navigate("/auctiondetails", { state: data });
  };

  //uss
  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://main.hangerstock.com/api/state/by/country/1")
        .then((response1) => {
          setUSS(response1.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, []);

  //Css
  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://main.hangerstock.com/api/state/by/country/2")
        .then((response1) => {
          setCSS(response1.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, []);

  //Ess
  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://main.hangerstock.com/api/country/by/region/3")
        .then((response1) => {
          setESS(response1.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, []);

  //ass
  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://main.hangerstock.com/api/country/by/region/4")
        .then((response1) => {
          setASS(response1.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, []);

  //ukss
  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://main.hangerstock.com/api/state/by/country/5")
        .then((response1) => {
          setUKS(response1.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, []);

  return (
    <>
      <Modal
        open={openUs}
        onClose={handleCloseUs}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Filter By US states
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginBottom: "20px",
                justifyContent: "space-between",
              }}
            >
              {USS?.map((data, index) => (
                <FormGroup key={index} style={{ width: "250px" }}>
                  <FormControlLabel control={<Checkbox />} label={data?.name} />
                </FormGroup>
              ))}
            </div>
          </Typography>
        </Box>
      </Modal>

      <Modal
        open={openCan}
        onClose={handleCloseCan}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Filter By Canada states
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginBottom: "20px",
                justifyContent: "space-between",
              }}
            >
              {CSS?.map((data, index) => (
                <FormGroup key={index} style={{ width: "250px" }}>
                  <FormControlLabel control={<Checkbox />} label={data?.name} />
                </FormGroup>
              ))}
            </div>
          </Typography>
        </Box>
      </Modal>

      <Modal
        open={openEu}
        onClose={handleCloseEu}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Filter By Europe Countries
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginBottom: "20px",
                justifyContent: "space-between",
              }}
            >
              {ESS?.map((data, index) => (
                <FormGroup key={index} style={{ width: "250px" }}>
                  <FormControlLabel control={<Checkbox />} label={data?.name} />
                </FormGroup>
              ))}
            </div>
          </Typography>
        </Box>
      </Modal>

      <Modal
        open={openAs}
        onClose={handleCloseAs}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Filter By Asian countries
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginBottom: "20px",
                justifyContent: "space-between",
              }}
            >
              {ASS?.map((data, index) => (
                <FormGroup key={index} style={{ width: "250px" }}>
                  <FormControlLabel control={<Checkbox />} label={data?.name} />
                </FormGroup>
              ))}
            </div>
          </Typography>
        </Box>
      </Modal>

      <Modal
        open={openUk}
        onClose={handleCloseUk}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Filter By UK states
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginBottom: "20px",
                justifyContent: "space-between",
              }}
            >
              {UKS?.map((data, index) => (
                <FormGroup key={index} style={{ width: "250px" }}>
                  <FormControlLabel control={<Checkbox />} label={data?.name} />
                </FormGroup>
              ))}
            </div>
          </Typography>
        </Box>
      </Modal>

      <s.MainCon style={{ width: windowWidth < 1200 ? "85%" : "80%" }}>
        <s.FilterCon>
          <s.FilterInnerCon
            style={{
              height: windowWidth < 700 ? "150px" : "50px",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "90%",
                height: "100%",
                justifyContent: windowWidth < 700 ? "space-around" : "center",
                alignItems: "center",
                flexDirection: windowWidth < 700 ? "column" : "row",
              }}
            >
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  width: "fit-content",
                  color: "rgba(0, 0, 0, 0.6)",
                  marginRight: "30px",
                }}
              >
                Shop by:
              </div>
              <div
                onMouseOver={handleRegi}
                onMouseOut={() => setIsRegiTrue(false)}
              >
                <SelectRegion />

                <div
                  style={{
                    display: isRegiTrue ? "flex" : "none",
                    height: "fit-content",
                    width: "fit-content",
                    position: "absolute",
                    background: "#FFFFFF",
                    zIndex: "1000",
                    borderRadius: "10px",
                    alignItems: "center",
                    justifyContent: "space-around",

                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
                  }}
                >
                  <div
                    style={{
                      height: "fit-content",
                      width: "fit-content",
                      padding: "15px 20px",
                      margin: "20px 20px",
                      cursor: "pointer",

                      borderRadius: "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "14px",
                        marginBottom: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <span style={{ fontSize: "14px", fontWeight: 600 }}>
                        {" "}
                        <Checkbox
                          checked={checkedUsa}
                          onChange={handleChangeUsa}
                        />
                      </span>
                      <span
                        style={{ fontSize: "14px", fontWeight: 600 }}
                        onClick={handleOpenUs}
                      >
                        United States
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "14px",
                        marginBottom: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <span style={{ fontSize: "14px", fontWeight: 600 }}>
                        {" "}
                        <Checkbox
                          checked={checkedCan}
                          onChange={handleChangeCan}
                        />
                      </span>
                      <span
                        style={{ fontSize: "14px", fontWeight: 600 }}
                        onClick={handleOpenCan}
                      >
                        Canada
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "14px",
                        marginBottom: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <span style={{ fontSize: "14px", fontWeight: 600 }}>
                        {" "}
                        <Checkbox
                          checked={checkedEu}
                          onChange={handleChangeEu}
                        />
                      </span>
                      <span
                        style={{ fontSize: "14px", fontWeight: 600 }}
                        onClick={handleOpenEu}
                      >
                        Europe
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "14px",
                        marginBottom: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <span style={{ fontSize: "14px", fontWeight: 600 }}>
                        {" "}
                        <Checkbox
                          checked={checkedAsi}
                          onChange={handleChangeAsi}
                        />
                      </span>
                      <span
                        style={{ fontSize: "14px", fontWeight: 600 }}
                        onClick={handleOpenAs}
                      >
                        Asia
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "14px",
                        marginBottom: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <span style={{ fontSize: "14px", fontWeight: 600 }}>
                        {" "}
                        <Checkbox
                          checked={checkedUk}
                          onChange={handleChangeUk}
                        />
                      </span>
                      <span
                        style={{ fontSize: "14px", fontWeight: 600 }}
                        onClick={handleOpenUk}
                      >
                        UK
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                onMouseOver={handleCat}
                onMouseOut={() => setIsCatTrue(false)}
              >
                <SelectCat />

                <div
                  style={{
                    display: isCatTrue ? "flex" : "none",
                    height: "fit-content",
                    width: "fit-content",
                    position: "absolute",
                    background: "#FFFFFF",
                    zIndex: "1000",
                    borderRadius: "10px",
                    alignItems: "center",
                    justifyContent: "space-around",

                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
                  }}
                >
                  <div
                    style={{
                      height: "fit-content",
                      width: "fit-content",
                      padding: "15px 20px",
                      margin: "20px 20px",
                      cursor: "pointer",

                      borderRadius: "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "14px",
                        marginBottom: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <span style={{ fontSize: "14px", fontWeight: 600 }}>
                        {" "}
                        <Checkbox checked={appl} onChange={handleChangeAppl} />
                      </span>
                      <span
                        style={{ fontSize: "14px", fontWeight: 600 }}
                        // onClick={handleOpenUs}
                      >
                        Apparel
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "14px",
                        marginBottom: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <span style={{ fontSize: "14px", fontWeight: 600 }}>
                        {" "}
                        <Checkbox checked={foot} onChange={handleChangeFoot} />
                      </span>
                      <span
                        style={{ fontSize: "14px", fontWeight: 600 }}
                        // onClick={handleOpenCan}
                      >
                        Footwear
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "14px",
                        marginBottom: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <span style={{ fontSize: "14px", fontWeight: 600 }}>
                        {" "}
                        <Checkbox
                          checked={access}
                          onChange={handleChangeAccess}
                        />
                      </span>
                      <span
                        style={{ fontSize: "14px", fontWeight: 600 }}
                        // onClick={handleOpenEu}
                      >
                        Accessories
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                onMouseOver={handleMarket}
                onMouseOut={() => setIsMarketTrue(false)}
              >
                <SelectMarket />

                <div
                  style={{
                    display: isMarketTrue ? "flex" : "none",
                    height: "fit-content",
                    width: "fit-content",
                    position: "absolute",
                    background: "#FFFFFF",
                    zIndex: "1000",
                    borderRadius: "10px",
                    alignItems: "center",
                    justifyContent: "space-around",
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
                  }}
                >
                  <div
                    style={{
                      height: "fit-content",
                      width: "fit-content",
                      padding: "15px 20px",
                      margin: "20px 20px",
                      cursor: "pointer",

                      borderRadius: "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "14px",
                        marginBottom: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <span style={{ fontSize: "14px", fontWeight: 600 }}>
                        {" "}
                        <Checkbox
                          checked={market1}
                          onChange={handleChangeMark1}
                        />
                      </span>
                      <span
                        style={{ fontSize: "14px", fontWeight: 600 }}
                        // onClick={handleOpenUs}
                      >
                        Market1
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "14px",
                        marginBottom: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <span style={{ fontSize: "14px", fontWeight: 600 }}>
                        {" "}
                        <Checkbox
                          checked={market2}
                          onChange={handleChangeMark2}
                        />
                      </span>
                      <span
                        style={{ fontSize: "14px", fontWeight: 600 }}
                        // onClick={handleOpenCan}
                      >
                        Market2
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "14px",
                        marginBottom: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <span style={{ fontSize: "14px", fontWeight: 600 }}>
                        {" "}
                        <Checkbox
                          checked={market3}
                          onChange={handleChangeMark3}
                        />
                      </span>
                      <span
                        style={{ fontSize: "14px", fontWeight: 600 }}
                        // onClick={handleOpenEu}
                      >
                        Market3
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </s.FilterInnerCon>

          <div
            style={{
              height: "20px",
              width: "100%",
              margin: "20px auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                margin: "auto",
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
        </s.FilterCon>

        <s.InnerCon>
          <s.InnerConLeft
            style={{ display: window.innerWidth < 1200 ? "none" : "flex" }}
          >
            <div
              style={{
                color: "#6B6A6A",
                fontSize: "14px",
                fontStyle: "regular",
                marginTop: "10px",
                paddingLeft: "20px",
              }}
            >{`Home > all auctions`}</div>

            <div
              style={{
                fontSize: "16px",
                fontWeight: 700,
                marginTop: "30px",
                color: "#599f22",
                paddingLeft: "20px",
              }}
            >
              <div style={{ color: "#599f22" }}>Filter By</div>
              <div
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  color: "#599f22",
                }}
              ></div>
            </div>
            <Accordion>
              <Accordion.Item eventKey="0" style={styleAc}>
                <Accordion.Header>
                  <span style={headerSty}>Regions</span>
                </Accordion.Header>
                <Accordion.Body>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "14px",
                      marginBottom: "5px",
                      cursor: "pointer",
                    }}
                  >
                    <HiOutlineChevronRight
                      style={{ marginRight: "5px", fontSize: "18px" }}
                    />

                    <span style={{ fontSize: "14px", fontWeight: 600 }}>
                      {" "}
                      <Checkbox
                        checked={checkedUsa}
                        onChange={handleChangeUsa}
                      />
                    </span>
                    <span
                      style={{ fontSize: "14px", fontWeight: 600 }}
                      onClick={handleOpenUs}
                    >
                      United States
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "14px",
                      marginBottom: "5px",
                      cursor: "pointer",
                    }}
                  >
                    <HiOutlineChevronRight
                      style={{ marginRight: "5px", fontSize: "18px" }}
                    />

                    <span style={{ fontSize: "14px", fontWeight: 600 }}>
                      {" "}
                      <Checkbox
                        checked={checkedCan}
                        onChange={handleChangeCan}
                      />
                    </span>
                    <span
                      style={{ fontSize: "14px", fontWeight: 600 }}
                      onClick={handleOpenCan}
                    >
                      Canada
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "14px",
                      marginBottom: "5px",
                      cursor: "pointer",
                    }}
                  >
                    <HiOutlineChevronRight
                      style={{ marginRight: "5px", fontSize: "18px" }}
                    />

                    <span style={{ fontSize: "14px", fontWeight: 600 }}>
                      {" "}
                      <Checkbox checked={checkedEu} onChange={handleChangeEu} />
                    </span>
                    <span
                      style={{ fontSize: "14px", fontWeight: 600 }}
                      onClick={handleOpenEu}
                    >
                      Europe
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "14px",
                      marginBottom: "5px",
                      cursor: "pointer",
                    }}
                  >
                    <HiOutlineChevronRight
                      style={{ marginRight: "5px", fontSize: "18px" }}
                    />

                    <span style={{ fontSize: "14px", fontWeight: 600 }}>
                      {" "}
                      <Checkbox
                        checked={checkedAsi}
                        onChange={handleChangeAsi}
                      />
                    </span>
                    <span
                      style={{ fontSize: "14px", fontWeight: 600 }}
                      onClick={handleOpenAs}
                    >
                      Asia
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "14px",
                      marginBottom: "5px",
                      cursor: "pointer",
                    }}
                  >
                    <HiOutlineChevronRight
                      style={{ marginRight: "5px", fontSize: "18px" }}
                    />

                    <span style={{ fontSize: "14px", fontWeight: 600 }}>
                      {" "}
                      <Checkbox checked={checkedUk} onChange={handleChangeUk} />
                    </span>
                    <span
                      style={{ fontSize: "14px", fontWeight: 600 }}
                      onClick={handleOpenUk}
                    >
                      UK
                    </span>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1" style={styleAc}>
                <Accordion.Header>
                  <span style={headerSty}>Condition</span>
                </Accordion.Header>
                <Accordion.Body>
                  {conditions?.map((data, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "14px",
                        marginBottom: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <span style={{ fontSize: "14px", fontWeight: 600 }}>
                        {" "}
                        <Checkbox
                          value={data?.id}
                          onChange={handleChangeCon({ data, index })}
                          inputProps={{ "aria-label": "controlled" }}
                        />
                      </span>
                      <span
                        style={{ fontSize: "14px", fontWeight: 600 }}
                        // onClick={handleOpenUk}
                      >
                        {data?.condition_name}
                      </span>
                    </div>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" style={styleAc}>
                <Accordion.Header>
                  <span style={headerSty}>Freight Type</span>
                </Accordion.Header>
                <Accordion.Body>
                  {shipments?.map((data, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "14px",
                        marginBottom: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <span style={{ fontSize: "14px", fontWeight: 600 }}>
                        {" "}
                        <Checkbox
                          value={data?.id}
                          onChange={handleChangeFt({ data, index })}
                          inputProps={{ "aria-label": "controlled" }}
                        />
                      </span>
                      <span
                        style={{ fontSize: "14px", fontWeight: 600 }}
                        // onClick={handleOpenUk}
                      >
                        {data?.freight_name}
                      </span>
                    </div>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" style={styleAc}>
                <Accordion.Header>
                  <span style={headerSty}>Categories</span>
                </Accordion.Header>
                <Accordion.Body>
                  {categories?.map((data, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "14px",
                        marginBottom: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <span style={{ fontSize: "14px", fontWeight: 600 }}>
                        {" "}
                        <Checkbox
                          value={data?.id}
                          onChange={handleChangeCat({ data, index })}
                          inputProps={{ "aria-label": "controlled" }}
                        />
                      </span>
                      <span
                        style={{ fontSize: "14px", fontWeight: 600 }}
                        // onClick={handleOpenUs}
                      >
                        {data?.category_name}
                      </span>
                    </div>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </s.InnerConLeft>
          <s.InnerConRight>
            <div
              style={{ fontSize: "20px", fontWeight: 600, color: "#599F22" }}
            >
              Search auctions via the largest network of B2B liquidation
              marketplaces.
            </div>
            <div
              style={{
                marginTop: "15px",
                fontSize: "16px",
                fontWeight: 400,
                color: "#444444",
              }}
            >
              With Hanger Stock you can buy inventory directly from top
              retailers and brands through their official liquidation
              marketplaces. You’ll find great deals for every budget on brands
              you know and trust. Conditions range from new to light use to
              salvage.
            </div>
            <div
              style={{
                width: "99%",
                height: "60px",
                marginTop: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ color: "#599f22", fontWeight: "bold" }}>
                <span>{"Total Auction :" + " "}</span>
                <span></span>
                <span>
                  {auctionCount < 10 ? "0" + auctionCount : auctionCount || 0}
                </span>
              </div>
              {/* <div>
                <Form.Select
                  aria-label="Default select example"
                  style={{ width: "200px" }}
                >
                  <option>Sort By</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div> */}
            </div>

            {auctionCount < 1 ? (
              <div
                style={{
                  width: "100%",
                  height: "fit-content",
                  marginTop: "20px",
                  display: "flex",
                  flexWrap: "wrap",
                  fontSize: "20px",
                  color: "gray",
                }}
              >
                No Auctions Found
              </div>
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "fit-content",
                  marginTop: "20px",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {currentAuctions?.map((data, index) => (
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
                        <Card.Text
                          style={{ marginTop: "5px", fontSize: "13px" }}
                        >
                          <span style={{ fontWeight: 700 }}>Bids: </span>{" "}
                          <span>{data?.bid_count}</span>
                        </Card.Text>

                        <Card.Text style={{ fontSize: "13px" }}>
                          <span style={{ fontWeight: 700 }}>Closes in :</span>{" "}
                          {/* <span>{secondsToHms(data?.bid_ends_in_second)}</span> */}
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
            )}

            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                margin: "20px auto",
                position: "relative",
              }}
            >
              <Pagination
                count={Math.ceil(auctions?.length / postPerPage)}
                variant="outlined"
                onChange={handlePageChange}
                showFirstButton
                showLastButton
                shape="rounded"
                style={{ position: "absolute", right: "10px" }}
              />
            </div>
          </s.InnerConRight>
        </s.InnerCon>
        <div style={{ width: "80%", margin: "auto" }}>
          <div>
            <OtherMarkets />
          </div>
          <div>
            <GetStartedAsBuyer />
          </div>
        </div>

        <div
          style={{
            width: "100%",
            paddingTop: "150px",
            paddingBottom: "150px",
            background: "#599F22",
            marginBottom: "150px",
            marginTop: "150px",
          }}
        >
          <div
            style={{
              width: "100%",
              color: "#FFFFFF",
              fontSize: windowWidth < 1200 ? "30px" : "45px",
              padding: "40px",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Online Auctions for Liquidation, Returns, and Overstock
          </div>

          <div
            style={{
              width: "100%",
              color: "#FFFFFF",
              fontSize: windowWidth < 1200 ? "14px" : "16px",
              fontWeight: 400,
              textAlign: "center",
              marginTop: "40px",
            }}
          >
            <div style={{ margin: "auto", width: "70%" }}>
              Find the products you’re looking for across the largest online
              network of B2B liquidation marketplaces. Bid and buy from
              thousands of liquidation auctions. Hundreds of product categories.
              All lot sizes and conditions.
            </div>
          </div>
        </div>
      </s.MainCon>
    </>
  );
};

export default Shopauction;
