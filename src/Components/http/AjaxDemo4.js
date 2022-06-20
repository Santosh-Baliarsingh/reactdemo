import React, { useState } from "react";
import axios from 'axios';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Bars } from "react-loader-spinner";

export default function AjaxDemo4() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const fetchData = () => {
      setLoading(true)
        axios.get("https://dummyjson.com/products").then((response ) => {
        console.log(response.data.products);
        setProducts(response.data.products);
        setLoading(false)
       
      });
    };
  return (
    <>
       <div className="bg-dark text-light text-center p-3 h4">
        Fetching Data Using Axios in Table Format With Loader  in Functional Component
      </div>

      <button onClick={fetchData} className="btn btn-success ms-2">
        Fetch Data
      </button>

      <table className="table table-borderd table-striped">
        <thead className="text-center">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Brand</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {products.map((prod, ind) => (
            <tr key={ind}>
              <td>{prod.id}</td>
              <td>{prod.title}</td>
              <td>{prod.description}</td>
              <td>{prod.brand}</td>
              <td>{prod.price}</td>
              <td>{prod.rating}</td>
              <td>{prod.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Loader Functionality here */}
        {loading ?  (
            <div className="d-flex justify-content-center">
          <Bars  height="70" width="80" color="black" ariaLabel="loading" />
            </div>
        ) : null}
    </>
  );
}
