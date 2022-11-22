import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Form } from "react-bootstrap";
import { create_support } from "../../HTTP_REQUESTS/api_";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contact = () => {
  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [age, setAge] = React.useState("");
  const [age2, setAge2] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const [formData, setFormData] = useState();

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    create_support(formData).then((res) => {
      if(res.data.success === 1){
        setOpen(true);
        window.location.reload();
      }
    });
  };


  useEffect(() => {
    setFormData({ ...formData, is_hidden: 0 });
    function reportWindowSize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", reportWindowSize);
    return () => window.removeEventListener("resize", reportWindowSize);
  }, []);

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Your message has been submitted!
        </Alert>
      </Snackbar>

      <div
        style={{
          width: "90%",
          margin: "50px  auto 80px auto",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: windowWidth < 1200 ? "column" : "row",
        }}
      >
        <div
          style={{
            width: windowWidth < 1200 ? "100%" : "500px",
            height: "100%",
            marginBottom: windowWidth < 1200 ? "50px" : "0px",
          }}
        >
          <div
            style={{
              fontSize: windowWidth < 1200 ? "25px" : "35px",
              fontWeight: 700,
              color: "#599f22",
            }}
          >
            Contact Us
          </div>
          <div
            style={{ fontWeight: 400, fontSize: "18px", paddingBottom: "25px" }}
          >
            <ul>
              <li>
                Questions about buying liquidation merchandise or need help with
                an existing order?
              </li>
              <li>
                Sellers looking for a solution for your returned, excess, and
                liquidation inventory?
              </li>
              <li>Member of the media?</li>
            </ul>
          </div>

          <div
            style={{
              fontWeight: 700,
              fontSize: windowWidth < 1200 ? "20px" : "25px",
              color: "#599f22",
              paddingBottom: "15px",
            }}
          >
            Fill out this form, tell us how we can help and we’ll be in touch
            soon!
          </div>
          <div style={{ fontWeight: 400, fontSize: "18px" }}>
            <ul>
              <li>No middleman. No markups.</li>
              <li>All lot sizes, product categories, and price points.</li>
              <li>No Surprises. Bid and buy with confidence.</li>
              <li>
                A dedicated customer service team and a buyer education center
                to help grow your business.
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            width: windowWidth < 1200 ? "100%" : "500px",
          }}
        >
          <div
            style={{
              height: "fit-content",
              width: windowWidth < 1200 ? "100%" : "100%",
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
                required
                style={{ margin: "10px auto" }}
                size="small"
                fullWidth
                id="outlined-basic"
                label="First Name"
                name="first_name"
                onChange={handleFormChange}
                variant="outlined"
              />

              <TextField
                required
                style={{
                  margin: "10px auto",
                  display: windowWidth < 1200 ? "block" : "none",
                }}
                size="small"
                fullWidth
                id="outlined-basic"
                label="Last Name"
                name="last_name"
                onChange={handleFormChange}
                variant="outlined"
              />
              <TextField
                required
                style={{ margin: "10px auto" }}
                size="small"
                fullWidth
                id="outlined-basic"
                label="Email"
                name="email"
                onChange={handleFormChange}
                variant="outlined"
              />
              <TextField
                required
                style={{ margin: "10px auto" }}
                size="small"
                fullWidth
                id="outlined-basic"
                label="Company Name"
                name="company_name"
                onChange={handleFormChange}
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
                required
                style={{
                  margin: "10px auto",
                  display: windowWidth < 1200 ? "none" : "block",
                }}
                size="small"
                fullWidth
                id="outlined-basic"
                label="Last Name"
                name="last_name"
                onChange={handleFormChange}
                variant="outlined"
              />
              <TextField
                required
                style={{ margin: "10px auto" }}
                size="small"
                fullWidth
                id="outlined-basic"
                label="Phone Number"
                name="phone"
                onChange={handleFormChange}
                variant="outlined"
              />
              <Form.Select
                required
                aria-label="Default select example"
                size="lg"
                className="select-email"
                name="business_location"
                onChange={handleFormChange}
                style={{
                  color: "gray",
                  fontSize: "16px",
                  margin: "10px auto",
                }}
              >
                <option>Business Location*</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="Europe">Europe</option>
                <option value="Asia & Pasific">Asia</option>
                <option value="Africa">Africa</option>
                <option value="Middle East">Middle East</option>
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
                name="message"
                onChange={handleFormChange}
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
                name="is_followed"
                onChange={handleFormChange}
                style={{
                  color: "gray",
                  fontSize: "16px",
                  margin: "10px auto",
                }}
              >
                <option value="">Stay Up To Date With Hanger Stock</option>
                <option value={0}>
                  No, do not send me Hanger Stock marketing emails
                </option>
                <option value={1}>
                  Yes, please send me Hanger Stock marketing emails
                </option>
              </Form.Select>
            </div>
            <Button
              onClick={handleSubmit}
              style={{
                margin: "20px 0px 20px auto",
                padding: "10px 30px",
                background: "#599f22",
                color: "#FFFFFF",
                borderRadius: "10px",
                textTransform: "none",
                width: windowWidth < 1200 ? "100%" : "100%",
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>

      <div
        style={{
          fontSize: "35px",
          margin: "150px auto",
          width: windowWidth < 1200 ? "90%" : "fit-content",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          flexDirection: windowWidth < 890 ? "column" : "row",
        }}
      >
        <span
          style={{
            fontSize: "30px",
            width: windowWidth < 1200 ? "90%" : "fit-content",
            fontWeight: 700,
            marginRight: "20px",
          }}
        >
          {" "}
          Looking for Customer Support?
        </span>

        <span
          style={{
            fontSize: "18px",
            padding: "10px 20px",
            background: "#599f22",
            borderRadius: "10px",
            color: "#FFFFFF",
            fontWeight: 600,
            cursor: "pointer",
            margin: windowWidth < 1200 ? "20px" : "",
          }}
        >
          info@hangerstock.com
        </span>
      </div>

      <div
        style={{
          width: "fit-content",
          margin: "150px auto",
        }}
      >
        <div
          style={{
            width: "100%",
            fontSize: "35px",
            fontWeight: "600",
            color: "#599f22",
          }}
        >
          Our Offices
        </div>

        <div
          style={{
            width: "100%",
            fontSize: "20px",
            fontWeight: "600",
            color: "grey",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          HEADQUARTERS
        </div>
        <div style={{}}>
          <div style={{ fontSize: "20px", fontWeight: "600" }}>City Name</div>
          <div style={{ fontSize: "18px", padding: "5px" }}>
            <div>Addresses</div>
            <div>Addresses</div>
            <div>Addresses</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
