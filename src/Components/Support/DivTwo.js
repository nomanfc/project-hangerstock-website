import React, { useState, useEffect } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import * as d from "./Support.styled";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
 
  },
  "&:before": {
    display: "none",
  },
  marginBottom:"10px",
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const DivTwo = () => {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

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

  return (
    <div style={{ padding: "10px 15px" }}>
      <d.DivInnerCon>
        <div
          style={{
            color: "#599f22",
            fontSize: windowWidth < 1200 ? "20px" : "30px",
            paddingBottom: "30px",
            fontSize: "30px",
            fontWeight: 700,
            textAlign:"center",
            marginBottom: "50px"
          }}
        >
          Frequently Asked Questions
        </div>
        <div style={{ width: windowWidth < 1200 ? "100%" : "75%", margin:"auto" }}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>How do I apply? Is there any cost to me?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                For any Marketplaces you are interested in, select “Register” in
                the top right of the marketplace page. Please note, each
                marketplace will have their own requirements for registering as
                it pertains to where your business is located and the
                documentation that will be required. Reference the FAQ section
                within any specific marketplace for more information on that
                seller’s requirements. There is NO cost to you!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>
                Why hasn’t my application been approved yet?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Please allow up to two full business days for your application
                to be approved. If your pending application has not been
                approved, please ensure you have provided proper documentation
                and contact us for assistance.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>
                I am an exporter located in the United States. Can I apply?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes! As a US Exporter, a State Sales Tax ID (or equivalent for
                your state) will be required for registration, not including
                states that do not charge sales tax. Please note that many
                sellers will have export restrictions identified in their Terms
                of Purchase. Please read carefully prior to bidding.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <Typography>How do I bid?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Once approved and logged in to your marketplace account, you
                will be able to navigate to any live auction and place your
                Proxy Bid. The auction will display the minimum bid amount
                necessary to participate in the auction. Once the bid amount has
                been entered, click the “Bid Now” button. The system will force
                a pop-up for you to confirm your bid. Take this moment to review
                the bid for typos, errors, etc, and ensure the auction is
                something you want (double check the product, value, condition,
                etc). HangerStock considers bids as a commitment to pay with the
                information available on the auction, and we encourage that all
                bids be placed with that intent.
              </Typography>
              <img
                src={require("../../Constants/images/howtobid.png")}
                style={{
                  height: "350px",
                  width: "100%",
                  objectFit: "fill",
                }}
              ></img>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              aria-controls="panel5d-content"
              id="panel5d-header"
            >
              <Typography>What is proxy bidding?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div>
                  {" "}
                  All bids placed on a marketplace hosted by Hagerstock act as
                  “proxy” bids.{" "}
                </div>
                <div style={{ marginTop: "10px" }}>
                  {" "}
                  To get the most out of this system, it is best to bid the
                  highest amount you are willing to pay, which is known as your
                  maximum bid. Once entered, the system will manage the bidding
                  for you, acting as your proxy.{" "}
                </div>
                <div style={{ marginTop: "10px" }}>
                  Example: An auction has a starting bid of $1000. You decide
                  the highest you would pay for the auction is $5000, so you
                  enter that as your maximum bid. You are now winning the
                  auction at $1000.{" "}
                </div>
                <div style={{ marginTop: "10px" }}>
                  {" "}
                  If another bidder comes in and bids $1100 as their maximum,
                  then your bid of $5000 will automatically outbid them one
                  increment higher as your proxy. You are now winning the
                  auction at $1125 without bidding a second time. The system
                  will continue to automatically outbid other bidders as your
                  proxy, but will never exceed your maximum bid of $5000.{" "}
                </div>
                <div style={{ marginTop: "10px" }}>
                  If another bidder inputs a maximum bid over $5000, then you
                  will be outbid, and have the choice to input a new maximum bid
                  to act as your proxy, or move on to another auction.
                </div>
                <div style={{ marginTop: "10px" }}>
                  The bid interval amount only applies to the minimum bid
                  amount. Maximum bids from competing bidders can be within any
                  amount of each other. In the example above, when you are
                  winning the auction at $1125 with your maximum bid of $5,000,
                  the minimum bid amount for others wanting to participate would
                  be $1150.{" "}
                </div>
                <div style={{ marginTop: "10px" }}>
                  {" "}
                  If a bidder chose to input a maximum bid of $5,001, the system
                  will accept the bid because it exceeds the minimum amount. You
                  lose the bid because their maximum bid is greater than yours
                  by one dollar. You will be given the opportunity to input a
                  new minimum bid of $5026 or move on to another auction.
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              aria-controls="panel6d-content"
              id="panel6d-header"
            >
              <Typography>
                Why does Hanger stock use proxy bidding and popcorn bidding?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Proxy bidding (or submitting your maximum bid) allows our system
                to bid on your behalf (not to exceed the maximum bid amount).
                This will allow you to win the auction at the lowest possible
                price while beating out other bidders automatically. Please note
                that your maximum bid cannot be seen by other bidders. Only the
                current winning bid will be shown. If a bid is placed in the
                last several minutes of an auction, the auction end time will
                extend for an additional several minutes. This is called
                “Popcorn Bidding” and gives all bidders an equal chance of
                winning an auction if a last minute bid is placed. The exact
                number of minutes may vary from seller to seller. Popcorn
                Bidding is used to simulate a live auction and prevents other
                bidders from “sniping” an auction at the last second.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
          >
            <AccordionSummary
              aria-controls="panel8d-content"
              id="panel8d-header"
            >
              <Typography>
                Are there actual images of the merchandise?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Images used in live auctions on the HangerStock platform are
                typically stock or representative photos unless specifically
                stated otherwise on the auction page. Please refer to the
                auction manifest and details section for the most accurate
                information available.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel9"}
            onChange={handleChange("panel9")}
          >
            <AccordionSummary
              aria-controls="panel9d-content"
              id="panel9d-header"
            >
              <Typography>Is Hanger Stock the seller?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                No. HangerStock is an online business to business auction
                liquidation service. We do not sell any product but rather host
                auctions so that various sellers can liquidate their excess
                stock. You can find a complete list of auction sites we operate
                at our marketplaces page.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel10"}
            onChange={handleChange("panel10")}
          >
            <AccordionSummary
              aria-controls="panel10d-content"
              id="panel10d-header"
            >
              <Typography>
                Can I buy merchandise without bidding on it? Can I inspect the
                items before bidding?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                All merchandise sold on the Hanger Stock platform is in auction
                format only. Auctions cannot be purchased at a fixed price.
                Merchandise cannot be inspected prior to bidding. You can find
                all available information detailed in the Auction Title/Details,
                Manifest, and Conditions pages.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel11"}
            onChange={handleChange("panel11")}
          >
            <AccordionSummary
              aria-controls="panel11d-content"
              id="panel11d-header"
            >
              <Typography>
                How large are the lots being sold and what is the condition?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can find details regarding lot size, shipping origin, and
                more from the auction title, manifest, and details section. A
                “Conditions” link exists at the bottom of any marketplace page.
                It outlines the specific condition definition for that
                marketplace. .
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel12"}
            onChange={handleChange("panel12")}
          >
            <AccordionSummary
              aria-controls="panel12d-content"
              id="panel12d-header"
            >
              <Typography>
                What is the retail price listed for the auctions? What does this
                mean?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The retail price listed in the auction title is also known as
                the original retail price or MSRP (Manufacturer Suggested Retail
                Price). It is the highest possible price at which the product
                was offered when it was new to market. HangerStock does not verify
                original retail values submitted by sellers. It is the buyer’s
                responsibility to research any and all current retail prices and
                values before placing their bid.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel13"}
            onChange={handleChange("panel13")}
          >
            <AccordionSummary
              aria-controls="panel13d-content"
              id="panel13d-header"
            >
              <Typography>Can I cancel my bid?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Placing a bid means you agree to buy the auction at the bid
                price, including any additional costs such as shipping, a
                buyer’s premium if applicable, etc. If you accidentally enter a
                wrong bid amount (for example, you entered $1000 instead of
                $100) you can click on the Cancel link within the bid
                confirmation pop-up window to change your bid amount prior to
                submission. All bids are considered binding and they will affect
                how other users bid within the auction and the auction’s final
                selling price. If a current winning bid is disqualified for any
                reason, HangerStock will restore the next highest bid to winning
                status. HangerStock reserves the right in our sole discretion to
                cancel or not cancel a bid.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel14"}
            onChange={handleChange("panel14")}
          >
            <AccordionSummary
              aria-controls="panel14d-content"
              id="panel14d-header"
            >
              <Typography>
                When is payment due? What do I do once I’ve won an order?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                All payments are due within two business days of the auction end
                date. When you have won an order, please review your selected
                shipping address or opt in/out of a liftgate for your order as
                needed or applicable. These details cannot be changed once the
                order has been marked as paid. Please allow up to two full
                business days for your payment to be processed.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel15"}
            onChange={handleChange("panel15")}
          >
            <AccordionSummary
              aria-controls="panel15d-content"
              id="panel15d-header"
            >
              <Typography>What forms of payment are accepted?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {`In Hanger Stock, there are many situations where a transaction
                is not trusted between a buyer and a seller. Escrow service is
                provided. Our primary method of payment is via wire transfer.
                Detailed instructions will be provided on your “Bid Won”
                confirmation email and can also be found on your Orders Page.
                (Account > Orders > Order#) If you are unfamiliar with sending a
                wire payment, please contact your financial institution directly
                for assistance. Wire transfer payments sent to the US from a
                non-US bank may incur an intermediary bank fee. For more
                information regarding the intermediary bank that is used by your
                financial institution and the fees that they take, please
                contact your bank directly. We accept PayPal on auctions
                transacted in USD where Hanger Stock collects payment and where
                the total payment due is $1000 USD or less. For detailed
                instructions please click here. Using an alternative payment
                method not listed as an accepted payment method above or
                indicated on your Bid Won email, will increase risk that your
                payment will be lost, delayed, and/or returned, thus risking
                order cancellation for nonpayment. If you have a credit on your
                account, please see this link on how to use it.`}
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel16"}
            onChange={handleChange("panel16")}
          >
            <AccordionSummary
              aria-controls="panel16d-content"
              id="panel16d-header"
            >
              <Typography>What does “escrow” mean?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                An escrow is a financial and legal agreement designed to protect
                Buyers and Sellers in a transaction. For a fee, an independent
                third party holds payment until everyone fulfills their
                responsibilities in the transaction. With an escrow payment, the
                Seller will only receive the funds when the Buyer has received
                and accepted the products and/or services that are part of the
                transaction. However, the Seller knows they will receive payment
                because Escrow.com is holding the funds on their behalf.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel17"}
            onChange={handleChange("panel17")}
          >
            <AccordionSummary
              aria-controls="panel17d-content"
              id="panel17d-header"
            >
              <Typography>When to Use an Escrow Service</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                People use escrow services for online high-value transactions
                when they don’t know each other. We protect Buyers, Sellers, and
                Brokers equally, thereby eliminating any risk of conducting
                transactions with unknown parties. No matter where you’re
                selling or buying goods and services online, whether an auction
                site, an online marketplace, or a B2B e-commerce site, an escrow
                service will assure your safety. “Buy or sell anything online
                safely, securely, and confidentially.” Escrow.com is a regulated
                and audited service that you can trust to protect you. By
                treating both parties involved in the transaction equally,
                Escrow.com makes buying and selling online much safer.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel18"}
            onChange={handleChange("panel18")}
          >
            <AccordionSummary
              aria-controls="panel18d-content"
              id="panel18d-header"
            >
              <Typography>What can you buy or sell with Escrow.com?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Escrow.com can help you safely buy or sell a variety of goods
                and services online. From digital products to a variety of
                high-value merchandise, Escrow.com offers priceless peace of
                mind when you’re transacting with unknown parties.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel19"}
            onChange={handleChange("panel19")}
          >
            <AccordionSummary
              aria-controls="panel19d-content"
              id="panel19d-header"
            >
              <Typography>Can I combine multiple payments together?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You may always combine payment for multiple orders so long as no
                payment is late, each unique order number is listed in the wire
                notes section, and the bank details in your Bid Won email for
                each order are the same.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel20"}
            onChange={handleChange("panel20")}
          >
            <AccordionSummary
              aria-controls="panel20d-content"
              id="panel20d-header"
            >
              <Typography>What currency are auctions in?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The currency of an auction can be found in the auction’s title
                and next to the “Bid now” button. The currency will vary by
                marketplace and even by auction. Please always reference the
                live auction to confirm the correct currency prior to bidding.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel21"}
            onChange={handleChange("panel21")}
          >
            <AccordionSummary
              aria-controls="panel21d-content"
              id="panel21d-header"
            >
              <Typography>
                Will tax be added to my order total? Is VAT added to my order
                total?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                US Sales Tax will not be added to USD order totals. Sales Tax is
                to be collected by the winning buyer at the time of resale. For
                orders transacted in Canadian Dollars, GST/HST tax will be
                calculated and added to the order total. VAT must be paid for
                all orders transacted within Eurozone countries and the United
                Kingdom. The amount will be calculated for you & added to the
                order total.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel22"}
            onChange={handleChange("panel22")}
          >
            <AccordionSummary
              aria-controls="panel22d-content"
              id="panel22d-header"
            >
              <Typography>
                I am no longer interested in the auction I won. Do I still have
                to pay?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                All bids placed on HangerStock marketplaces are binding. In the
                event that you do not pay for your order, you may be given the
                chance to pay a reinstatement fee to prevent the deactivation of
                your account. The fee amounts may vary by seller and can be
                found in the Terms of Purchase/Use and-or within the FAQ section
                for each individual marketplace.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel23"}
            onChange={handleChange("panel23")}
          >
            <AccordionSummary
              aria-controls="panel23d-content"
              id="panel23d-header"
            >
              <Typography>How does shipping work?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The shipping method will vary depending on the specific auction
                and marketplace. Since Hanger Stock does not sell any product,
                HangerStock does not manage or facilitate the shipping of that
                product. Please review the shipping details on each auction page
                prior to placing a bid. Most auctions are binding shipping,
                which means you will pay the calculated shipping cost displayed
                on the live auction page, and the assigned carrier will arrange
                delivery to your selected address. For auctions marked Buyer
                Arranges Shipping, a shipping estimate may be displayed on the
                live auctions page to give you an idea of the shipping cost.
                Once the order has been processed as paid, you will contract
                with a carrier of your choice using the final shipment details
                provided in your payment confirmation email. There are also Free
                and Fixed cost shipping methods where you will pay the price, if
                any, listed in the shipping details page.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel24"}
            onChange={handleChange("panel24")}
          >
            <AccordionSummary
              aria-controls="panel24d-content"
              id="panel24d-header"
            >
              <Typography>
                Can I pick up the merchandise myself? Can I just pay when I pick
                it up?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                For select Buyer Arranges Shipping orders, you may have the
                option to collect the merchandise yourself so long as you have
                the proper shipping equipment to do so. Please review the
                shipping details on any live auction prior to bidding to
                determine if self pick up will be allowed. Unless specifically
                stated otherwise on an auction listing, you will not be able to
                collect the merchandise yourself or opt out of the seller’s
                preferred shipping method. You must complete payment prior to
                making any shipping arrangements.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel25"}
            onChange={handleChange("panel25")}
          >
            <AccordionSummary
              aria-controls="panel25d-content"
              id="panel25d-header"
            >
              <Typography>
                What should I know about receiving my shipment?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Following the procedures and best practices below will help
                ensure that your shipment is received, reviewed, and unpacked
                properly, which will reduce issues. • Do not refuse the shipment
                unless it is absolutely the wrong order. • Ensure that the
                pallet or box count matches your invoice and bill of lading.
                Take note of all identification numbers. • Review the delivery
                receipt, and sign only for services performed such as liftgate,
                inside delivery, or residential delivery. Keep a copy of your
                delivery receipt. • If you have the ability, check the weight of
                what you received against the weight on the bill of lading. If
                there is a large discrepancy, count the inventory to confirm. •
                Inspect the condition. If there are signs of excessive damage
                created by obvious carrier negligence, take pictures while the
                goods are in the trailer. In addition to taking photos, take
                detailed notes. Describe the issues, including pallet ID(s), on
                the delivery receipt or BOL. • Carefully unload and unpack your
                order. Be careful not to damage or misplace inventory that has
                already been received. • Keep copies of all forms and pictures
                for your records and in case you need to provide them to be
                reviewed. • Keeping in mind the original auction lot condition
                description, if further inspection reveals damage, stop.
                Document the issues, take pictures, and submit details by
                following these instructions.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel26"}
            onChange={handleChange("panel26")}
          >
            <AccordionSummary
              aria-controls="panel26d-content"
              id="panel26d-header"
            >
              <Typography>What if there is a problem with my order?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {`All merchandise is sold as is, but we encourage sellers to be as
                accurate as possible with the information provided on their
                auction listings. Please view the seller’s Terms of Purchase for
                information on the timeframe a dispute must be filed within to
                be eligible for consideration, along with any allowed variance
                percentage. To file a dispute, login and navigate to Account >
                Orders > Order# > Report an issue. Supporting documentation will
                be required to show how the order received is not as described.
                Supporting documentation may include but is not limited to:
                images to demonstrate the issue, a copy of the signed Bill of
                Lading (BOL) or other shipping documents, a highlighted copy of
                the manifest indicating the missing or damaged items.`}
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel27"}
            onChange={handleChange("panel27")}
          >
            <AccordionSummary
              aria-controls="panel27d-content"
              id="panel27d-header"
            >
              <Typography>I am approved but unable to login?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {`Sometimes your browser can cause login problems. Please try the
                following fixes: • Clear your browser’s cache, then close it and
                reopen it and try logging in again. • Try logging in with a
                different browser. Your Hanger stock password will be the same
                across all marketplaces. You can always reset it by clicking the
                “Forgot Your Password?” link right below the password field on
                the login page. You will then receive a password reset link in
                your email. If you do not see it please check your junk and spam
                folders.`}
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel28"}
            onChange={handleChange("panel28")}
          >
            <AccordionSummary
              aria-controls="panel28d-content"
              id="panel28d-header"
            >
              <Typography>
                How can I update my personal information/ change my password?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
               { `As an approved buyer, if you are logged in, go to Account > My
                Account. From here you can update all contact information or
                change the password on your account. You can also click the
                “Reset” link on the login page if you cannot remember your
                password.`}
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel29"}
            onChange={handleChange("panel29")}
          >
            <AccordionSummary
              aria-controls="panel29d-content"
              id="panel29d-header"
            >
              <Typography>How do I report a technical problem?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Prior to contacting Hanger Stock to report an issue, we ask that
                you go through the troubleshooting checklist below. If your
                issue persists, please click here to contact us. To be able to
                best assist you, please state the specific error you are
                experiencing, include answers to the troubleshooting questions,
                and provide a screenshot of the issue making sure the image
                includes the entirety of your browser, including the URL field.
                • What browser and version are you using? Do you experience the
                same issue in different browsers? • What type of device are you
                using? • Do you have any ad blocking software installed in your
                browser? • Have you attempted to reboot or clear your
                cache/cookies?
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </d.DivInnerCon>
    </div>
  );
};

export default DivTwo;
