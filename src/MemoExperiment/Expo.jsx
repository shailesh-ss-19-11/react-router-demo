import React, { useState } from "react";
import Card1 from "./Card1";
const Expo = () => {
  const [state1, setstate1] = useState("");
  const [state2, setstate2] = useState("");
  return (
    <div>
      <h1>Memo experiment</h1>
      <label htmlFor="" className="text-lg">Card1</label>
      <input
        type="checkbox"
        checked={state1}
        name=""
        id=""
        onChange={(e) => setstate1(e.target.checked)}
      />

      <label htmlFor="">Card2</label>
      <input
        type="checkbox"
        name=""
        id=""
        onChange={(e) => setstate2(e.target.checked)}
        checked={state2}
      />

      <Card1 state1={state1}/>
    </div>
  );
};

export default Expo;
