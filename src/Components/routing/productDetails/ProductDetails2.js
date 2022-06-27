import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function ProductDetails2() {
  // Initial Details
  const initialDetails = {
    images: [],
    title: "",
    price: 0,
    stock: "",
    brand: "",
  };

  const [searchParams] = useSearchParams();
  const [prod, setProd] = useState(initialDetails);
  const navigate = useNavigate(); // got back to Previous route

  // UseEffect() Hooks
  useEffect(() => {
    fetchDetails();
  }, [searchParams]);

  // FetchDetails Function
  const fetchDetails = () => {
    const Params = Object.fromEntries([...searchParams]);
    setProd(Params);
  };
  return (
    <>
      <div className="bg-light text-success text-center p-3 h2">
        ProductDetails Page From Query Params
      </div>
      <div className="d-flex justify-content-center">
        <div
          className="card ms-1 my-2"
          style={{ height: "400px", width: "300px" }}
        >
          <img
            src={prod.images}
            style={{ width: "300px", height: "150px" }}
            className="card-img-top img-fluid mx-auto pt-2"
            alt="..."
          />
          <div className="card-body  ">
            <h5 className="card-text  fw-bold  text-capitalize text-success">
              {prod.title}
            </h5>

            <h5 className="card-title">
              Brand - <span className="text-danger">{prod.brand}</span>
            </h5>

            <h5 className="card-title">Price - ${prod.price}</h5>

            <h5>Stocks - {prod.stock}</h5>
          </div>
        </div>
      </div>
      {/* Previous Button */}
      <div className="text-center mb-3">
        <button className="btn btn-danger" onClick={() => navigate(-1)}>
          Previous
        </button>
      </div>
    </>
  );
}
