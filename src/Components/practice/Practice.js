import React from "react";

export default function Practice() {
  let employees = [
    { emp_Id: 101, Name: "Naruto", Sal: 5000, Gender: "Male" },
    { emp_Id: 102, Name: "Sasuke", Sal: 8000, Gender: "Male" },
    { emp_Id: 103, Name: "Asta", Sal: 7000, Gender: "Male" },
    { emp_Id: 104, Name: "Yuno", Sal: 9000, Gender: "Male" },
    { emp_Id: 105, Name: "Noelle", Sal: 9000, Gender: "Female" },
  ];

  const heading = (Object.keys(employees[0]));
  return (
    <>
      <table className="table table-bordered table-striped">
        <thead>
          <tr className="text-center">
            {/* <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Employee Salary</th>
            <th>Employee Gender</th> */}
            {/* {Object.keys(employees[0]).map((key,id) =>(

                <th key={id}>{key}</th>
            ))} */}

            {heading.map((keys,id) =>(

                <th key={id}>{keys}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {employees.map((emp, emp_Id) => (
            <tr className="text-center" key={emp_Id}>
              {/* <td>{emp.emp_Id}</td>
              <td>{emp.Name}</td>
              <td>{emp.Sal}</td>
              <td>{emp.Gender}</td> */}
              {Object.values(emp).map((val,id) => (
                <td key={id}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
