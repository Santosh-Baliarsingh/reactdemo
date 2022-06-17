import React, { useEffect, useState } from "react";

export default function UseEffectDemoChild() {
  const [a, setA] = useState(10);
  const [b, setB] = useState(20);
  const [c, setC] = useState(30);

  useEffect(() => {
    console.log("Use Effect Called while mounting/Updating"); //It's callled means Mountig Done

    return () => {
      console.log("use Effect Called While Unmounting"); // It's called UnMounting
    };
  }, []);
  return (
    <>
      <p className="h4 ms-2">Initial Values a : {a}</p>
      <p className="h4 ms-2">Initial Values b : {b}</p>
      <p className="h4 ms-2">Initial Values c : {c}</p>

      <button
        className="btn btn-success mx-2"
        onClick={() => {
          setA(15);
        }}
      >
        Update A
      </button>
      <button
        className="btn btn-danger me-2"
        onClick={() => {
          setB(25);
        }}
      >
        Update B
      </button>
      <button
        className="btn btn-warning me-2"
        onClick={() => {
          setC(35);
        }}
      >
        Update C
      </button>
    </>
  );
}
