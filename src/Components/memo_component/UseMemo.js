import React, { useMemo, useState } from "react";

export default function UseMemo() {
  const [count, setCount] = useState(0);

  const [todos, setTodos] = useState(["ToDo-1", "ToDo-2"]);

  // const calculation = useMemo(() => expensiveCalculation(count), []);

  // const calculation = useMemo(() => expensiveCalculation(count),[count]);

  const calculation = expensiveCalculation(count); //It will Take time to update the state to see the right output uncomment above lines

  const increment = () => {
    setCount((e) => e + 1);
  };

  const addTodos = () => {
    setTodos([...todos, "New Todos Added"]);
  };

  return (
    <>
      <h2 className="bg-dark text-light p-3 text-center">Add Todos</h2>
      <div className="ms-3">
        {todos.map((todo, ind) => {
          return (
            <p key={ind} className="text-danger h5">
              {todo}
            </p>
          );
        })}

        <button className="btn btn-success " onClick={addTodos}>
          Add Todo
        </button>
      </div>
      <hr />
      <div className="ms-3">
        <p className="h3 d-inline">Count : {count}</p>
        <button className="btn btn-info ms-2 px-3" onClick={increment}>
          +
        </button>
        <h3>Expensive calculation</h3>
        <p className="h3">{calculation}</p>
      </div>
    </>
  );
}

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

/*
Note :- 
-The Function called inside Component are re-invoked on every state change.
-If we want the function  should be called only  on page load  and not  on every state changes then for that function "Usememo" Should be Used.
-useCallback and useMemo Hooks are similar. 
-useMemo Hook returns a memoized value.
-The useMemo(()=>{} , []) hook accepts a second parameter to declare dependencies.  */
