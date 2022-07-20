import React from "react";

export default function CategorizedFilterProducts(props) {
    let productHeading = props.heading;
    let product = props.products;
  return (
    <>
    <div className="container-fluid g-0">
    <div className="row g-0">
    <h2 className="text-center mb-4 bg-black p-3 text-white ">Best Seller Of <span className="text-warning fw-bold">{productHeading}</span> Products</h2>
    {product.map((product, index) => (

      <div key={index} className="col-md-3 col-sm-6  ">
        <div className="card  ms-1 my-2" style={{ height: "430px" }}>
          <img
            src={product.image} //without Props Destructering (props.items.image)
            style={{ width: "150px", height: "150px" }}
            className="card-img-top mx-auto pt-2"
            alt="..."
          />

          <div className="card-body">
            <p className="card-text  fw-bold  text-capitalize h-50 text-success">
              {product.title}
              {/* //without Props Destructering (props.items.category) */}
            </p>

            <h5 className="card-title  fw-bold  mt-2">
              Price - $ {product.price}
              {/* //without Props Destructering (props.items.title) */}
            </h5>
            <p className="fw-bold ">
              Ratings - {product.rating.rate}
              {/* //without Props Destructering (props.items.price) */}
            </p>
            <a href="google.com" className="btn btn-primary ">
              {" "}
              Add to Cart
              {/* //without Props Destructering (props.items.price) */}
            </a>
          </div>
        </div>
      </div>
    ) )}
    </div>
    </div>
    
    </>
  );
}
