import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Button from "@mui/material/Button";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { AiOutlineClose } from "react-icons/ai";
import ScrollToTop from "./scrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";

import NavLinks from "./Components/Commonparts/navlinks";
import Footer from "./Components/Commonparts/Footer";
import {
  drawerWidth,
  Main,
  AppBar,
  DrawerHeader,
} from "./Components/Commonparts/styled.js";

import Home from "./Components/Home/home.js";
// const Home = React.lazy(()=> import("./Components/Home/home.js"))

import Forbuyer from "./Components/ForBuyers/Forbuyer.js";
import Forseller from "./Components/ForSellers/forseller.js";
import ForsellerEurope from "./Components/EuropeanSeller/EuropeanSeller.js";
import Support from "./Components/Support/support.js";
import Shopauction from "./Components/ShopAuctions/shopauction";
import ShopAucLading from "./Components/ShopAuctions/ShopAuctionLanding";
import SellerAllAuctions from "./Components/ShopAuctions/SellerAllAuctions";
import MarketPlace from "./Components/MarketPlaces/MarketPlace";
import SmallBusiness from "./Components/ForSellers/SmallBusiness";
import EnterPrise from "./Components/ForSellers/EnterPriseBusiness";
import SellPhoneSellers from "./Components/ForSellers/SellPhoneSellers";
import BuyersBlog from "./Components/Blogs/Buyers/BuyersBlog";
import SellerBlog from "./Components/Blogs/Sellers/SellerBlog";
import Register from "./Components/RegitrationForm/Register";
import RegisterBuyer from "./Components/RegitrationForm/RegisterBuyer";
import AuctionDetail from "./Components/ShopAuctions/DetailsPage";
import Shipping from "./Components/Shipping/Shipping";
import ShippingDetails from "./Components/Shipping/DetailsPage";
import Escrow from "./Components/Escrow/Escrow";
import BuyersGuide from "./Components/ForBuyers/BuyersGude";
import About from "./Components/AboutUs/AboutUs";
import Terms from "./Components/TermsPolicy/Terms";
import Policy from "./Components/TermsPolicy/Policy";
import Contact from "./Components/ContactUs/Contact";
import ContactEnt from "./Components/ContactUs/ContactUsEnt";
import BuyerLogin from "./Components/BuyerLogin/BuyerLogin";
import Cookies from "js-cookie";
import TranslatorWidget from "react-translate-widget";

