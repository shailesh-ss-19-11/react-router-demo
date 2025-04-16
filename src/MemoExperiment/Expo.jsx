import React, { useState } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";

const Expo = () => {
  const [check1, setcheck1] = useState(false);
//   const [check2, setcheck2] = useState(false);
  return (
    <div>
      <input type="checkbox" onChange={(e) => setcheck1(e.target.checked)} />
      <Card1 check1={check1}/>
      <Card2 />
    </div>
  );
};

export default Expo;
