import React from "react";
import { memo } from "react";
const Card1 = ({ state1,xyz }) => {
  xyz();
  console.log("card1 called");
  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        background: state1 ? "red" : "green",
      }}
    ></div>
  );
};

export default memo(Card1);
