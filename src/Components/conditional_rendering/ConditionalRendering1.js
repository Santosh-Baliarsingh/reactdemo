import React from "react";

export default function ConditionalRendering1() {

    let num = prompt("Enter any Number");

  return (
    <>
      <div className="text-light h5 bg-danger p-2">Example Of Conditional Rendering Using Ternary Operator</div>
      
      <h2>Entered Number {num} is {num%2===0 ? 'Even' : 'Odd'}.</h2>
    </>
  );
}
