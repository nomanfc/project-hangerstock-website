import React, { useEffect } from "react";
import * as h from "./home.styled";

//components
import RowOneOnline from "./RowOneOnline";
import RowTwoWel from "./RowTwoWel";
import RowThreeHow from "./RowThreeHow";
import RowFourGarment from "./RowFourGarment";
import RowFiveCate from "./RowFiveCate";
import RowSixQuote from "./RowSixQuote";
import RowSevenBlog from "./RowSevenBlogs";
import RowEightRegister from "./RowEightRegister";

const Home = () => {

  
  return (
    <>
      <RowOneOnline />
      <RowTwoWel />
      <RowThreeHow />
      <RowFourGarment />
      <RowFiveCate />
      <RowSixQuote />
      <RowSevenBlog />
      <RowEightRegister />
    </>
  );
};

export default Home;
