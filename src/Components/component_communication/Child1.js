import React from "react";

export default function Child1(props) {
  return (
    <>
      <div className="border border-success m-3 ps-2">
        <h3 className="text-success">I am Child1 Component</h3>
        <p className="h4">
          My Parent data is <span className="text-danger">{props.a}</span>
        </p>
        <button
          className="btn btn-danger ms-1 mb-2"
          onClick={() => {
            props.setA(20);
          }}
        >
          Update A Value
        </button>
      </div>
    </>
  );
}
