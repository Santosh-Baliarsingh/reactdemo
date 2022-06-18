import React, { useState } from "react";

export default function FormDemo1() {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");

  const submitHandler = (e) => {

    e.preventDefault(); //If we dont want to refresh the page after click the Submit Button then we should use "e.preventDefault()"

    // Note :- PreventDefault() is a Javascript Function to prevent the default Behaviour

    alert(`${fName} ${lName}`);
  };
  return (
    <>
      <div className="bg-dark text-light h3 p-2 text-center">Example Of Form</div>
      <form onSubmit={submitHandler}>
      First Name :
      <input
        className="form-control w-25 d-inline mx-2"
        placeholder="Enter First Name"
        name="fName"
        value={fName}
        onChange={(e) => setFname(e.target.value)}
        type="text"
      />

      Last Name:
      <input
        className="form-control w-25 d-inline me-2"
        placeholder="Enter last Name"
        name="lName"
        value={lName}
        onChange={(e) => setLname(e.target.value)}
        type="text"
      />
       <button className="btn btn-success ">
        Submit
      </button>
      </form>
    </>
  );
}
