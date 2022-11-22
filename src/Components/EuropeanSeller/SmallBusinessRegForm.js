import React, { useState, useEffect } from "react";

import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";

import { Form } from "react-bootstrap";

import "./style.css";

const RegForm = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [age, setAge] = React.useState("");
  const [age2, setAge2] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChange2 = (event) => {
    setAge2(event.target.value);
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

  return (
    <div>
      <div
        style={{
          margin: "20px auto 30px auto",
          fontSize: "15px",
          fontWeight: "600",
          color: "#444444",
          width: windowWidth < 1200 ? "90%" : "100%",
          textAlign: "center",
        }}
      >
        LET HANGER STOCK HELP YOU WITH YOUR LIQUIDATION OF EXCESS AND RETURNED
        MERCHANDISE
      </div>
      <div
        style={{
          fontSize: windowWidth < 1200 ? "30px" : "45px",
          fontWeight: 700,
          color: "#599F22",
          textAlign: "center",
          marginTop: "90px",
          width: windowWidth < 1200 ? "90%" : "30%",
          margin: "auto",
        }}
      >
        Ready to sort out your excess inventory?
      </div>

      <div
        style={{
          width: "25%",
          margin: "20px auto 30px auto",
          fontSize: "15px",
          fontWeight: "600",
          color: "#444444",
          width: windowWidth < 1200 ? "95%" : "30%",
          textAlign: "center",
        }}
      >
        Our team of auction specialists are here to help you set up your auction
        to maximize your returns. Contact us
      </div>
      <div
        style={{
          height: "fit-content",
          width: windowWidth < 1200 ? "95%" : "750px",
          margin: " auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            height: "fit-content",
            width: windowWidth < 1200 ? "100%" : "48%",
          }}
        >
          <TextField
            style={{ margin: "10px auto" }}
            size="small"
            fullWidth
            id="outlined-basic"
            label="First Name"
            variant="outlined"
          />

          <TextField
            style={{
              margin: "10px auto",
              display: windowWidth < 1200 ? "block" : "none",
            }}
            size="small"
            fullWidth
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
          />
          <TextField
            style={{ margin: "10px auto" }}
            size="small"
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            style={{ margin: "10px auto" }}
            size="small"
            fullWidth
            id="outlined-basic"
            label="Company Name"
            variant="outlined"
          />
        </div>
        <div
          style={{
            height: "fit-content",
            width: windowWidth < 1200 ? "100%" : "48%",
          }}
        >
          <TextField
            style={{
              margin: "10px auto",
              display: windowWidth < 1200 ? "none" : "block",
            }}
            size="small"
            fullWidth
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
          />
          <TextField
            style={{ margin: "10px auto" }}
            size="small"
            fullWidth
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
          />
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
            <option>Business Location</option>
            <option value="1">United States</option>
            <option value="2">Canada</option>
            <option value="3">Europe</option>
            <option value="4">Asia & Pacific</option>
            <option value="5">Africa</option>
            <option value="6">Middle East</option>
          </Form.Select>
        </div>
        <div
          style={{
            height: "150px",
            width: windowWidth < 1200 ? "100%" : "100%",
          }}
        >
          <TextField
            multiline={true}
            minRows={5}
            maxRows={5}
            style={{ margin: "10px auto" }}
            size="small"
            fullWidth
            id="outlined-basic"
            label="Message"
            variant="outlined"
          />
        </div>
        <div
          style={{
            height: "50px",
            width: windowWidth < 1200 ? "100%" : "100%",
          }}
        >
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
            <option value="1">Stay Up To Date With Hanger Stock</option>
            <option value="2">
              No, do not send me Hanger Stock marketing emails
            </option>
            <option value="3">
              Yes, please send me Hanger Stock marketing emails
            </option>
          </Form.Select>
        </div>
        <Button
          style={{
            margin: "20px 0px 20px auto",
            padding: "10px 30px",
            background: "#599f22",
            color: "#FFFFFF",
            borderRadius: "10px",
            textTransform: "none",
            width: windowWidth < 1200 ? "100%" : "fit-content",
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default RegForm;
