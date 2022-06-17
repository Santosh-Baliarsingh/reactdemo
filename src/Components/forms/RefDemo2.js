import React from "react";
import { useRef } from "react";

export default function RefDemo2() {
  const myRef1 = useRef();
  const myRef2 = useRef();

  // In Fuctional Component We have to use "useRef()"

  const add = () => {
    let value_1 = parseInt(myRef1.current.value);
    let value_2 = parseInt(myRef2.current.value);
    alert(value_1 + value_2);
  };

  return (
    <>
      <div className="bg-dark text-light h3 p-3 text-center">
        Template Reference Variabe (Refs) in Functional Component
      </div>

      <input
        className="form-control w-25 d-inline mx-2"
        placeholder="Enter First Number"
        name="textbox1"
        ref={myRef1}
        type="text"
      />

      <input
        className="form-control w-25 d-inline me-2"
        placeholder="Enter Second Number"
        name="textbox2"
        ref={myRef2}
        type="text"
      />

      <button className="btn btn-success " onClick={add}>
        Add
      </button>
    </>
  );
}
