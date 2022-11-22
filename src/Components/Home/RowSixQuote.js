import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Card, Button } from "react-bootstrap";
import { GrFormNextLink, GrLinkPrevious } from "react-icons/gr";
import { ReactComponent as Prev } from "../../Constants/Svgs/next.svg";
import { ReactComponent as Next } from "../../Constants/Svgs/prev.svg";
import { ReactComponent as Testi } from "../../Constants/Svgs/testimonial.svg";

import * as h from "./home.styled";

const breakPoints = [{ width: 1920, itemsToShow: 1 }];

const RowSixQuote = () => {
  return (
    <h.RowSix>
      <div
        style={{
          textAlign: "center",
          fontSize: "45px",
          fontWeight: "700",
          color: "#599F22",
          width: "80%",
          margin: "20px auto 40px auto",
        }}
      >
        Trusted by small business owners from all over the world
      </div>
      <Carousel
        breakPoints={breakPoints}
        prevIcon={
          <span
            style={{
              background: "green",
              padding: "15px 20px",
              borderRadius: "10px",
            }}
          >
            <Prev style={{ fontSize: "28px" }} />
          </span>
        }
        nextIcon={
          <span
            style={{
              background: "green",
              padding: "15px 20px",
              borderRadius: "10px",
            }}
          >
            <Next style={{ fontSize: "28px" }} />
          </span>
        }
      >
        <Carousel.Item>
          <Card
            id="card"
            style={{
              width: "50%",
              height: "312px",
              background: "#F7FAF6",
              borderRadius: "8px",
              margin: "50px auto ",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "88px",
                width: "88px",
                borderRadius: "50%",
                background: " #599F22",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Testi style={{ margin: "auto" }} />
            </div>

            <div
              style={{
                height: "fit-content",
                width: "70%",
                margin: "auto",
                fontSize: "14px",
                textAlign: "center",
                color: "#666666",
              }}
            >
              Tanahair is the friendliest and most efficient company I have ever
              used. The whole thing takes time to introduce the product and as a
              result puts forward only the best opportunities that really suit
              you. they help from start to finish to create a great product
              identity for your company
            </div>

            <div style={{ fontWeight: "700", color: "#333333" }}>
              Shalima Hayden
            </div>
            <div
              style={{
                color: "#666666",
                fontSize: "12px",
                paddingBottom: "20px",
              }}
            >
              Product Designer
            </div>
          </Card>
        </Carousel.Item>
      </Carousel>
    </h.RowSix>
  );
};

export default RowSixQuote;
