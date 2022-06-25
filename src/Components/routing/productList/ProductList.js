import React, { useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Bars } from "react-loader-spinner";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true)
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
        setLoading(false);
      });
  };
  return (
    <>
      <div className="text-center text-success h2 fw-bold bg-light text-success  p-3">
        ProductList Page (Using Route Params (Path Params))
      </div>
      <button className="btn btn-info ms-2 mb-2" onClick={fetchData}>
        Fetch Data
      </button>
      <div className="container-fluid">
        <div className="row">
          {products.map((prod) => (
            <div key={prod.id} className="col-md-3 col-sm-6">
              <div className="card  ms-1 my-2" style={{ height: "450px" }}>
                <img
                  src={prod.images[0]}
                  style={{ width: "150px", height: "150px" }}
                  className="card-img-top mx-auto pt-2"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-text  fw-bold  text-capitalize text-success">
                    {prod.title}
                  </h5>

                  <h5 className="card-title  fw-bold  ">
                    Brand - <span className="text-danger">{prod.brand}</span> 
                  </h5>
                  
                  <h5 className="card-title  fw-bold ">
                    Price - {prod.price}
                  </h5>

                  <h5 className="card-title  fw-bold  ">
                    Category - {prod.category}
                  </h5>

                  <h5 className="fw-bold">Ratings - {prod.rating}</h5>

                  <h5 className="fw-bold">Stocks - {prod.stock}</h5>

                  <button className="btn btn-primary mt-2">
                    Add to Cart
                  </button>

                  {/* After Clicked the view Details button the products will be shown in a products Details Page with the help of "Path params" in Route Params */ }
                  <button className="btn btn-success mt-2 ms-4">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
       {/* Loader Functionality here */}
       {loading ?  (
            <div className="d-flex justify-content-center">
          <Bars  height="70" width="80" color="black" ariaLabel="loading" />
            </div>
        ) : null}
    </>
  );
}
