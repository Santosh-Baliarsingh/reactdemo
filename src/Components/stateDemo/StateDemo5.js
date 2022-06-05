import React, { useEffect, useState } from "react";

export default function StateDemo5() {
  let [count, setCount] = useState(0); // 0 is the Default value (UseState is called a Hook or normal function)

  let increment = () => {
    // setCount((prevState) => prevState + 1);

    // We can also write like this
     setCount((prevState) => {
         return prevState + 1;
        });
    };

   useEffect(() =>{

    console.log(count);
   })

  let increment5 = () => {
    increment();
    increment();
    increment();
    increment();
    increment();
  };

  return (
    <>
      <div className=" h2 text-light h5 bg-success p-2 my-2">
        Updating The Count By 5
      </div>

      <button className="btn btn-md px-4 ms-3 btn-success" onClick={increment5}>
        increment By 5
      </button>

      <span className="h2"> &nbsp; {count} &nbsp;</span>
    </>
  );
}
