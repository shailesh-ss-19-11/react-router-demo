import React, { useCallback, useState } from "react";
import Todos from "./Todos";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [obj, setobj] = useState({ name: "shailesh", age: 23 });
  const increment = () => {
    // setCount(count + 1);
    setCount((prev) => Number(prev) + 1);
    // let newobj = {...obj,address:"nagpur"}
    // setobj(newobj);

    setobj((prev) => {
      return { ...prev, address: "nagpur" };
    });
  };
  console.log(obj, "obj");

  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, "New Todo"]);
  }, [todos]);

  //   const addTodo = () => {
  //     setTodos((t) => [...t, "New Todo"]);
  //   };
  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default Counter;
