import React, { Suspense, useState } from "react";
import { Routes, Route } from "react-router";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from "react-loader-spinner";
// Below About Component is part of main Bundle.
// import About from "../about/About";
import ContactUs from "../contactUs/ContactUs";
import Home from "../home/Home";
import FeaturedProducts from "../nestedRouting/FeaturedProducts";
import NestedRouting from "../nestedRouting/NestedRouting";
import NewProducts from "../nestedRouting/NewProducts";
import NotFound from "../notFound/NotFound";
import ProductDetails from "../productDetails/ProductDetails";
import ProductDetails2 from "../productDetails/ProductDetails2";
// Below About Component is part of main Bundle.
// import ProductList from "../productList/ProductList";
import ProductList2 from "../productList/ProductList2";
import RoutingNavbar from "../routingnavbar/RoutingNavbar";
// Below About Component is a Separate Bundle
const About = React.lazy(() => import("../about/About")); // it's now a separate bundle and make sure to place the Separate Bundle bottom of the main bundle imports
const ProductList = React.lazy(() => import("../productList/ProductList")); // it's now a separate bundle and make sure to place the Separate Bundle bottom of the main bundle imports

export default function RoutingMain() {
  const [loading] = useState(false);
  return (
    //Below Suspense Hook Before Download the about bundle a loader will be shown
    <Suspense
      fallback={
        !loading ? (
          <div className="d-flex justify-content-center">
            <ThreeDots
              height="70"
              width="80"
              color="black"
              ariaLabel="loading"
            />
          </div>
        ) : null
      }
    >
      <div>
        <RoutingNavbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/productList" element={<ProductList />} />
          <Route exact path="/contactUs" element={<ContactUs />} />
          <Route exact path="/productList2" element={<ProductList2 />} />
          {/* Below Route is Path Params */}
          <Route
            exact
            path="/productDetails/:id"
            element={<ProductDetails />}
          />
          {/* Below Route is Query Params */}
          <Route exact path="/productDetails" element={<ProductDetails2 />} />
          {/* Below Route is NestedRouting */}
          <Route exact path="/nestedRouting" element={<NestedRouting />}>
            <Route exact path="feature" element={<FeaturedProducts />} />
            <Route exact path="new" element={<NewProducts />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Suspense>
  );
}
