import React, { Component } from "react";
import axios from 'axios';

export default class AjaxDemo7 extends Component {

    fetchdata = async() =>{

        const response1 = await axios.get("https://api.github.com/users/Santosh-Baliarsingh");
        console.log("First API Called" , response1.data);

        const response2 = await axios.get("https://api.github.com/users/evanphx");
        console.log("Second API Called" , response2.data);
    };

    // Here first response1 will call and after response1 api data got fetched then response2 data will fetch (it'll fetch data sequentially)
  render() {
    return (
      <>
        <div className="bg-dark text-light p-3 text-center h3">
        Example Of How TO Fetch Data From Different API (Squential Calls) In Class Component
      </div>

      <button className="btn btn-success ms-2" onClick={this.fetchdata}>Fetch Data</button>
      </>
    );
  }
}
