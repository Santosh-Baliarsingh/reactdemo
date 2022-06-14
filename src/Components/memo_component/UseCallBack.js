import React, { useState } from "react";
import { useCallback } from "react";
import Todos from "./Todos";

const UseCallBack = () => {
  const [count, setCount] = useState(0);

  const [todos, setTodos] = useState(["ToDo-1", "ToDo-2"]);

  const increment = () => {
    setCount((e) => e + 1);
  };

  // Normal Function (Here wheneven parent getiing reloaded child component will also re-rendered)
 /*  const addTodos = () => {
    setTodos((t) => [...t, "New Todos Added"]);
  }; 
 */

  // Using useCallback() Hook (Here wheneve parent component getting reloaded then child component will not re-rendered)
  const addTodos = useCallback(() => {
    setTodos((t) => [...t, "New Todos Added"]);
  },[]);

  return (
    <>
      <Todos todos={todos} addTodos={addTodos}></Todos>
      <hr />
      <p className="h3 d-inline">Count : {count}</p>
      <button className="btn btn-info ms-2 px-3" onClick={increment}>
        +
      </button>
    </>
  );
};

export  default UseCallBack;


/* 
Note :-
- When a parent is passing a function from props to child component ,parent should make sure that whenever i am passing a function  as a props to another component i will use "useCallback() hook" . So that every time i am getting reloaded my child component should be reload.so that if i'll use useCallBack() then i am getting called again and again because of that my child componenet shouldn't be re-rendered.
*/