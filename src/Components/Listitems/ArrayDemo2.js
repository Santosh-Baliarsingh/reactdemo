import React from 'react'

export default function ArrayDemo2() {
    let employees = [
        { Emp_Id: 101, Name: "Naruto", Sal: 5000 , Gender: "Male" },
        { Emp_Id: 104, Name: "Sasuke", Sal: 8000 , Gender: "Male" },
        { Emp_Id: 103, Name: "Asta", Sal: 7000 , Gender: "Male" },
        { Emp_Id: 102, Name: "Yuno", Sal: 9000 , Gender: "Male" },
        { Emp_Id: 102, Name: "Noelle", Sal: 9000 , Gender: "Female" },
    ];

    const heading = Object.keys(employees[0]);
  return (

    <>
    <h2 className='text-center text-light bg-dark p-2 fw-bold'>ArrayDemo2 (Array Of Objects)</h2>

    <table className='table table-bordered table-striped'>

    <thead className="thead-dark">
        <tr className='text-center'>
            {/* <th>Emp ID</th>
            <th>Emp Name</th>
            <th>Emp Salary</th>
            <th>Emp Gender</th> */}
            {/* {Object.keys(employees[0]).map((val,Emp_Id) => (

                <th key={Emp_Id}>{val}</th>
            ))} */} 

            {heading.map((heading,Emp_Id) =>(

                <th key={Emp_Id}>{heading}</th>
            ))}


        </tr>
    </thead>

    <tbody>
        {employees.map((emp,Emp_Id) => (

            <tr  className='text-center' key={Emp_Id}>
                {/* <td>{emp.eId}</td>
                <td>{emp.name}</td>
                <td>{emp.sal}</td> */}
                {Object.values(emp).map((val,Emp_Id) => (

                    <td key={Emp_Id}>{val}</td>
                ))}
            </tr>
        ))}
    </tbody>

    </table>


    </>
  )
}
