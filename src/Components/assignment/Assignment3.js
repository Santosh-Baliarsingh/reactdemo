import React, { useState } from "react";

export default function Assignment3() {
  let [toggle, setToggle] = useState(true); // default Value is true

  let toggleBtn = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="text-center h3 bg-dark text-light p-3">
        Toggle Button to Show and Hide a Div Using State
      </div>
      <div className=" text-center">
        <button
          onClick={toggleBtn}
          className="btn btn-primary   px-4 py-2 mt-4 fw-bold">
          {toggle ? "Hide" : "Show"}
        </button>
      </div>
      {toggle && (
        <p className="w-50  border fw-bold border-primary border-3 mx-auto mt-4 p-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      )}
    </>
  );
}
