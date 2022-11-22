import React, { useState, useEffect, useMemo } from "react";
import Select, { components } from "react-select";
import countryList from "react-select-country-list";

import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

import { Form } from "react-bootstrap";

import "./style.css";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const { ValueContainer, Placeholder } = components;

const Register = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [age, setAge] = React.useState("");

  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const changeHandler = (value) => {
    setValue(value);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    function reportWindowSize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", reportWindowSize);
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
          width: windowWidth < 1200 ? "90%" : "50%",
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
          Sign up to become a Hanger Stock buyer or seller
        </div>

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
              style={{ margin: "20px auto" }}
              fullWidth
              id="outlined-basic"
              label="Legal Business Name"
              variant="outlined"
            />

            <Select
              options={options}
              value={value}
              styles={customStyles}
              placeholder="Country*"
              onChange={changeHandler}
            />
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
            Primary point of contact
          </div>
          <div style={{ padding: "30px 35px" }}>
            <TextField
              size="small"
              required
              style={{ margin: "20px auto" }}
              fullWidth
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
            />
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
                // onChange={(phone) => setSignUpData({ ...signupdata, phone })}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            width: windowWidth < 1200 ? "100%" : "100%",
            margin: "auto",
            paddingBottom: "150px",
          }}
        >
          <Button
            style={{
              width: windowWidth < 1200 ? "100%" : "100%",
              padding: "10px 100px",
              background: "#599f22",
              color: "#FFFFFF",
              textTransform: "none",
            }}
          >
            Continue
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
