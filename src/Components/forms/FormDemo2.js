import React, { useState } from "react";

export default function FormDemo2() {

    const [fname , setFname] = useState("Santosh");
    const [lname , setLname] = useState("Baliarsingh");
    const [fNameErrorMsg , setFnameErrorMsg] = useState("");
    const [lNameErrorMsg , setLnameErrorMsg] = useState("");

    const submithandler = (e) =>{

        e.preventDefault();

        alert(`${fname} ${lname}`);
    };

    const changeHandler = (e) =>{
        const inputField = e.target.name;

        if(inputField === 'fname'){
            setFname(e.target.value);
            if(!e.target.value) {
                setFnameErrorMsg ("First Name Shouldn't Be Empty");
            } 
            else if (e.target.value.length < 5) {
                setFnameErrorMsg ("First Name Should Have atleast 5 Characters");
            } 
            else {
                setFnameErrorMsg("");
            }
        }
        else if (inputField  === "lname"){
             setLname(e.target.vaue);
             if(!e.target.value){
                setLnameErrorMsg("Last Name Shouldn't Be Empty");
             }
             else if (e.target.value.length < 5){
                setLnameErrorMsg("Last Name Should have atleast 5 Characters");
             }
             else{
                setLnameErrorMsg("");
             }
        }
        else {

        }
    };
  return (
    <>
      <div className="bg-dark text-light p-3 text-center h4">Example of Form Validation While Typing In Functional Component</div>

      <form onSubmit={submithandler}>
        <div className="mb-3 ms-2">
          <label  className="form-label fw-bold">
            FirstName
          </label>
          <input
            type="text"
            name="fname"
            value={fname}
            onChange={changeHandler}
            className="form-control w-50"
          />
          <div className="form-text text-danger" >{fNameErrorMsg}</div>
        </div>

        <div className="mb-3 ms-2 ">
          <label className="form-label fw-bold">
            LastName
          </label>
          <input
            type="text"
            name="lname"
            value={lname}
            onChange={changeHandler}
            className="form-control w-50"
          />
          <div className="form-text text-danger">{lNameErrorMsg}</div>
        </div>

        <button type="submit" className="btn btn-primary ms-2">
          Submit
        </button>
      </form>
    </>
  );
}
