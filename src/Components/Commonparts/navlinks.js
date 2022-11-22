import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { RiSearchLine } from "react-icons/ri";
import ReactFlagsSelect from "react-flags-select";

import logo from "./../../Constants/Svgs/ad484750-8a64-43cc-8b27-13c1efc2b9f6.jpeg";

//styled
import * as n from "./navlink.styled";

const NavLinks = () => {
  var pagelink = window.location.pathname;
  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selected, setSelected] = useState("US");
  const [sa, setSa] = useState(false);
  const [saHow, setSaHow] = useState(false);
  const [saAll, setSaAll] = useState(false);

  const [fb, setFb] = useState(false);
  const [fbHow, setFbHow] = useState(false);
  const [fbBlog, setFbBlog] = useState(false);

  const [fs, setFs] = useState(false);
  const [fsHow, setFsHow] = useState(false);
  const [fsMob, setFsMob] = useState(false);
  const [fsEu, setFsEu] = useState(false);
  const [fsBlog, setFsBlog] = useState(false);

  const [su, setSu] = useState(false);
  const [suFaq, setSuFaq] = useState(false);
  const [suContact, setSuContact] = useState(false);

  const [shi, setShi] = useState(false);
  const [esc, setEsc] = useState(false);

  useEffect(() => {
    function reportWindowSize() {
      setWindowWidth(window.innerWidth);
    }
    // Trigger this function on resize
    window.addEventListener("resize", reportWindowSize);
    //  Cleanup for componentWillUnmount
    return () => window.removeEventListener("resize", reportWindowSize);
  }, []);

  //styles

  const appbarStyle = {
    width: windowWidth > 1490 ? "90%" : "100%",
    margin: windowWidth < 1300 ? "20px auto auto auto" : "auto",
    height: "60px",
    display: windowWidth < 1300 ? "block" : "flex",
    alignItems: "center",
    justifyContent: "space-around",
    position: "relative",
  };

  const navlinkStyleSa = {
    fontSize:
      document.body.scrollTop > 1 || document.documentElement.scrollTop > 1
        ? "15px"
        : "16px",

    fontWeight: 750,
    display: windowWidth < 1300 ? "none" : "block",
    background: sa ? "#F5F5F5" : "#FFFFFF",
    padding: "10px 10px",
    cursor: "pointer",
    borderRadius: "10px",
    color: "#000000",
  };

  const navlinkStyleSaAc = {
    fontSize:
      document.body.scrollTop > 1 || document.documentElement.scrollTop > 1
        ? "15px"
        : "16px",

    fontWeight: 750,
    display: windowWidth < 1300 ? "none" : "block",
    background: "#599F22",
    color: "#FFFFFF",
    padding: "10px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const navlinkStyleFb = {
    fontSize:
      document.body.scrollTop > 1 || document.documentElement.scrollTop > 1
        ? "15px"
        : "16px",

    fontWeight: 750,
    display: windowWidth < 1300 ? "none" : "block",
    background: fb ? "#F5F5F5" : "#FFFFFF",
    padding: "10px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    color: "#000000",
  };

  const navlinkStyleFbAc = {
    fontSize:
      document.body.scrollTop > 1 || document.documentElement.scrollTop > 1
        ? "15px"
        : "16px",

    fontWeight: 750,
    display: windowWidth < 1300 ? "none" : "block",
    background: "#599F22",
    color: "#FFFFFF",
    padding: "10px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const navlinkStyleFs = {
    fontSize:
      document.body.scrollTop > 1 || document.documentElement.scrollTop > 1
        ? "15px"
        : "16px",

    fontWeight: 750,
    display: windowWidth < 1300 ? "none" : "block",
    background: fs ? "#F5F5F5" : "#FFFFFF",
    padding: "10px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    color: "#000000",
  };

  const navlinkStyleFsAc = {
    fontSize:
      document.body.scrollTop > 1 || document.documentElement.scrollTop > 1
        ? "15px"
        : "16px",

    fontWeight: 750,
    display: windowWidth < 1300 ? "none" : "block",
    background: "#599F22",
    color: "#FFFFFF",
    padding: "10px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const navlinkStyleSu = {
    fontSize:
      document.body.scrollTop > 1 || document.documentElement.scrollTop > 1
        ? "15px"
        : "16px",

    fontWeight: 750,
    display: windowWidth < 1300 ? "none" : "block",
    background: su ? "#F5F5F5" : "#FFFFFF",
    padding: "10px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    color: "#000000",
  };

  const navlinkStyleSuAc = {
    fontSize:
      document.body.scrollTop > 1 || document.documentElement.scrollTop > 1
        ? "15px"
        : "16px",

    fontWeight: 750,
    display: windowWidth < 1300 ? "none" : "block",
    background: "#599F22",
    color: "#FFFFFF",
    padding: "10px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const navlinkStyleShi = {
    fontSize:
      document.body.scrollTop > 1 || document.documentElement.scrollTop > 1
        ? "15px"
        : "16px",

    fontWeight: 750,
    display: windowWidth < 1300 ? "none" : "block",
    background: shi ? "#F5F5F5" : "#FFFFFF",
    padding: "10px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    color: "#000000",
  };

  const navlinkStyleShiAc = {
    fontSize:
      document.body.scrollTop > 1 || document.documentElement.scrollTop > 1
        ? "15px"
        : "16px",

    fontWeight: 750,
    display: windowWidth < 1300 ? "none" : "block",
    background: "#599F22",
    color: "#FFFFFF",
    padding: "10px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const navlinkStyleEsc = {
    fontSize:
      document.body.scrollTop > 1 || document.documentElement.scrollTop > 1
        ? "15px"
        : "16px",

    fontWeight: 750,
    display: windowWidth < 1300 ? "none" : "block",
    background: esc ? "#F5F5F5" : "#FFFFFF",
    padding: "10px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    color: "#000000",
  };

  const navlinkStyleEscAc = {
    fontSize:
      document.body.scrollTop > 1 || document.documentElement.scrollTop > 1
        ? "15px"
        : "16px",

    fontWeight: 750,
    display: windowWidth < 1300 ? "none" : "block",
    background: "#599F22",
    color: "#FFFFFF",
    padding: "10px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={appbarStyle}>
      <div style={{ width: "fit-content" }}>
        <img
          onClick={() => navigate("/")}
          style={{
            cursor: "pointer",
            width: windowWidth < 400 ? "120px" : "150px",
            zIndex: 1,
            // position: "sticky",
          }}
          src={logo}
          alt=""
        />
        {/* <Hslogo
          onClick={() => navigate("/")}
          style={{
            cursor: "pointer",
            width: windowWidth < 400 ? "120px" : "150px",
            zIndex: 1,
            // position: "sticky",
          }}
        /> */}
      </div>

      <n.Navs
        onMouseOver={() => setSa(true)}
        onMouseOut={() => setSa(false)}
        // onClick={() => navigate("/shopauctions")}
      >
        <div
          style={
            pagelink === "/shopauctions" || pagelink === "/allauctions"
              ? navlinkStyleSaAc
              : navlinkStyleSa
          }
        >
          Shop Auctions
        </div>

        <div
          style={{
            display: sa ? "flex" : "none",
            height: "fit-content",
            width: "fit-content",
            position: "absolute",
            background: "#FFFFFF",
            zIndex: "1000",
            borderRadius: "10px",
            alignItems: "center",
            left: "-150px",
            justifyContent: "space-around",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
          }}
        >
          <div
            onMouseOver={() => setSaHow(true)}
            onMouseOut={() => setSaHow(false)}
            onClick={() => navigate("/shopauctions")}
            style={{
              height: "100px",
              width: "300px",
              padding: "15px 20px",
              margin: "20px 20px",
              cursor: "pointer",
              background: saHow ? "rgba(0, 0, 0, 0.05)" : "",
              borderRadius: "10px",
            }}
          >
            <div
              style={{ color: "#599f22", fontWeight: "600", fontSize: "18px" }}
            >
              How it works?
            </div>
            <div
              style={{
                fontWeight: "400",
                fontSize: "14px",
                paddingTop: "10px",
              }}
            >
              Get Started with simple steps..
            </div>
          </div>

          <div
            onMouseOver={() => setSaAll(true)}
            onMouseOut={() => setSaAll(false)}
            onClick={() => navigate("/allauctions")}
            style={{
              height: "100px",
              width: "300px",
              padding: "15px 20px",
              margin: "20px 20px",
              cursor: "pointer",
              background: saAll ? "rgba(0, 0, 0, 0.05)" : "",
              borderRadius: "10px",
            }}
          >
            <div
              style={{ color: "#599f22", fontWeight: "600", fontSize: "18px" }}
            >
              All Auctions
            </div>
            <div
              style={{
                fontWeight: "400",
                fontSize: "14px",
                paddingTop: "10px",
              }}
            >
              Browse all the auctions
            </div>
          </div>
        </div>
      </n.Navs>
      <n.Navs
        onMouseOver={() => setFb(true)}
        onMouseOut={() => setFb(false)}
        // onClick={() => navigate("/buyers")}
      >
        <div
          style={
            pagelink === "/buyers" ||
            pagelink === "/marketplace" ||
            pagelink === "/buyersblog" ||
            pagelink === "/buyersblog/detailpage" ||
            pagelink === "/buyersblog/buyereducation" ||
            pagelink === "/buyersblog/gettingstarted"
              ? navlinkStyleFbAc
              : navlinkStyleFb
          }
        >
          For Buyers
        </div>

        <div
          style={{
            display: fb ? "flex" : "none",
            height: "fit-content",
            width: "fit-content",
            position: "absolute",
            background: "#FFFFFF",
            zIndex: "1000",
            borderRadius: "10px",
            alignItems: "center",
            left: "-150px",
            justifyContent: "space-around",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
          }}
        >
          <div
            onMouseOver={() => setFbHow(true)}
            onMouseOut={() => setFbHow(false)}
            onClick={() => navigate("/buyers")}
            style={{
              height: "120px",
              width: "300px",
              padding: "15px 20px",
              margin: "20px 20px",
              cursor: "pointer",
              background: fbHow ? "rgba(0, 0, 0, 0.05)" : "",
              borderRadius: "10px",
            }}
          >
            <div
              style={{ color: "#599f22", fontWeight: "600", fontSize: "18px" }}
            >
              How it works?
            </div>
            <div
              style={{
                fontWeight: "400",
                fontSize: "14px",
                paddingTop: "10px",
              }}
            >
              Get Started with five simple steps..
            </div>
          </div>

          <div
            onMouseOver={() => setFbBlog(true)}
            onMouseOut={() => setFbBlog(false)}
            onClick={() => navigate("/buyersblog")}
            style={{
              height: "120px",
              width: "300px",
              padding: "15px 20px",
              margin: "20px 20px",
              cursor: "pointer",
              background: fbBlog ? "rgba(0, 0, 0, 0.05)" : "",
              borderRadius: "10px",
            }}
          >
            <div
              style={{ color: "#599f22", fontWeight: "600", fontSize: "18px" }}
            >
              Buyer Blog
            </div>
            <div
              style={{
                fontWeight: "400",
                fontSize: "14px",
                paddingTop: "10px",
              }}
            >
              Get buyer insights, tips and best practices..
            </div>
          </div>
        </div>
      </n.Navs>

      <n.Navs
        onMouseOver={() => setFs(true)}
        onMouseOut={() => setFs(false)}
        // onClick={() => navigate("/sellers")}
      >
        <div
          style={
            pagelink === "/sellers" ||
            pagelink === "/sellerseurope" ||
            pagelink === "/smallbusiness" ||
            pagelink === "/enterprisebusiness" ||
            pagelink === "/sellphonesellers" ||
            pagelink === "/sellerblog" ||
            pagelink === "/sellerblog/detailpage" ||
            pagelink === "/sellerblog/hsnews" ||
            pagelink === "/sellerblog/categoryinfo" ||
            pagelink === "/sellerblog/industryinsights"
              ? navlinkStyleFsAc
              : navlinkStyleFs
          }
        >
          For Sellers
        </div>

        <div
          style={{
            display: fs ? "flex" : "none",
            height: "fit-content",
            maxWidth: "980px",
            position: "absolute",
            background: "#FFFFFF",
            zIndex: "1000",
            borderRadius: "10px",
            alignItems: "center",
            left: "-300px",
            justifyContent: "space-around",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
          }}
        >
          <div
            onClick={() => navigate("/sellers")}
            onMouseOver={() => setFsHow(true)}
            onMouseOut={() => setFsHow(false)}
            style={{
              height: "120px",
              width: "300px",
              padding: "15px 20px",
              margin: "20px 20px",
              cursor: "pointer",
              background: fsHow ? "rgba(0, 0, 0, 0.05)" : "",
              borderRadius: "10px",
            }}
          >
            <div
              style={{ color: "#599f22", fontWeight: "600", fontSize: "18px" }}
            >
              How it works?
            </div>
            <div
              style={{
                fontWeight: "400",
                fontSize: "14px",
                paddingTop: "10px",
              }}
            >
              Get started with five simple steps..
            </div>
          </div>

          <div
            onClick={() => navigate("/sellphonesellers")}
            onMouseOver={() => setFsMob(true)}
            onMouseOut={() => setFsMob(false)}
            style={{
              height: "120px",
              width: "300px",
              padding: "15px 20px",
              margin: "20px 20px",
              cursor: "pointer",
              background: fsMob ? "rgba(0, 0, 0, 0.05)" : "",
              borderRadius: "10px",
            }}
          >
            <div
              style={{ color: "#599f22", fontWeight: "600", fontSize: "18px" }}
            >
              Mobile Seller
            </div>
            <div
              style={{
                fontWeight: "400",
                fontSize: "14px",
                paddingTop: "10px",
              }}
            >
              Learn how to sell your mobile inventory..
            </div>
          </div>

          <div
            onMouseOver={() => setFsEu(true)}
            onMouseOut={() => setFsEu(false)}
            onClick={() => navigate("/sellerseurope")}
            style={{
              height: "120px",
              width: "300px",
              padding: "15px 20px",
              margin: "20px 20px",
              cursor: "pointer",
              background: fsEu ? "rgba(0, 0, 0, 0.05)" : "",
              borderRadius: "10px",
            }}
          >
            <div
              style={{ color: "#599f22", fontWeight: "600", fontSize: "18px" }}
            >
              European Seller?
            </div>
            <div
              style={{
                fontWeight: "400",
                fontSize: "14px",
                paddingTop: "10px",
              }}
            >
              Need a liquidation solution in Europe? start here..
            </div>
          </div>

          <div
            onClick={() => navigate("/sellerblog")}
            onMouseOver={() => setFsBlog(true)}
            onMouseOut={() => setFsBlog(false)}
            style={{
              height: "120px",
              width: "300px",
              padding: "15px 20px",
              margin: "20px 20px",
              cursor: "pointer",
              background: fsBlog ? "rgba(0, 0, 0, 0.05)" : "",
              borderRadius: "10px",
            }}
          >
            <div
              style={{ color: "#599f22", fontWeight: "600", fontSize: "18px" }}
            >
              Seller Blog
            </div>
            <div
              style={{
                fontWeight: "400",
                fontSize: "14px",
                paddingTop: "10px",
              }}
            >
              Get seller insights, tips and best practices..
            </div>
          </div>
        </div>
      </n.Navs>

      <n.Navs
        onMouseOver={() => setShi(true)}
        onMouseOut={() => setShi(false)}
        onClick={() => navigate("/shipping")}
      >
        <div
          style={
            pagelink === "/shipping" || pagelink === "/shippingdetails"
              ? navlinkStyleShiAc
              : navlinkStyleShi
          }
        >
          Shipping
        </div>
      </n.Navs>

      <n.Navs
        onMouseOver={() => setEsc(true)}
        onMouseOut={() => setEsc(false)}
        onClick={() => navigate("/escrow")}
      >
        <div
          style={pagelink === "/escrow" ? navlinkStyleEscAc : navlinkStyleEsc}
        >
          Escrow
        </div>
      </n.Navs>

      <n.Navs onMouseOver={() => setSu(true)} onMouseOut={() => setSu(false)}>
        <div
          style={pagelink === "/support" ? navlinkStyleSuAc : navlinkStyleSu}
        >
          Support
        </div>

        <div
          style={{
            display: su ? "flex" : "none",
            height: "fit-content",
            width: "fit-content",
            position: "absolute",
            background: "#FFFFFF",
            zIndex: "1000",
            borderRadius: "10px",
            alignItems: "center",
            left: "-150px",
            justifyContent: "space-around",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
          }}
        >
          <div
            onMouseOver={() => setSuFaq(true)}
            onMouseOut={() => setSuFaq(false)}
            onClick={() => navigate("/support")}
            style={{
              height: "120px",
              width: "300px",
              padding: "15px 20px",
              margin: "20px 20px",
              cursor: "pointer",
              background: suFaq ? "rgba(0, 0, 0, 0.05)" : "",
              borderRadius: "10px",
            }}
          >
            <div
              style={{ color: "#599f22", fontWeight: "600", fontSize: "18px" }}
            >
              FAQ
            </div>
            <div
              style={{
                fontWeight: "400",
                fontSize: "14px",
                paddingTop: "10px",
              }}
            >
              <div>Have more qustions?</div>
              <div>We've got answers..</div>
            </div>
          </div>

          <div
            onMouseOver={() => setSuContact(true)}
            onMouseOut={() => setSuContact(false)}
            onClick={() => navigate("/contactus")}
            style={{
              height: "120px",
              width: "300px",
              padding: "15px 20px",
              margin: "20px 20px",
              cursor: "pointer",
              background: suContact ? "rgba(0, 0, 0, 0.05)" : "",
              borderRadius: "10px",
            }}
          >
            <div
              style={{ color: "#599f22", fontWeight: "600", fontSize: "18px" }}
            >
              Contact us
            </div>
            <div
              style={{
                fontWeight: "400",
                fontSize: "14px",
                paddingTop: "10px",
              }}
            >
              Get buyer insights, tips and best practices..
            </div>
          </div>
        </div>
      </n.Navs>

      <div>
        <TextField
          sx={{
            display: windowWidth < 1300 ? "none" : "block",
            borderColor: "white",
            background: "#F5F5F5",
            padding: "5px 18px",
            width: "250px",
          }}
          variant="standard"
          size="small"
          name="search"
          // onChange={handleSearchChange}
          // onKeyUp={handleSearch}
          // onClick={handleSearchClick}
          // value={searchKey}
          placeholder="Search..."
          autoComplete="off"
          style={{
            // width: WindowToggle === false ? "40%" : "420px",
            fontFamily: "Nunito Sans",

            fontWeight: "normal",
            fontSize: "14px",
          }}
          InputProps={{
            disableUnderline: true,
            color: "#A3A3A3",
            endAdornment: (
              <>
                <ClearIcon
                  // onClick={() => setSearchKey([])}
                  position="start"
                  style={{
                    cursor: "pointer",
                    // display: searchKey?.length > 0 ? "block" : "none",
                    margin: "5px",
                    fontSize: "25px",
                    color: "#8F8790",
                  }}
                />
                <RiSearchLine
                  position="start"
                  // onClick={handleSearchClick}
                  style={{
                    cursor: "pointer",
                    margin: "5px",
                    fontSize: "25px",
                    color: "#8F8790",
                  }}
                />
              </>
            ),
          }}
        />
      </div>
      {/* <div
        style={{
          fontWeight: "400",
          display: windowWidth < 1300 ? "none" : "block",
          height: "40px",
        }}
      >
        <ReactFlagsSelect
          selected={selected}
          onSelect={(code) => setSelected(code)}
          defaultCountry="US"
          countries={["US", "ES", "KR", "CN", "JP"]}
          optionsSize={13}
          customLabels={{
            US: "Eng",
            ES: "Esp",
            KR: "Kor",
            CN: "Chi",
            JP: "Jan",
          }}
          placeholder="Select Language"
        />
      </div> */}

      <Button
        onClick={() => navigate("/marketplace")}
        style={{
          background: "#599F22",
          color: "#FFFFFF",
          textTransform: "none",
          padding: "9px 12px",
          fontSize: "13px",
          fontWeight: 700,
          display: windowWidth < 1300 ? "none" : "flex",
        }}
      >
        Marketplaces
      </Button>
    </div>
  );
};

export default NavLinks;
