import React, { useState } from "react";

export default function FormDemo3() {

    const initialState = {

        firstName : '',
        lastName : '',
        age : '',
        gender : '',
        sport : [],
        state : '',
        message : ''
    }

    const [userData , setuserData] = useState(initialState);

    const submitHandler=(e) =>{

        e.preventDefault();
        console.log("Form Submitted");
        console.log(userData);
    };
  return (
    <>
      <div className="bg-dark text-light p-3 h4 text-center">Example of Form and Showing The Data After Submitting In Functional Component </div>
      <form onSubmit={submitHandler}>
        <div className="mb-3 ms-2">
          <label className="form-label fw-bold h5 text-success">
            FirstName
          </label>
          <input
            type="text"
            name="firstName"
            value={userData.firstName}
            onChange={(e) => {setuserData({...userData,firstName:e.target.value})}}
            className="form-control w-50"
          />
        </div>

        <div className="mb-3 ms-2 text-success">
          <label className="form-label fw-bold h5">LastName</label>
          <input
            type="text"
            name="lastName"
            value={userData.lastName}
            onChange={(e) => {setuserData({...userData,lastName:e.target.value})}}
            className="form-control w-50"
          />
        </div>

        <div className="mb-3 ms-2 text-success">
          <label className="form-label fw-bold h5">Age</label>
          <input
            type="number"
            name="lastName"
            value={userData.age}
            onChange={(e) => {setuserData({...userData,age:e.target.value})}}
            className="form-control w-25"
          />
        </div>

        <div className="mb-3 ms-2">
          <label className="form-label fw-bold h5 text-success">Gender</label>
          <div>
            <input
              className="form-check-input"
              name="gender"
              type="radio"
              value="Male"
              onChange={(e) => {setuserData({...userData,gender:e.target.value})}}
            />
            <label className="form-check-label ms-2 fw-bold">Male</label>

            <input
              className="form-check-input ms-3"
              type="radio"
              name="gender"
              value="female"
              onChange={(e) => {setuserData({...userData,gender:e.target.value})}}
            />
            <label className="form-check-label ms-2 fw-bold">Female</label>
          </div>
        </div>

        <div className="mb-3 ms-2 ">
          <label className="form-label fw-bold h5 text-success">
            Select Sports
          </label>
          <div>
            <input name="sport" className="form-check-input" type="checkbox" />
            <label className="form-check-label ms-2 fw-bold">Cricket</label>
            <input name="sport" className="form-check-input ms-2" type="checkbox" />
            <label className="form-check-label ms-2 fw-bold">Football</label>
            <input name="sport" className="form-check-input ms-2" type="checkbox" />
            <label className="form-check-label ms-2 fw-bold">Tennis</label>
            <input name="sport" className="form-check-input ms-2" type="checkbox" />
            <label className="form-check-label ms-2 fw-bold">Badminton</label>
            <input name="sport" className="form-check-input ms-2" type="checkbox" />
            <label className="form-check-label ms-2 fw-bold">Hockey</label>
          </div>
        </div>

        <div className="mb-3 ms-2">
          <label className="form-label fw-bold h5 text-success">
            Select State
          </label>
          <select className="form-select w-50" name="state"  value={userData.state} onChange={(e) => {setuserData({...userData,state:e.target.value})}}>
            <option>---Select---</option>
            <option defaultValue="od">Odisha</option>
            <option defaultValue="mh">Maharastra</option>
            <option defaultValue="tn">Telangana</option>
            <option defaultValue="dl">Delhi</option>
            <option defaultValue="ap">Andra Pradesh</option>
            <option defaultValue="wb">West Bengal</option>
            <option defaultValue="mb">Mumbai</option>
          </select>
        </div>

        <div className="w-50 mb-3 ms-2">
          <textarea
            className="form-control"
            name="message"
            value={userData.message}
            onChange={(e) => {setuserData({...userData,message:e.target.value})}}
            placeholder="Leave a Message here"
            id="floatingTextarea"
            rows="3"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary ms-2">
          Submit
        </button>

        <button type="reset" className="btn btn-danger ms-2">
          Reset
        </button>
      </form>
    </>
  );
}