function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open, setOpen] = React.useState(false);
  const [disp, setDisp] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    function reportWindowSize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", reportWindowSize);
    return () => window.removeEventListener("resize", reportWindowSize);
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  var duplicate = 0;

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        layout:
          window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  window.onscroll = function () {
    scrollFunction2();
  };

  function scrollFunction2() {
    document.body.scrollTop > 2 || document.documentElement.scrollTop > 2
      ? setDisp(false)
      : setDisp(true);
  }

  return (
    <>
      <Router>
        <Box sx={{ display: "flex" }}>
          <ScrollToTop />
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <div
              style={{
                height: "fit-content",
                width: windowWidth < 1490 ? "95%" : "84%",
                margin: windowWidth < 1200 ? "10px 0px 0px 30px" : "auto",
                overFlow: "hidden",
                display: disp ? "flex" : "none",
              }}
            >
              <div
                style={{
                  width: "350px",
                  height: "28px",
                  overflow: "hidden",
                  marginLeft: "0%",
                }}
                id="google_translate_element"
              ></div>
            </div>
            <Toolbar>
              <NavLinks />
              <div style={{ display: windowWidth < 1300 ? "block" : "none" }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerOpen}
                  sx={{ ...(open && { display: "none" }) }}
                >
                  <MenuIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>

          <Main
            onClick={handleDrawerClose}
            style={{
              maxHeight: "100%",
              width: "100%",
            }}
            open={open}
          >
            <DrawerHeader />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/shopauctions" element={<ShopAucLading />} />
                <Route exact path="/allauctions" element={<Shopauction />} />
                <Route
                  exact
                  path="/auctiondetails"
                  element={<AuctionDetail />}
                />
                <Route
                  exact
                  path="/sellerauctions"
                  element={<SellerAllAuctions />}
                />
                <Route exact path="/sellers" element={<Forseller />} />
                <Route
                  exact
                  path="/sellerseurope"
                  element={<ForsellerEurope />}
                />
                <Route
                  exact
                  path="/smallbusiness"
                  element={<SmallBusiness />}
                />
                <Route
                  exact
                  path="/enterprisebusiness"
                  element={<EnterPrise />}
                />
                <Route
                  exact
                  path="/sellphonesellers"
                  element={<SellPhoneSellers />}
                />
                <Route path="/sellerblog/*" element={<SellerBlog />} />

                <Route exact path="/buyers" element={<Forbuyer />} />
                <Route exact path="/support" element={<Support />} />
                <Route exact path="/marketplace" element={<MarketPlace />} />
                <Route path="/buyersblog/*" element={<BuyersBlog />} />

                <Route exact path="/registration" element={<Register />} />
                <Route
                  exact
                  path="/registrationbuyer"
                  element={<RegisterBuyer />}
                />
                <Route exact path="/shipping" element={<Shipping />} />
                <Route
                  exact
                  path="/shippingdetails"
                  element={<ShippingDetails />}
                />
                <Route exact path="/escrow" element={<Escrow />} />
                <Route exact path="/aboutus" element={<About />} />
                <Route exact path="/guide" element={<BuyersGuide />} />
                <Route exact path="/terms" element={<Terms />} />
                <Route exact path="/privacypolicy" element={<Policy />} />
                <Route exact path="/contactus" element={<Contact />} />
                <Route exact path="/contactusent" element={<ContactEnt />} />
                <Route exact path="/buyerlogin" element={<BuyerLogin />} />
              </Routes>
            <Footer />
          </Main>

          <Drawer
            sx={{
              zIndex: 1000000000000,
              position: "absolute",
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
              },
              transition: " width 2s",
            }}
            variant="persistent"
            anchor="right"
            open={open}
          >
            <DrawerHeader style={{ height: "50px" }}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronLeftIcon />
                ) : (
                  <AiOutlineClose style={{ fontSize: "20px" }} />
                )}
              </IconButton>
            </DrawerHeader>

            <List>
              {[
                {
                  title: "Shop Auctions",
                  name: [
                    { sub: "How it works?", link: "/shopauctions" },
                    { sub: "All Auctions", link: "/allauctions" },
                  ],
                },
                {
                  title: "For Buyers",
                  name: [
                    { sub: "How it works?", link: "/buyers" },
                    { sub: "Buyers blog", link: "/buyersblog" },
                  ],
                },
                {
                  title: "For Sellers",
                  name: [
                    { sub: "How it works?", link: "/sellers" },
                    { sub: "Mobile seller", link: "/sellphonesellers" },
                    { sub: "European seller", link: "/sellerseurope" },
                    { sub: "Seller Blog", link: "/sellerblog" },
                  ],
                },
                {
                  title: "Support",
                  name: [
                    { sub: "Contact us", link: "/contactus" },
                    { sub: "FAQ", link: "/support" },
                  ],
                },
              ].map((data, index) => (
                <div key={index} style={{ padding: "10px 30px" }}>
                  <div
                    style={{
                      color: "#599f22",
                      fontWeight: 700,
                      fontSize: "15px",
                    }}
                  >
                    {data.title}
                  </div>
                  <div style={{ padding: "2px 10px" }}>
                    <div>
                      {data.name.map((data, index) => (
                        <div key={index}>
                          <Link
                            to={`${data.link}`}
                            style={{ textDecoration: "none" }}
                          >
                            <Button
                              onClick={handleDrawerClose}
                              style={{
                                textTransform: "none",
                                color: "#7A7A7A",
                                cursor: "pointer",
                                fontSize: "13px",
                                fontWeight: 600,
                              }}
                            >
                              {data.sub}
                            </Button>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <div
                style={{
                  color: "#7A7A7A",
                  fontWeight: 700,
                  fontSize: "15px",
                  padding: "5px 25px",
                }}
              >
                <div>
                  <Link to="/shipping" style={{ textDecoration: "none" }}>
                    <Button
                      onClick={handleDrawerClose}
                      style={{
                        textTransform: "none",
                        color: "#599f22",
                        fontWeight: 700,
                      }}
                    >
                      Shipping
                    </Button>
                  </Link>
                </div>

                <div>
                  <Link to="/escrow" style={{ textDecoration: "none" }}>
                    <Button
                      onClick={handleDrawerClose}
                      style={{
                        textTransform: "none",
                        color: "#599f22",
                        fontWeight: 700,
                      }}
                    >
                      Escrow
                    </Button>
                  </Link>
                </div>
              </div>

              {/* <div style={{ padding: "20px 25px" }}>
                <Link to="/marketplace">
                  <Button
                    style={{
                      textTransform: "none",
                      background: "#599f22",
                      color: "#FFFFFF",
                      padding: "5px 10px",
                      fontWeight: 700,
                    }}
                  >
                    All Market Places
                  </Button>
                </Link>
              </div> */}
            </List>
          </Drawer>
        </Box>
      </Router>
    </>
  );
};

export default App;
