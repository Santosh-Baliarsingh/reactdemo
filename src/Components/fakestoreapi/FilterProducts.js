import React from "react";
import Products from "./fakestore.json";
import CategorizedFilterProducts from "./CategorizedFilterProducts";

export default function FilterProducts() {
    let mensproducts = Products.filter(
      product => product.category === "men's clothing"
    );
    let womanproducts = Products.filter(
      product => product.category === "women's clothing"
    );
    let electronicproducts = Products.filter(
      product => product.category === "electronics"
    );
    let jeweleryproducts = Products.filter(
      product => product.category === "jewelery"
    );
  return (
    <>
      <CategorizedFilterProducts
        heading={"Mens"}
        products={mensproducts}
      ></CategorizedFilterProducts>

      <CategorizedFilterProducts
        heading={"Womens"}
        products={womanproducts}
      ></CategorizedFilterProducts>

      <CategorizedFilterProducts
        heading={"Electronics"}
        products={electronicproducts}
      ></CategorizedFilterProducts>

      <CategorizedFilterProducts
        heading={"Jewelery"}
        products={jeweleryproducts}
      ></CategorizedFilterProducts>
    </>
  );
}
