import React, { useMemo } from "react";
import { useState } from "react";

// usememo use for prevent re rendering of large calculations

const Card2 = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  const doubleCount = useMemo(() => {
    console.log("called");
    return count * 2;
  }, [count]);

// const doubleCount = ()=>{
//     console.log("object")
//     return count*2
// }

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h1>{name}</h1>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <h1>{count}</h1>
      <h1>{doubleCount}</h1>
    </div>
  );
};

export default Card2;
