import React from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Step5 } from "./Svgs/step5.svg";
import { ReactComponent as Step4 } from "./Svgs/step4.svg";
import { ReactComponent as Step3 } from "./Svgs/step3.svg";
import { ReactComponent as Step2 } from "./Svgs/step2.svg";
import { ReactComponent as Step1 } from "./Svgs/step1.svg";

import * as d from "./Buyer.styled";

const Escrow = () => {
  const navigate = useNavigate();

  const tips = [
    {
      image: "../../Constants/images/smtip1.png",
      date: "22 JUNE 2021",
      min: "5",
      title: "Hanger Stock Lot Size",
      details:
        "Lorem ipsum dummy text for an article description.  These should be short, yet informative. Lorem ipsum dummy text for an article description.  These should be short, yet informative.. Lorem ipsum dummy text for an article description.  These should be short, yet informative..Lorem ipsum dummy text for an article description.  These should be short, yet informative.Lorem ipsum dummy text for an article description.  These should be short, yet informative..Lorem ipsum dummy text for an article description.  These should be short, yet informative.",
      link: "",
    },
  ];


  return (
    <div>
      <div
        style={{
          background: "#599f22",
          color: "#FFFFFF",
          textAlign: "center",
          fontSize: "45px",
          fontWeight: 700,
          padding: "35px",
        }}
      >
        How Hanger Stock Escrow Works?
        <div
          style={{
            color: "#FFFFFF",
            textAlign: "center",
            fontSize: "18px",
            fontWeight: 400,
            padding: "25px",
          }}
        >
          we are using most trusted{" "}
          <a
            style={{ color: "white", fontWeight: 700 }}
            href="https://escrow.com"
          >
            Escrow.com
          </a>{" "}
          for secure transections between buyer and seller.
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          width: "70%",
          margin: "100px auto 30px auto",
          fontSize: "25px",
          fontWeight: "600",
          color: "#599F22",
        }}
      >
        With <a href="https://escrow.com">Escrow.com</a> you can buy and sell
        anything safely without the risk of chargebacks. Truly secure payments.
        Here is how it works
      </div>

      <div
        style={{
          height: "fit-content",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "20px auto 250px auto",
        }}
      >
        <d.DivFourInnerCon>
          <d.DivRight>
            <d.Left>
              <d.ImageCon
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Step1 style={{ fontSize: "50px", margin: "auto" }} />
              </d.ImageCon>
            </d.Left>
            <d.Right>
              <div>
                <div>
                  <span
                    style={{
                      padding: "10px 10px",
                      marginRight: "15px",
                      background: " #599F22",
                      borderRadius: "10px",
                      color: "#FFFFFF",
                    }}
                  >
                    STEP 1
                  </span>
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#599F22",
                      fontWeight: 700,
                    }}
                  >
                    Buyer and Seller agree to terms
                  </span>
                </div>
                <div style={{ fontSize: "15px", marginTop: "20px" }}>
                  Either the Buyer or Seller initiates a transaction. After
                  registering at <a href="https://escrow.com">Escrow.com</a>,
                  all parties agree to the terms of the transaction.
                </div>
              </div>
            </d.Right>
          </d.DivRight>
          <d.DivLeft>
            <d.Right>
              <div>
                <div>
                  <span
                    style={{
                      padding: "10px 10px",
                      marginRight: "15px",
                      background: " #599F22",
                      borderRadius: "10px",
                      color: "#FFFFFF",
                    }}
                  >
                    STEP 2
                  </span>
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#599F22",
                      fontWeight: 700,
                    }}
                  >
                    Buyer pays Escrow
                  </span>
                </div>

                <div style={{ fontSize: "15px", marginTop: "20px" }}>
                  The Buyer submits a payment by approved payment method to our
                  secure Escrow Account,{" "}
                  <a href="https://escrow.com">Escrow.com</a> verifies the
                  payment, then the Seller is notified that funds have been
                  secured “In Escrow”.
                </div>
              </div>
            </d.Right>
            <d.Left>
              <d.ImageCon
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Step2 style={{ fontSize: "50px", margin: "auto" }} />
              </d.ImageCon>
            </d.Left>
          </d.DivLeft>
          <d.DivRight>
            <d.Left>
              <d.ImageCon
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Step3 style={{ fontSize: "50px", margin: "auto" }} />
              </d.ImageCon>
            </d.Left>
            <d.Right>
              <div>
                <div>
                  <span
                    style={{
                      padding: "10px 10px",
                      marginRight: "15px",
                      background: " #599F22",
                      borderRadius: "10px",
                      color: "#FFFFFF",
                    }}
                  >
                    STEP 3
                  </span>
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#599F22",
                      fontWeight: 700,
                    }}
                  >
                    Seller ships merchandise to Buyer
                  </span>
                </div>
                <div style={{ fontSize: "15px", marginTop: "20px" }}>
                  Upon payment verification, the Seller is authorized to send
                  the merchandise and submit tracking information.{""}
                  <a href="https://escrow.com">Escrow.com</a> verifies that the
                  Buyer receives the merchandise.
                </div>
              </div>
            </d.Right>
          </d.DivRight>

          <d.DivLeft>
            <d.Right>
              <div>
                <div>
                  <span
                    style={{
                      padding: "10px 10px",
                      marginRight: "15px",
                      background: " #599F22",
                      borderRadius: "10px",
                      color: "#FFFFFF",
                    }}
                  >
                    STEP 4
                  </span>
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#599F22",
                      fontWeight: 700,
                    }}
                  >
                    Buyer accepts merchandise.
                  </span>
                </div>

                <div style={{ fontSize: "15px", marginTop: "20px" }}>
                  The Buyer has a set number of days to inspect the merchandise
                  with the option to accept or reject it. If not approved, the
                  Buyer will raise a dispute and enter the dispute resolution
                  process.
                </div>
              </div>
            </d.Right>
            <d.Left>
              <d.ImageCon>
                <d.ImageCon
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Step4 style={{ fontSize: "50px", margin: "auto" }} />
                </d.ImageCon>
              </d.ImageCon>
            </d.Left>
          </d.DivLeft>
          <d.DivRight>
            <d.Left>
              <d.ImageCon
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Step5 style={{ fontSize: "50px", margin: "auto" }} />
              </d.ImageCon>
            </d.Left>
            <d.Right>
              <div>
                <div>
                  <span
                    style={{
                      padding: "10px 10px",
                      marginRight: "15px",
                      background: " #599F22",
                      borderRadius: "10px",
                      color: "#FFFFFF",
                    }}
                  >
                    STEP 5
                  </span>
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#599F22",
                      fontWeight: 700,
                    }}
                  >
                    Escrow pays the Seller.
                  </span>
                </div>
                <div style={{ fontSize: "15px", marginTop: "20px" }}>
                  If the merchandise is accepted,{" "}
                  <a href="https://escrow.com">Escrow.com</a> releases funds to
                  the Seller from the Escrow Account.
                </div>
              </div>
            </d.Right>
          </d.DivRight>
        </d.DivFourInnerCon>
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
              onClick={() => navigate("/contactus")}
            >
              Contact us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Escrow;
