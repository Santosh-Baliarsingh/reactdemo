import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

export default function Parent() {
  const [a, setA] = useState(10);

  return (
    <>
      <div style={{ border: "2px solid blue", margin: "10px" }}>
        <div className="border border-success m-3">
          <h3 className="text-success">I Am Parent Component</h3>
          <p className="h4">
            My Own Data is <span className="text-danger">{a}</span>
          </p>
        </div>

        <Child1 a={a} setA={setA}></Child1>
        <Child2 a={a}></Child2>
      </div>
    </>
  );
}
