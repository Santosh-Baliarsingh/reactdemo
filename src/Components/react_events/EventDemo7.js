import React, { useState } from "react";

export default function EventDemo7() {

    const [num1 , setNum1] = useState(0);
    const [num2 , setNum2] = useState(0);
    const [total , setTotal] = useState(0);

   /*  const changeHandler = (e) =>{

        if(e.target.name === "num1") {

            setNum1(+e.target.value);
        }
        else{
            setNum2(+e.target.value);
        }
    }; */

    const addition = () =>{

        setTotal(num1 + num2);
    };

  return (
    <>
       <div className="h3 bg-dark p-2 text-light text-center">
       React onChange Event (Single Event Handler for multiple input elements) in Functional Component
        </div>
        <div className="ms-3">
          <input
            className="form-control w-25 mb-2"
            name="num1"
            onChange={(e) =>setNum1(+e.target.value)}
          />
          <input
            className="form-control w-25 mb-2"
            name="num2"
            onChange={(e) =>setNum2(+e.target.value)}
          />
          <button className="btn btn-info w-25 fw-bold" onClick={addition}>
            Click To Add
          </button>
          <p className="text-danger h4">Addition is {total}</p>
        </div>

    </>
  );
}
