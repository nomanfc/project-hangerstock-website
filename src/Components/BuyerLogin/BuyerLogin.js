import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Select, { components } from "react-select";
import countryList from "react-select-country-list";

import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Form } from "react-bootstrap";

import { useUserContext } from "../../Context/UserContext";

import { login_buyer } from "../../HTTP_REQUESTS/api_";

import "./style.css";

const BuyerLogin = () => {
  const { login, setLoading, user } = useUserContext();
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [buyerData, setBuyerData] = useState({});

  const handleChange = (e) => {
    setBuyerData({ ...buyerData, [e.target.name]: e.target.value });
  };



  const handleLogin = async (event) => {
    event.preventDefault();
    await login_buyer(buyerData).then((res) => {
      if (res.data.success === 1) {
        login(res.data.data);
        navigate("/allauctions");
      }

      if (res.data.success !== 1) {
        window.alert("Login Failed. Try again");
      }
    });
  };

  useEffect(() => {
    function reportWindowSize() {
      setWindowWidth(window.innerWidth);
    }
    // Trigger this function on resize
    window.addEventListener("resize", reportWindowSize);
    //  Cleanup for componentWillUnmount
    return () => window.removeEventListener("resize", reportWindowSize);
  }, []);

  const customStyles = {
    control: (base, state) => ({
      ...base,
      height: "40px",
    }),

    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      background: "#FFFFFF",
      zIndex: 1,
    }),

    menu: (base) => ({
      ...base,
      background: "#FFFFFF",
      zIndex: 100,
    }),
  };
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          width: windowWidth < 1200 ? "90%" : "500px",
          margin: "80px auto 190px auto",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "fit-content",
            borderRadius: "10px",
            margin: "50px auto 20px auto",
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
          }}
        >
          <div style={{ padding: "30px 35px" }}>
            <div
              style={{
                fontSize: "35px",
                color: "#599f22",
                fontWeight: 700,
                marginTop: "50px",
                marginBottom: "30px",
                textAlign: "center",
              }}
            >
              Hanger Stock Buyer Login
              <p style={{ fontSize: "15px", color: "#444444", margin: "30px" }}>
                Please login with your Hanger Stock Network email and password.
              </p>
            </div>
            <TextField
              size="small"
              style={{ margin: "10px auto" }}
              fullWidth
              id="outlined-basic"
              name="email"
              onChange={handleChange}
              label="Email"
              variant="outlined"
            />

            <TextField
              size="small"
              style={{ margin: "10px auto" }}
              fullWidth
              id="outlined-basic"
              label="Password"
              onChange={handleChange}
              name="password"
              variant="outlined"
              type="password"
            />

            <Button
              onClick={handleLogin}
              style={{
                width: windowWidth < 1200 ? "100%" : "100%",
                padding: "10px 100px",
                margin: "10px auto",
                background: "#599f22",
                color: "#FFFFFF",
                textTransform: "none",
              }}
            >
              Login
            </Button>

            <div
              style={{
                width: "fit-content",
                margin: "20px auto 10px auto",
                color: "gray",
              }}
            >
              {" "}
              Forget Password? <a href="#">Reset</a>
            </div>
            <div
              style={{
                width: "fit-content",
                margin: "0px auto 20px auto",
                color: "gray",
              }}
            >
              {" "}
              Don't have a Buyer account?{" "}
              <a href="/registrationbuyer">Register</a>
            </div>
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default BuyerLogin;
