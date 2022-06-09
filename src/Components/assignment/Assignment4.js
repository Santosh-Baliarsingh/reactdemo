import React, { useState } from "react";

export default function Assignment4() {
  let [hide, setToggle] = useState(true);

  let changeFlag = () => {
    setToggle(!hide);
  };
  return (
    <>
      <h2 className="text-center text-success">
        {" "}
        Toggle Show and Hide Password Using State
      </h2>
      <form className="m-5">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type={hide ? "password" : "text"}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            onClick={changeFlag}
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            {hide ? "Show Password" : "Hide Password"}
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      
      {/* <input type={hide ? 'Password' : 'text'}/>
        <button onClick={changeFlag}>{hide ? 'Show Password' : 'Hide Password'}</button> */}
    </>
  );
}
