import React from "react";
import list from "./fakestore.json";

export default function Fakestore() {
  return (
    <>
      <h1 className="text-center fw-bold text-light p-2 bg-dark">Fakestore API</h1>
      <div className="row g-0 p-3 ">

        {list.map((items, id) => (

          <div className="col-md-3 col-sm-6" key={id}>

            <div className="card  ms-1 my-2" style={{ height: "500px" }}>
              <img
                src={items.image}
                style={{ width: "200px", height: "200px" }}
                className="card-img-top mx-auto"
                alt="..."/>

              <div className="card-body">
                <p className="card-text text-center fw-bold h3 text-capitalize h-25">
                  {items.category}
                </p>

                <h6 className="card-title text-center fw-bold text-success h-50">
                  {items.title}
                </h6>
                <a
                  href="google.com"
                  className="btn btn-primary d-block mx-auto mt-4">
                  $ {items.price}
                </a>
              </div>

            </div>

          </div>

        ))}

      </div>
    </>
  );
}
