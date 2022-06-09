import React, { useState } from "react";

export default function Calculator1() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [total, setTotal] = useState(0);

  const changeHandler1 = (e) => {
    setNum1(+e.target.value);
  };

  const changeHandler2 = (e) => {
    setNum2(+e.target.value);
  };

  const addition = () => {
    setTotal(num1 + num2);
  };
  return (
    <>
      <div className="ms-3 text-primary h3 ">Simple Calculator Using Functional Component</div>
      <input type="number" className="form-control w-25 d-inline m-3" onChange={changeHandler1} />
      <input type="number" className="form-control w-25 d-inline m-3" onChange={changeHandler2} />
      <button className="btn btn-success ms-3" onClick={addition}>Click Here</button>
      <h3 className="text-danger m-3">Total Value is {total}</h3>
    </>
  );
}
