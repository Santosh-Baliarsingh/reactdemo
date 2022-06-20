import React, { useEffect, useState } from "react";

export default function AjaxDemo1() {

    const [products , setProducts] = useState([])

    useEffect(() =>{

        fetch('https://dummyjson.com/products')
        .then (response => response.json())
        .then((data) => {

            console.log(data)
            setProducts(data.products)
        })
    },[])
  return (
    <>
      <div className="bg-dark text-light text-center p-3 h4">Fetching Data Using UeEffect() Hook in Functional Component</div>

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
