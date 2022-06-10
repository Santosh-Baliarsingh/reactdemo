import React, { useState } from 'react'

export default function EventDemo6() {

    const [num1 , setNum1] = useState(0);
    const [num2 , setNum2] = useState(0);
    const [total , setTotal] = useState(0);

    const changeHandler1 = (e) =>{

        setNum1(+e.target.value);
    };

    const changeHandler2 = (e) =>{

        setNum2(+e.target.value);
    };

    const addition = () =>{

        setTotal(num1 + num2);
    };

  return (
    <>
    <div className="h3 bg-dark p-2 text-light text-center">
          React onChange Event (Two Event Handler for Two input elements) in Functional Component
        </div>
        <div className="ms-3">
          <input
            className="form-control w-25 mb-2"
            onChange={changeHandler1}
          />
          <input
            className="form-control w-25 mb-2"
            onChange={changeHandler2}
          />
          <button className="btn btn-info w-25 fw-bold" onClick={addition}>
            Click To Add
          </button>
          <p className="text-danger h4">Addition is {total}</p>
        </div>

    </>
  )
}
