import React from "react";

export default function ReactExpression() {
  function fullName(user) {
    return `${user.firstName} ${user.lastName}`;
  }

  let user = {
    firstName: "Santosh",
    lastName: "Baliarsingh",
  };

  return (
    <>
      <div className="h3 text-light  bg-danger p-2">
        React Expression Examples
      </div>

      <h2>Current React Version is {React.version}</h2>
      <h2 className="text-success">
        My FullName is {`${user.firstName} ${user.lastName}`}
      </h2>
      <h2 className="text-danger">My FullName is {`${fullName(user)}`}</h2>
    </>
  );
}
