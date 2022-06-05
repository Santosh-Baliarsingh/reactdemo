import React from "react";

export default function CategorizedProducts(props) {
    
  let product = props.items; //Destructering Props

  return (
    <>
      <div className="col-md-3 col-sm-6" >
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
            <a
              href="google.com"
              className="btn btn-primary "
            > Add to Cart
              {/* //without Props Destructering (props.items.price) */}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
