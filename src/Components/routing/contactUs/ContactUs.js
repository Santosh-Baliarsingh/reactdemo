import React from "react";
import {Link} from "react-router-dom";

export default function ContactUs() {
  return (
    <>
      <div className="text-center text-success h3 mt-3">
        This is ContactUs Page...
      </div>

      {/* Here in HTML anchor tag when we click the link we'll redirect to the home page but the whole page is reloading .This is not the right way to naviagte  from one route to another route with link . we must avoid */}
      <div className="d-block ms-2">
      <a className="btn btn-danger" href="/home">CLick To Go Home page With HTML Anchor Tag</a>
      </div>
      

       {/* Here in react Link tag from react-router-dom when we'll click the link then we'll redirect to the home page without reloading the entire page. This is the good approach to jump from one Route to another Route in React*/}
      <button className="btn btn-success ms-2 mt-4">
        <Link className="text-decoration-none text-light" to="/home">Click To Go Home Page With React Link Tag</Link>
      </button>
    </>
  );
}
