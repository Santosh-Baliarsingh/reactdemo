import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Bars } from "react-loader-spinner";

export default function ProductList2() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setProducts(data.products);
        setLoading(false);
      });
  };

  // Here create the Query params
  const naviagteHandler = (title, price, stock, brand, images) => {
    navigate({
      pathname: "/productdetails",
      search: `?${createSearchParams({
        title,
        price,
        stock,
        brand,
        images,
      })}`,
    });
  };
  return (
    <>
      <div className="text-center text-success h2 fw-bold bg-light text-success  p-3">
        ProductList Page (Using Route Params (Query Params))
      </div>
      <button className="btn btn-success ms-2 mb-2" onClick={fetchData}>
        Show Products
      </button>
      <div className="container-fluid">
        <div className="row">
          {products.map((prod) => (
            <div key={prod.id} className="col-md-3 col-sm-6">
              <div className="card  ms-1 my-2" style={{ height: "450px" }}>
                <img
                  src={prod.images[0]}
                  style={{ width: "180px", height: "150px" }}
                  className="card-img-top mx-auto pt-2"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-text  fw-bold  text-capitalize text-success">
                    {prod.title}
                  </h5>

                  <h5 className="card-title">
                    Brand - <span className="text-danger">{prod.brand}</span>
                  </h5>

                  <h5 className="card-title">Price - ${prod.price}</h5>

                  <h5 className="card-title">Category - {prod.category}</h5>

                  <h5>Ratings - {prod.rating}</h5>

                  <h5>Stocks - {prod.stock}</h5>

                  {/* <button className="btn btn-primary mt-2">Add to Cart</button> */}

                  {/* After Clicked the view Details button the products will be shown in a products Details Page with the help of "Path params" in Route Params */}
                  <button
                    className="btn btn-success mt-2"
                    onClick={() => {
                      naviagteHandler(
                        prod.title,
                        prod.price,
                        prod.stock,
                        prod.brand,
                        prod.images
                      );
                    }}
                  >
                    {" "}
                    View Details in Query Params
                    {/* <Link
                      className="text-decoration-none text-light"
                      to={`/productDetails/${prod.id}`}
                    >
                      View Details in Query Params
                    </Link> */}
                  </button>
                </div>
              </div>
            </div>
          ))}
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
