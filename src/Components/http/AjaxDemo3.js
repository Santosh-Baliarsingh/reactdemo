import React, { useState } from "react";
import axios from "axios";


export default function AjaxDemo3() {
  const [products, setProducts] = useState([]);

  const fetchData = () => {
      axios.get("https://dummyjson.com/products").then((response ) => {
      console.log(response.data.products);
      setProducts(response.data.products);
     
    });
  };

  return (
    <>
      <div className="bg-dark text-light text-center p-3 h4">
        Fetching Data Using Axios in Table Format in Functional Component
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
    </>
  );
}
