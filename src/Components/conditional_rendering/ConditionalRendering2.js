import React from "react";

export default function ConditionalRendering2() {

    let num  = prompt("Enter a Number");

  return (
    <>
      <div className="text-light h5 bg-danger p-2">
        Example Of Conditional Rendering using Ternary Operator to Change Color
      </div>

      <h2 style={num % 2 === 0 ? { color: "green" } : { color: "red" }}>
        Entered Number {num} is {num % 2 === 0 ? "Even" : "Odd"}.
      </h2>
    </>
  );
}
