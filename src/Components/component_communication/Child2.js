import React from "react";

export default function Child2(props) {
  return (
    <>
      <div className="border border-success m-3 ps-2">
        <h3 className="text-success">I am Child2 Component</h3>
        <p className="h4">
          My Parent Component value is{" "}
          <span className="text-danger">{props.a}</span>
        </p>
      </div>
    </>
  );
}
