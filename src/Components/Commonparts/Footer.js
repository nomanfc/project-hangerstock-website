import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";

import Logo from "./../../Constants/Svgs/ad484750-8a64-43cc-8b27-13c1efc2b9f6.jpeg";

import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

import * as c from "./navlink.styled";

const Footer = () => {
  const navigate = useNavigate();

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

  const textStyle = {
    fontSize: "16px",
    color: "#000000",
    opacity: 1,
    padding: "4px",
    fontWeight: 700,
    cursor: "pointer",
  };

  const titleStyle = {
    fontSize: "18px",
    color: "#336F09",
    padding: "3px",
    fontWeight: 700,
    paddingBottom: "10px",
  };

  return (
    <c.FooterCon>
      <c.FootCon>
        <c.FootOneLeft>
          <img
            onClick={() => navigate("/")}
            style={{
              cursor: "pointer",
              zIndex: 1,
              width: windowWidth < 400 ? "120px" : "150px",
              // position: "sticky",
            }}
            src={Logo}
            alt=""
          />
        </c.FootOneLeft>
        <c.FootOneRight>
          <c.Parts>
            <div style={titleStyle}>Support</div>
            <div style={textStyle} onClick={() => navigate("/contactus")}>
              Contact Us
            </div>
            <div style={textStyle} onClick={() => navigate("/buyersblog")}>
              Buyer Guide
            </div>
            <div style={textStyle} onClick={() => navigate("/privacypolicy")}>
              Privacy Policy
            </div>
            <div style={textStyle} onClick={() => navigate("/support")}>
              FAQ
            </div>
            <div style={textStyle} onClick={() => navigate("/terms")}>
              Terms of Use
            </div>
          </c.Parts>
          <c.Parts>
            <div style={titleStyle}>Company</div>
            <div style={textStyle} onClick={() => navigate("/aboutus")}>
              About Us
            </div>
          </c.Parts>
          <c.Parts>
            <div style={titleStyle}>For Buyers</div>
            <div style={textStyle} onClick={() => navigate("/buyers")}>
              How to Buy
            </div>
            <div style={textStyle} onClick={() => navigate("/buyersblog")}>
              Blog for Buyers
            </div>
          </c.Parts>
          <c.Parts>
            <div style={titleStyle}>For Sellers</div>
            <div style={textStyle} onClick={() => navigate("/sellers")}>
              How to Sell
            </div>
            <div style={textStyle} onClick={() => navigate("/sellerblog")}>
              Blog for Seller
            </div>
          </c.Parts>
        </c.FootOneRight>
      </c.FootCon>
      <c.FooterLinks>
        <div>
          <IconButton
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/company/82531372/admin/notifications/all/")
            }
            style={{
              marginRight: "10px",
              boxShadow: `rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset`,
            }}
          >
            <AiFillLinkedin style={{ cursor: "pointer" }} />
          </IconButton>
          <IconButton
            onClick={() =>
              (window.location.href =
                "https://www.facebook.com/Liqsession-113516267106111")
            }
            style={{
              marginRight: "10px",
              boxShadow: `rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset`,
            }}
          >
            <AiFillFacebook style={{ cursor: "pointer" }} />
          </IconButton>
          <IconButton
            onClick={() =>
              (window.location.href = "https://www.instagram.com/liqsession")
            }
            style={{
              marginRight: "10px",
              boxShadow: `rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset`,
            }}
          >
            <AiFillInstagram style={{ cursor: "pointer" }} />
          </IconButton>
          {/* <IconButton
            style={{
              marginRight: "10px",
              boxShadow: `rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset`
            }}
          >
            <AiFillTwitterSquare style={{ cursor: "pointer" }} />
          </IconButton> */}
        </div>
        <div>
          <c.Text style={{ width: "fit-content ", fontWeight: 700, fontSize: "16px"  }}>
            2021, Hanger Stock, LLC
          </c.Text>
        </div>
      </c.FooterLinks>
    </c.FooterCon>
  );
};

export default Footer;
