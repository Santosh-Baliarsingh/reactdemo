import React from "react";
import { memo } from "react";

export const Todos = ({ todos, addTodos }) => {
  console.log("Child Render...");

  return (
    <>
      <div className="bg-dark text-light p-3 h4 text-center">UseCallBack Hook Example (Todo)</div>
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
    </>
  );
};

export default memo (Todos);
