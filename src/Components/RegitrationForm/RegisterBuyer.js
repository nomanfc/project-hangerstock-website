import React, { useState, useEffect, useMemo } from "react";
import Select, { components } from "react-select";
import { useNavigate } from "react-router-dom";
import countryList from "react-select-country-list";
import { ValidateEmail } from "../../Constants/constant";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import "./style.css";

import { signup_buyer } from "../../HTTP_REQUESTS/api_";

const Register = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [buyersignupdata_user, setBuyerSignupData_user] = useState({
    type_id: 1,
    status: false,
  });

  const [buyersignupdata_business, setBuyerSignupData_business] = useState({});

  let buyerData = {
    user: buyersignupdata_user,
    business: buyersignupdata_business,
  };

  const [accin, setaccin] = useState(true);
  const [warein, setwarein] = useState(false);
  const [payin, setpayin] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorName, setErrorName] = useState(false);

  const handle_User_Info = (e) => {
    setBuyerSignupData_user({
      ...buyersignupdata_user,
      [e.target.name]: e.target.value,
    });
  };

  const handle_Business_Info = (e) => {
    setBuyerSignupData_business({
      ...buyersignupdata_business,
      [e.target.name]: e.target.value,
    });
  };

  const handleAcc = () => {
    if (buyersignupdata_user.email) {
      if (ValidateEmail(buyersignupdata_user.email)) {
        signup_buyer(buyerData).then((res) => {
          if (res.data.sucess === 1) {
            navigate("/buyerlogin");
          }
          if (res.data.sucess !== 1) {
            window.alert(res.data.message);
          }
        });
      }
      if (!ValidateEmail(buyersignupdata_user.email)) {
        window.alert("Invalid Email Address");
      }
    } else {
      setErrorEmail(true);
      window.alert("Fill Up Necessery Data");
    }
  };

  useEffect(() => {
    function reportWindowSize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", reportWindowSize);
    return () => window.removeEventListener("resize", reportWindowSize);
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          width: windowWidth < 1200 ? "90%" : "800px",
          margin: "15px auto",
        }}
      >
        <div
          style={{
            fontSize: "25px",
            color: "#599f22",
            fontWeight: 700,
            marginTop: "70px",
          }}
        >
          Sign up to become a Hanger Stock buyer
        </div>

        <div
          style={{
            width: "100%",
            height: "fit-content",
            borderRadius: "10px",
            margin: "50px auto",
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
          }}
        >
          <div
            style={{
              padding: "20px 35px",
              width: "100%",
              background: "#DEECD3",
              fontSize: "18px",
              borderRadius: "10px 10px 0px 0px",
            }}
          >
            Personal Information
          </div>
          <div style={{ padding: "30px 35px" }}>
            <div>
              <TextField
                error={errorEmail ? true : false}
                name="email"
                onKeyUp={() =>
                  setErrorEmail(
                    ValidateEmail(buyersignupdata_user.email) ? false : true
                  )
                }
                onChange={handle_User_Info}
                size="small"
                required
                style={{ margin: "20px auto" }}
                fullWidth
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
              />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  width: windowWidth < 1200 ? "100%" : "49%",
                }}
              >
                <TextField
                  size="small"
                  required
                  fullWidth
                  id="outlined-basic"
                  name="password"
                  onChange={handle_User_Info}
                  label="Password"
                  variant="outlined"
                  type="password"
                />
              </div>

              <div
                style={{
                  width: windowWidth < 1200 ? "100%" : "49%",
                  margin: windowWidth < 1200 ? "20px auto" : "",
                }}
              >
                <TextField
                  size="small"
                  required
                  fullWidth
                  id="outlined-basic"
                  name="cpass"
                  onChange={handle_User_Info}
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                />
              </div>
            </div>

            <div
              style={{
                width: "100%",
                margin: "20px auto",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  width: windowWidth < 1200 ? "100%" : "49%",
                }}
              >
                <TextField
                  size="small"
                  required
                  fullWidth
                  id="outlined-basic"
                  name="first_name"
                  onChange={handle_User_Info}
                  label="First Name"
                  variant="outlined"
                />
              </div>

              <div
                style={{
                  width: windowWidth < 1200 ? "100%" : "49%",
                  margin: windowWidth < 1200 ? "20px auto" : "",
                }}
              >
                <TextField
                  size="small"
                  required
                  fullWidth
                  id="outlined-basic"
                  name="last_name"
                  onChange={handle_User_Info}
                  label="Last Name"
                  variant="outlined"
                />
              </div>
            </div>

            <div>
              <div style={{ color: "grey" }}>Phone Number *</div>
              <PhoneInput
                inputStyle={{
                  height: "40px",
                  width: "100%",
                  padding: "0px 55px",
                }}
                buttonStyle={{
                  border: "none",
                  color: "#BDB8BD",
                  backgroundColor: "#FFFFFF",
                  fontSize: "17px",
                  borderRight: "1px solid #BDB8BD",
                  margin: "5px 5px",
                  width: "45px",
                }}
                dropdownStyle={{
                  height: "400px",
                  color: "#201122",
                }}
                country={"us"}
                name="phone"
                onChange={(phone) =>
                  setBuyerSignupData_user({
                    ...buyersignupdata_user,
                    phone,
                  })
                }
              />
            </div>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: "fit-content",
            borderRadius: "10px",
            margin: "50px auto",
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
          }}
        >
          <div
            style={{
              padding: "20px 35px",
              width: "100%",
              background: "#DEECD3",
              fontSize: "18px",
              borderRadius: "10px 10px 0px 0px",
            }}
          >
            Business Information
          </div>
          <div style={{ padding: "30px 35px" }}>
            <TextField
              size="small"
              required
              style={{ margin: "10px auto 0px auto" }}
              fullWidth
              id="outlined-basic"
              name="name"
              onChange={handle_Business_Info}
              label="Business Name"
              variant="outlined"
            />

            <TextField
              size="small"
              required
              style={{ margin: "10px auto" }}
              fullWidth
              id="outlined-basic"
              name="register_no"
              onChange={handle_Business_Info}
              label="Register No."
              variant="outlined"
            />

            <TextField
              size="small"
              required
              style={{ marginTop: "10px auto", display: "none" }}
              fullWidth
              id="outlined-basic"
              name="reside_state_id"
              onChange={handle_Business_Info}
              label="Reside State"
              variant="outlined"
            />
          </div>
        </div>

        <div style={{ paddingLeft: "30px" }}>
          <span>
            {" "}
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label=""
            />{" "}
          </span>
          <span>Yes, please notify me about new auctions via email.</span>
        </div>

        <div style={{ marginBottom: "40px", paddingLeft: "30px" }}>
          <span>
            {" "}
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label=""
            />{" "}
          </span>
          <span>
            {" "}
            By checking this box you will agree with Hanger Stock{" "}
            <a href="/terms">Terms of Use</a> and{" "}
            <a href="/privacypolicy">Privacy Policy</a>
          </span>
        </div>

        <div
          style={{
            width: windowWidth < 1200 ? "100%" : "100%",
            margin: "auto",
            paddingBottom: "150px",
          }}
        >
          <Button
            onClick={handleAcc}
            style={{
              width: windowWidth < 1200 ? "100%" : "100%",
              padding: "10px 100px",
              background: "#599f22",
              color: "#FFFFFF",
              textTransform: "none",
            }}
          >
            Submit
          </Button>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          margin: "50px auto 150px auto",
          border: "1px solid #FFFFFF",
          background: "rgba(248, 250, 248, 0.75)",
        }}
      >
        <div
          style={{
            fontSize: "45px",
            fontWeight: 700,
            color: "#599F22",
            textAlign: "center",
            marginTop: "90px",
          }}
        >
          Not sure? Need help?
        </div>
        <div
          style={{
            width: "25%",
            margin: "20px auto 130px auto",
            fontSize: "15px",
            fontWeight: "600",
            color: "#444444",
            textAlign: "center",
          }}
        >
          Our team of auction specialists are here to help you set up your
          auction to maximize your returns. Contact us
          <div
            onClick={() => navigate("/contactus")}
            style={{
              color: "#599F22",
              width: "fit-content",
              margin: "20px auto",
              cursor: "pointer",
              borderBottom: "1px solid #599F22",
            }}
          >
            Contact us
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
