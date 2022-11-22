import * as React from "react";

import { BsChevronDown } from "react-icons/bs";

import * as s from "./ShopAuc.styled";

export default function SelectCat() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <s.SelectStyle>
      <s.Title>Category</s.Title>
      <s.Icons style={{ marginLeft: "15px", marginRight: "20px" }}>
        <BsChevronDown />
      </s.Icons>
    </s.SelectStyle>
  );
}
