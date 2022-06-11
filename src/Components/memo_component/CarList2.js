import React from "react";

const CarList2 = (props) => {
  console.log("carList render called");
  return (
    <>
      <div className="h3 mt-2 fw-bold text-danger text-decoration-underline ms-2">
        CarList
      </div>
      <ul className="list-group list-group-numbered">
        {props.cars.map((car, ind) => (
          <li
            className="list-group-item list-group-item-success fw-bold w-25"
            key={ind}
          >
            {car}
          </li>
        ))}
      </ul>
    </>
  );
}

export default React.memo(CarList2);

/* 
Note :-
Here After Click Update Couneter Carlist is not rendered only when add new car button clicked then new car added
*/