import React, { useState } from "react";

export default function StateDemo2() {
    
    let [count,setCount] = useState(0); // 0 is the Default value (UseState is called a Hook or normal function)

    let increment = () =>{
        setCount(count+5);
    };

    let decrement = () =>{

        setCount(count-5);
    };
  return (
    <>
      <div className=" h2 text-light h5 bg-success p-2 my-2">Example Of State in Functional Component</div>

      <button className="btn btn-md px-4 ms-3 btn-danger" onClick={decrement}>
          -
        </button>

        <span className="h2"> &nbsp; {count} &nbsp;</span>

        <button className="btn btn-md px-4 btn-success" onClick={increment}>
          +
        </button>
    </>
  );
}
