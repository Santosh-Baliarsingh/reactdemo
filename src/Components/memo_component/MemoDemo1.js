import React, { useState } from "react";
// import CarList1 from "./CarList1";
import CarList2 from "./CarList2";

export default function MemoDemo1() {

  // State Data
  const [cars, setCars] = useState(["BMW", "Mercedes"]);
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="bg-dark text-light p-3 text-center h3">React Memo Component Example</div>
      <button className="btn btn-success fw-bold ms-2 me-3"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update Counter
      </button>
      <button className="btn btn-info fw-bold"
        onClick={() => {
          setCars([...cars, "Audi"]);
        }}
      >
        Add New Cars
      </button>
      
      {/* Without React.Memo() */}
      {/* <CarList1 cars={cars}></CarList1>  */}

      {/* With React.memo() */}
      <CarList2 cars={cars}></CarList2>
    </>
  );
}

/* 
 Note :- 
 -> When Parent is Adding new Cars  child is being called and it is expected .if parent is updating count data then why car is being called (this rendered is showing in console coming from "Carlists.js" line:4) .its unexpected. 

 -> This component is having 2 state (count,cars) .
 
 -> Whenever we are updating the "count" then car list is getting updated. "count" is not passed as a props only cars is passed as a props.eventhough "count" is not passed as props if anything changes in parent child is rendered.
 
 -> To avoid this we have to use react.memo() in Child component (CarList1.js) 
 
 -> To See The Without React.memo() Component then Uncomment the "CarList1.js"
 */
