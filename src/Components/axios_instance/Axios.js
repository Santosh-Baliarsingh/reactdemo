import React, { useState } from "react";
import client from "./Client";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from "react-loader-spinner";

export default function Axios() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = () =>{
        setLoading(true)
        client.get('/products').then(response => {
            setProducts(response.data.products)
            setLoading(false);
        })
    };
  return (
    <>
      <div className="bg-dark text-light text-center p-3 h4">
        Fetching Data Using Axios Instance in Table Format With Loader On Button Click  in Functional Component
      </div>
      <button className="btn btn-success ms-3" onClick={fetchData}>Fetch Data</button>

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
      {loading ?  (
            <div className="d-flex justify-content-center">
          <ThreeDots  height="70" width="80" color="black" ariaLabel="loading" />
            </div>
        ) : null}
    </>
  );
}
