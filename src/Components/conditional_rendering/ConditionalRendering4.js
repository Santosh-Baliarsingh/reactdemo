import React from "react";

export default function ConditionalRendering4() {
  let flag = true;

  return (
    <>
      <div className="text-light h5 bg-danger p-2">
        Example Of Conditional Rendering && (Short Circuit Evaluation)
      </div>
      {/* Normal Ternary Operator */}
      {/* {flag ? <h2>Hi World</h2> : null} */}{" "}

      {/* short circuit Evaluation && */}
      {flag && <h2>Hello World</h2>}
      
    </>
  );
}
