import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from "react-loader-spinner";

export default function ProductDetails() {
  // InitialDetails
  const initialDetails = {
    images: [],
    title: "",
    brand: " ",
    price: "",
    category: "",
    rating: "",
    stock: "",
  };

  const { id } = useParams();
  const navigate = useNavigate(); // got back to Previous route
  const [prodDetail, setProdDetail] = useState(initialDetails);
  const [loading, setLoading] = useState(false);

  // UseEffect() Hooks
  useEffect(() => {
    fetchDetails();
  }, [id]);

  // FetchDetails Function
  const fetchDetails = async () => {
    setLoading(true);
    const details = await axios.get(`https://dummyjson.com/products/${id}`);
    setProdDetail(details.data);
    setLoading(false);
  };

  return (
    <>
      <div className="bg-light text-success text-center p-3 h2">
        ProductDetails Page
      </div>
      <h3 className="text-center">
        Selected Product ID is - <span className="text-danger">{id}</span>
      </h3>

      <div className="d-flex justify-content-center">
        {/* Loader Functionality here */}
        {loading ? (
          <div className="d-flex justify-content-center">
            <ThreeDots
              height="70"
              width="80"
              color="black"
              ariaLabel="loading"
            />
          </div>
        ) : (
          <div
            className="card ms-1 my-2"
            style={{ height: "400px", width: "300px" }}
          >
            <img
              src={prodDetail.images[0]}
              style={{ width: "300px", height: "150px" }}
              className="card-img-top img-fluid mx-auto pt-2"
              alt="..."
            />
            <div className="card-body text-center ">
              <h5 className="card-text  fw-bold  text-capitalize text-success">
                {prodDetail.title}
              </h5>

              <h5 className="card-title">
                Brand - <span className="text-danger">{prodDetail.brand}</span>
              </h5>

              <h5 className="card-title">Price - ${prodDetail.price}</h5>

              <h5 className="card-title">Category - {prodDetail.category}</h5>

              <h5>Ratings - {prodDetail.rating}</h5>

              <h5>Stocks - {prodDetail.stock}</h5>
            </div>
          </div>
        )}
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
