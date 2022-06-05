import React from "react";
import CategorizedProducts from "./CategorizedProducts";
import products from "./fakestore.json";

export default function Products() {
  return (
    <>
      <h2 className="text-center fw-bold text-light p-2 bg-dark">
        CategorizedProducts
      </h2>
      <div className="row g-0 p-3 "  >
        {products.map((items,id) => (
          <CategorizedProducts key={id} items={items}></CategorizedProducts>
        ))}
      </div>
    </>
  );
}
