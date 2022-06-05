import React from "react";

export default function ConditionalRendering3() {
  let num = prompt("Enter a Number");
  if (num % 2 === 0) {
    return <h2>Entered Number {num} is Even Number.</h2>;
  } else {
    return <h2>Entered Number {num} is Odd Number.</h2>;
  }
}
