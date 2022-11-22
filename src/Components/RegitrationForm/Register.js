import React, { useState, useEffect, useMemo } from "react";
import Select, { components } from "react-select";
import countryList from "react-select-country-list";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { VscAccount } from "react-icons/vsc";
import { FaWarehouse } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Form } from "react-bootstrap";

import { signup_seller } from "../../HTTP_REQUESTS/api_";

import "./style.css";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { ValidateEmail } from "../../Constants/constant";

const { ValueContainer, Placeholder } = components;

const Register = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [age, setAge] = React.useState("");

  const [sellersignupdata_user, setSellerSignupData_user] = useState({
    type_id: 2,
    status: false,
  });
  const [sellersignupdata_business, setSellerSignupData_business] = useState(
    {}
  );
  const [sellersignupdata_warehouse, setSellerSignupData_warehouse] = useState(
    {}
  );
  const [sellersignupdata_rule, setSellerSignupData_rule] = useState({
    is_loading_dock: false,
    is_lift_gate_required: false,
    is_allow_local_pickup: false,
  });

  let sellerData = {
    user: sellersignupdata_user,
    business: sellersignupdata_business,
    warehouse: sellersignupdata_warehouse,
    rule: sellersignupdata_rule,
  };

  const [is_dock, setIs_dock] = useState(true);
  const [is_liftgate, setIs_liftgate] = useState(true);
  const [is_localpickup, setIs_localpickup] = useState(true);

  const handle_is_dock = (e) => {
    setIs_dock(is_dock ? false : true);
    setSellerSignupData_rule({
      ...sellersignupdata_rule,
      is_loading_dock: is_dock,
    });
  };

  const handle_is_lift_gate = (e) => {
    setIs_liftgate(is_liftgate ? false : true);
    setSellerSignupData_rule({
      ...sellersignupdata_rule,
      is_lift_gate_required: is_liftgate,
    });
  };

  const handle_is_localpickup = (e) => {
    setIs_localpickup(is_localpickup ? false : true);
    setSellerSignupData_rule({
      ...sellersignupdata_rule,
      is_allow_local_pickup: is_localpickup,
    });
  };

  const handleSubscribe = (e) => {
    signup_seller(sellerData).then((res) => {
      console.log(res.data);
    });
  };


  const handle_User_Info = (e) => {
    setSellerSignupData_user({
      ...sellersignupdata_user,
      [e.target.name]: e.target.value,
    });
  };

  const handle_Business_Info = (e) => {
    setSellerSignupData_business({
      ...sellersignupdata_business,
      [e.target.name]: e.target.value,
    });
  };

  const handle_WareHouse_Info = (e) => {
    setSellerSignupData_warehouse({
      ...sellersignupdata_warehouse,
      [e.target.name]: e.target.value,
    });
  };

  const [state, setState] = useState({
    Country_Business: "",
    Region_Business: "",
    Region_Warehouse: "",
    Country_Warehouse: "",
    Region_Warehouse_2: "",
  });

  const selectCountry_Business = (val, e) => {
    setState({ Country_Business: val });
    setSellerSignupData_business({
      ...sellersignupdata_business,
      country: val,
    });
  };

  const selectRegion_Business = (val) => {
    setState({ ...state, Region_Business: val });
    setSellerSignupData_business({
      ...sellersignupdata_business,
      reside_state: val,
    });
  };

  const selectCountry_Warehouse = (val) => {
    setState({ Country_Warehouse: val });
    setSellerSignupData_warehouse({
      ...sellersignupdata_warehouse,
      country: val,
    });
  };

  const selectRegion_Warehouse = (val) => {
    setState({ ...state, Region_Warehouse: val });
  };

  const selectRegion_Warehouse_2 = (val) => {
    setState({ ...state, Region_Warehouse_2: val });
    setSellerSignupData_warehouse({
      ...sellersignupdata_warehouse,
      state: val,
    });
  };

  const [accin, setaccin] = useState(true);
  const [warein, setwarein] = useState(false);
  const [payin, setpayin] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorName, setErrorName] = useState(false);

  const handleAcc = () => {
    if (sellersignupdata_user.email && sellersignupdata_business.name) {
      if (ValidateEmail(sellersignupdata_user.email)) {
        setaccin(false);
        setwarein(true);
        setpayin(false);
      }
      if (!ValidateEmail(sellersignupdata_user.email)) {
        window.alert("Invalid Email Address");
      }
    } else {
      setErrorEmail(true);
      setErrorName(true);
      window.alert("Fill Up Necessery Data");
    }
  };

  const handleWare = () => {
    setaccin(false);
    setwarein(false);
    setpayin(true);
  };

  const handlePay = () => {
    setaccin(false);
    setwarein(false);
    setpayin(true);
  };

  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
    setSellerSignupData_business({
      ...sellersignupdata_business,
      country: value.label,
    });
  };

  const handle_business_upload = (event) => {
    setSellerSignupData_business({
      ...sellersignupdata_business,
      [event.target.name]: event.target.files[0],
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
          width: windowWidth < 1200 ? "90%" : "800px",
          margin: "15px auto",
        }}
      >
        <div
          style={{
            fontSize: "30px",
            color: "#599f22",
            fontWeight: 700,
            marginTop: "30px",
          }}
        >
          Sign up to become a Hanger Stock supply seller
        </div>

        <div
          style={{
            height: "fit-content",
            margin: "50px auto",
            padding: "10px 25px",
            background: "#DEECD3",
            borderRadius: "10px",
          }}
        >
          <div style={{ fontWeight: "700" }}>
            Before you get started, we'll need some information about your
            business.
          </div>

          <li style={{ fontSize: "14px" }}>
            Legal business name and company information
          </li>
          <li style={{ fontSize: "14px" }}>
            Warehouse location and shipping preferences
          </li>
        </div>

        <div
          style={{
            height: windowWidth < 900 ? "250px" : "100px",
            margin: "50px auto",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: windowWidth < 900 ? "column" : "row",
          }}
        >
          <div
            style={{
              border: "1px solid #F3F4F5",
              height: "100px",
              width: windowWidth < 900 ? "100%" : "35%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ marginRight: "25px" }}>
              <VscAccount
                style={{ color: accin ? "#599f22" : "gray", fontSize: "40px" }}
              />
            </div>
            <div
              style={{
                color: accin ? "#599f22" : "gray",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Account Info.
            </div>
          </div>
          <div
            style={{
              border: "1px solid #F3F4F5",
              height: "100px",
              width: windowWidth < 900 ? "100%" : "35%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ marginRight: "25px" }}>
              <FaWarehouse
                style={{ color: warein ? "#599f22" : "gray", fontSize: "40px" }}
              />
            </div>
            <div
              style={{
                color: warein ? "#599f22" : "gray",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Warehouse Info.
            </div>
          </div>

          <div
            style={{
              border: "1px solid #F3F4F5",
              height: "100px",
              width: windowWidth < 900 ? "100%" : "35%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ marginRight: "25px" }}>
              <AiOutlineShoppingCart
                style={{ color: payin ? "#599f22" : "gray", fontSize: "40px" }}
              />
            </div>
            <div
              style={{
                color: payin ? "#599f22" : "gray",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Billing and Confirm
            </div>
          </div>
        </div>

        <div style={{ display: accin ? "block" : "none" }}>
          {" "}
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
                name="name"
                error={errorName ? true : false}
                onChange={handle_Business_Info}
                onKeyUp={() => setErrorName(false)}
                size="small"
                required
                style={{ margin: "20px auto" }}
                fullWidth
                id="outlined-basic"
                label="Legal Business Name"
                variant="outlined"
              />

              <TextField
                name="register_no"
                onChange={handle_Business_Info}
                size="small"
                style={{ margin: "20px auto" }}
                fullWidth
                id="outlined-basic"
                label="Register No."
                variant="outlined"
              />

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  color: "gray",
                  justifyContent: "space-between",
                  margin: "10px auto 10px auto",
                }}
              >
                <div>
                  <div style={{ color: "gray" }}>Country</div>
                  <CountryDropdown
                    name="country"
                    defaultOptionLabel="Select country"
                    style={{
                      height: "40px",
                      width: "100%",
                      color: "gray",
                      outline: "none",
                    }}
                    value={state.Country_Business}
                    onChange={(val) => selectCountry_Business(val)}
                  />
                </div>

                <div style={{ width: "45%" }}>
                  <div style={{ color: "gray" }}>Reside State</div>

                  <RegionDropdown
                    name="reside_state"
                    defaultOptionLabel="State in which business resides"
                    style={{ height: "40px", width: "100%", color: "gray" }}
                    country={state.Country_Business}
                    value={state.Region_Business}
                    onChange={(val) => selectRegion_Business(val)}
                  />
                </div>
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
              Primary point of contact
            </div>
            <div style={{ padding: "30px 35px" }}>
              <div>
                <TextField
                  error={errorEmail ? true : false}
                  name="email"
                  onKeyUp={() =>
                    setErrorEmail(
                      ValidateEmail(sellersignupdata_user.email) ? false : true
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
                    name="password"
                    onChange={handle_User_Info}
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
                    name="confirm_password"
                    onChange={handle_User_Info}
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
                    name="first_name"
                    onChange={handle_User_Info}
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
                    name="last_name"
                    onChange={handle_User_Info}
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
                  onChange={(phone) =>
                    setSellerSignupData_user({
                      ...sellersignupdata_user,
                      phone,
                    })
                  }
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
              onClick={handleAcc}
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

        <div style={{ display: warein ? "block" : "none" }}>
          {" "}
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
              Warehouse Information
            </div>

            <div style={{ padding: "30px 35px" }}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  color: "gray",
                  justifyContent: "space-between",
                  margin: "10px auto 10px auto",
                }}
              >
                <CountryDropdown
                  defaultOptionLabel="Select country"
                  style={{
                    height: "40px",
                    width: "100%",
                    color: "gray",
                    outline: "none",
                  }}
                  value={state.Country_Warehouse}
                  onChange={(val) => selectCountry_Warehouse(val)}
                />
              </div>

              <TextField
                size="small"
                required
                style={{ margin: "10px auto" }}
                fullWidth
                id="outlined-basic"
                label="Warehouse Email"
                name="email"
                onChange={handle_WareHouse_Info}
                variant="outlined"
              />
              {/* 
              <Form.Select
                aria-label="Default select example"
                size="lg"
                className="select-email"
                style={{
                  color: "gray",
                  fontSize: "16px",
                  margin: "10px auto",
                }}
              >
                <option>Address type*</option>
                <option value="business">Business</option>
                <option value="residential">Residential</option>
              </Form.Select> */}

              <TextField
                size="small"
                required
                style={{ margin: "10px auto" }}
                fullWidth
                id="outlined-basic"
                name="address_line_one"
                onChange={handle_WareHouse_Info}
                label="Address line 1"
                variant="outlined"
              />

              <TextField
                size="small"
                required
                style={{ margin: "10px auto" }}
                fullWidth
                name="address_line_two"
                onChange={handle_WareHouse_Info}
                id="outlined-basic"
                label="Address line 2"
                variant="outlined"
              />

              <TextField
                size="small"
                required
                style={{ margin: "10px auto" }}
                fullWidth
                id="outlined-basic"
                name="city"
                onChange={handle_WareHouse_Info}
                label="City"
                variant="outlined"
              />

              <RegionDropdown
                defaultOptionLabel="Select state"
                style={{
                  height: "40px",
                  width: "100%",
                  color: "gray",
                  margin: "5px auto",
                }}
                country={state.Country_Warehouse}
                value={state.Region_Warehouse_2}
                onChange={(val) => selectRegion_Warehouse_2(val)}
              />

              <TextField
                size="small"
                required
                style={{ margin: "10px auto" }}
                fullWidth
                id="outlined-basic"
                name="zip_code"
                onChange={handle_WareHouse_Info}
                label="Zip/Postal code"
                variant="outlined"
              />

              <TextField
                size="small"
                required
                style={{ margin: "10px auto" }}
                fullWidth
                id="outlined-basic"
                name="phone"
                onChange={handle_WareHouse_Info}
                label="Phone number"
                variant="outlined"
              />

              <TextField
                size="small"
                required
                style={{ margin: "10px auto" }}
                fullWidth
                id="outlined-basic"
                name="fax"
                onChange={handle_WareHouse_Info}
                label="Fax number"
                variant="outlined"
              />

              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  margin: "10px 0px",
                }}
              >
                Shipping Preferences
              </div>

              <FormControlLabel
                control={
                  <Checkbox
                    checked={is_dock ? false : true}
                    onChange={handle_is_dock}
                  />
                }
                label="Loading dock"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={is_liftgate ? false : true}
                    onChange={handle_is_lift_gate}
                  />
                }
                label="Liftgate required"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={is_localpickup ? false : true}
                    onChange={handle_is_localpickup}
                  />
                }
                label="Allow local pickup"
              />

              <TextField
                size="small"
                multiline={true}
                rows={4}
                maxRows={4}
                required
                style={{ margin: "10px auto" }}
                fullWidth
                name="additional_note"
                onChange={handle_WareHouse_Info}
                id="outlined-basic"
                label="Additional restrictions or notes"
                variant="outlined"
              />

              <div>
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
              onClick={handleWare}
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

        <div style={{ display: payin ? "block" : "none" }}>
          {" "}
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
              Contact Information
            </div>

            <div style={{ padding: "30px 35px" }}>
              <TextField
                size="small"
                required
                style={{ margin: "20px auto" }}
                fullWidth
                id="outlined-basic"
                label="First Name"
                variant="outlined"
              />

              <TextField
                size="small"
                required
                style={{ margin: "20px auto" }}
                fullWidth
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
              />

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

              <TextField
                size="small"
                required
                style={{ margin: "20px auto" }}
                fullWidth
                id="outlined-basic"
                label="Company / Organization Name"
                variant="outlined"
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
            <div style={{ padding: "30px 35px" }}>
              <TextField
                size="small"
                required
                style={{ margin: "20px auto" }}
                fullWidth
                id="outlined-basic"
                label="Card Number"
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
                    width: windowWidth < 1200 ? "100%" : "30%",
                  }}
                >
                  <TextField
                    size="small"
                    required
                    fullWidth
                    id="outlined-basic"
                    label="Expiration Month"
                    variant="outlined"
                  />
                </div>

                <div
                  style={{
                    width: windowWidth < 1200 ? "100%" : "30%",
                    margin: windowWidth < 1200 ? "20px auto" : "",
                  }}
                >
                  <TextField
                    size="small"
                    required
                    fullWidth
                    id="outlined-basic"
                    label="Expiration Year"
                    variant="outlined"
                  />
                </div>

                <div
                  style={{
                    width: windowWidth < 1200 ? "100%" : "30%",
                    margin: windowWidth < 1200 ? "20px auto" : "",
                  }}
                >
                  <TextField
                    size="small"
                    required
                    fullWidth
                    id="outlined-basic"
                    label="CVV"
                    variant="outlined"
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
                    label="Street Address"
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
                    label="Address 2"
                    variant="outlined"
                  />
                </div>
              </div>

              <TextField
                size="small"
                required
                style={{ margin: "10px auto" }}
                fullWidth
                id="outlined-basic"
                label="ZIP / POSTAL"
                variant="outlined"
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
            <div style={{ padding: "30px 35px" }}>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "#599f22",
                  marginBottom: "15px",
                }}
              >
                Order Summary
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "grey" }}>Basic Subscription Plan</span>
                <span style={{ fontWeight: 700 }}>$99.00 USD</span>
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
            <div style={{ padding: "30px 35px" }}>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "#599f22",
                  marginBottom: "15px",
                }}
              >
                Coupon Code
              </div>
              <div style={{ display: "flex" }}>
                <input
                  style={{
                    color: "grey",
                    height: "40px",

                    borderColor: "#599f22",
                  }}
                />
                <Button
                  style={{
                    fontWeight: 700,
                    marginLeft: "15px",
                    color: "#FFFFFF",
                    background: "#599f22",
                  }}
                >
                  Add
                </Button>
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
            <div style={{ padding: "30px 35px" }}>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "#599f22",
                  marginBottom: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span> Sub Total</span>
                <span style={{ fontSize: "14px", color: "#444444" }}>
                  $ 99.00 USD
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "grey" }}>Order Total</span>
                <span style={{ fontWeight: 700 }}>$99.00 USD</span>
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
              onClick={handleSubscribe}
              style={{
                width: windowWidth < 1200 ? "100%" : "100%",
                padding: "10px 100px",
                background: "#599f22",
                color: "#FFFFFF",
                textTransform: "none",
              }}
            >
              Skip & Subscribe
            </Button>
          </div>
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
            width: windowWidth < 1200 ? "90%" : "25%",
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
            onClick={() => (window.location.href = "/contactus")}
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
