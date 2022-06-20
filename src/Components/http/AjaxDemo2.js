import React, { useState } from "react";

export default function AjaxDemo2() {

    const [products , setProducts] = useState([])

    const fetchData = () =>{

        fetch('https://dummyjson.com/products')
        .then (response => response.json())
        .then((data) => {

            console.log(data)
            setProducts(data.products)
        })
    }
  return (
    <>
     <div className="bg-dark text-light text-center p-3 h4">Fetching Data Using Normal Javascript Fetch Method in Functional Component</div>

     <button onClick={fetchData} className="btn btn-success ms-2">Fetch Data</button>

     {products.map((prod,ind) =>(
        <div key={ind}>
            title : {prod.title} <br/>
            description : {prod.description} <br/>
            price : {prod.price} <br/>
        </div>
      ))}
    </>
  );
}
