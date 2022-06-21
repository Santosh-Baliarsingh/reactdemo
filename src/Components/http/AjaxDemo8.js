import axios from "axios";
import React from "react";

export default function AjaxDemo8() {

    const fetchData = async() =>{

        const response1 = await axios.get("https://api.github.com/users/Santosh-Baliarsingh");
        console.log('First API Rendered' , response1.data);

        const response2 = await axios.get("https://api.github.com/users/evanphx");
        console.log("Second API Rendered" , response2.data);
    }
  return (
    <>
       <div className="bg-dark text-light p-3 text-center h3">
        Example Of How TO Fetch Data From Different API (Squential Calls) In Functional Component
      </div>

      <button className="btn btn-danger ms-2" onClick={fetchData}>Fetch Data</button>
    </>
  );
}
