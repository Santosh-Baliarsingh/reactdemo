import React from "react";
import {useNavigate} from "react-router-dom";

export default function About() {
  // To use navigate after doing some operations the  must use "useNavigate() Hook"
  const navigate = useNavigate();

  const f1 = () =>{

    // Do Somthing (Operation) before Jump to Home page
    alert("Operation Done...");

    // After Done Operation then jump to Home page
    navigate("/home");
     
  };

  // In above Here we are navigating one route to another router before doing some operations programmatically
  return (
    <>
      <div className="text-center text-success h3 mt-3">
        This is About Page...
      </div>
      <div>
      <button className="btn btn-success ms-2 mb-3" onClick={f1}>CLick To Go Home Page</button>
      </div>
      {/* Here after click the button a alert message will show then navigate to the Home Page*/}

      <button className="btn btn-danger mx-3" onClick={()=> navigate(-1)}>Previous</button>
      <button className="btn btn-primary" onClick={()=> navigate(1)}>Next</button>
    </>
  );
}
