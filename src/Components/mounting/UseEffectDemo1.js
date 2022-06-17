import React, { useEffect, useState } from "react";

export default function UseEffectDemo1() {
  const [a, setA] = useState(10);
  const [b, setB] = useState(20);
  const [c, setC] = useState(30);

  useEffect(() => {
    console.log("Use Effect Called"); //It's callled means Mountig Done
  }, []); //here in empty array on the page load it'll call and after on button click we wont see  "Use Effect Called" on console.

//   useEffect(() => {
//     console.log("Use Effect Called"); //It's callled means Mountig Done
//   }, [a,b]); // here we'll see "Use Effect Called" on page load and after click the button (a,b) the useEffect will be called and we'll see "Use Effect called" on console and after click button c we don't see that console message


  return (
    <>
      <div className="bg-dark text-light p-3 text-center h3">Example UseEffect In Functional Component</div>
      <p className="h4 ms-2">Initial Values a : {a}</p>
      <p className="h4 ms-2">Initial Values b : {b}</p>
      <p className="h4 ms-2">Initial Values c : {c}</p>

      <button className="btn btn-success mx-2" onClick={() =>{setA(15)}}>Update A</button>
      <button className="btn btn-danger me-2" onClick={() =>{setB(25)}}>Update B</button>
      <button className="btn btn-warning " onClick={() =>{setC(35)}}>Update C</button>
    </>
  );
}
