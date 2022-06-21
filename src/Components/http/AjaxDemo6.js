import React from "react";
import axios from "axios";

export default function AjaxDemo6() {
  const fetchData = () => {
    axios
      .all([
        axios.get("https://api.github.com/users/Santosh-Baliarsingh"),
        axios.get("https://api.github.com/users/evanphx"),
      ])
      .then(([response1, response2]) =>
        console.log(response1.data, response2.data)
      );
  };

   //Here in above the two api will calls parallely
  return (
    <>
      <div className="bg-dark text-light p-3 text-center h3">
        Example Of How TO Fetch Data From Different API (Parallel Calls){" "}
      </div>
      <button className="btn btn-success ms-3" onClick={fetchData}>
        Fetch Data
      </button>
    </>
  );
}
