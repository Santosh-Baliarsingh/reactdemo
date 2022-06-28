import React, { useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Bars } from "react-loader-spinner";
import { Link, Outlet } from "react-router-dom";

export default function NestedRouting() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
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
        ProductList Page (Using Nested Routing)
      </div>
      <button className="btn btn-success ms-2 mb-2" onClick={fetchData}>
        Show Products
      </button>
      <div className="ms-2">
        <Link
          className="text-decoration-none text-light btn btn-primary"
          to="/nestedRouting/feature"
        >
          featured
        </Link>
        <Link
          className="text-decoration-none text-light btn btn-danger ms-2"
          to="/nestedRouting/new"
        >
          New
        </Link>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 col-sm-9">
            <div className="row">
              {products.map((prod) => (
                <div key={prod.id} className="col-md-4 col-sm-6 col-12">
                  <div className="card my-2" style={{ height: "450px" }}>
                    <img
                      src={prod.images[0]}
                      style={{ width: "180px", height: "150px" }}
                      className="card-img-top img-fluid mx-auto pt-2"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-text  fw-bold  text-capitalize text-success">
                        {prod.title}
                      </h5>

                      <h5 className="card-title">
                        Brand -{" "}
                        <span className="text-danger">{prod.brand}</span>
                      </h5>

                      <h5 className="card-title">Price - ${prod.price}</h5>

                      <h5 className="card-title">Category - {prod.category}</h5>

                      <h5>Ratings - {prod.rating}</h5>

                      <h5>Stocks - {prod.stock}</h5>

                      {/* After Clicked the view Details button the products will be shown in a products Details Page with the help of "Path params" in Route Params */}
                      <button className="btn btn-success mt-2">
                        <Link
                          className="text-decoration-none text-light"
                          to={`/productDetails/${prod.id}`}
                        >
                          View Details
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side Column For New And Featured Product Starts Here */}
          <div className="col-6 col-sm-3 h4 bg-dark text-light fw-bold text-center">
            <Outlet />
          </div>
        </div>
      </div>
      {/* Loader Functionality here */}
      {loading ? (
        <div className="d-flex justify-content-center">
          <Bars height="70" width="80" color="black" ariaLabel="loading" />
        </div>
      ) : null}
    </>
  );
}
