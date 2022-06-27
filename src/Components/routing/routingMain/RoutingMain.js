import React from "react";
import { Route, Routes} from "react-router";
import About from "../about/About";
import ContactUs from "../contactUs/ContactUs";
import Home from "../home/Home";
import NotFound from "../notFound/NotFound";
import ProductDetails from "../productDetails/ProductDetails";
import ProductDetails2 from "../productDetails/ProductDetails2";
import ProductList from "../productList/ProductList";
import ProductList2 from "../productList/ProductList2";
import RoutingNavbar from "../routingnavbar/RoutingNavbar";


export default function RoutingMain() {
  return (
    <div>
    <RoutingNavbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contactUs" element={<ContactUs />} />
        <Route exact path="/productList" element={<ProductList />} />
        <Route exact path="/productList2" element={<ProductList2 />} />
        {/* Below Router is Path Params */}
        <Route exact path="/productDetails/:id" element={<ProductDetails/>} />
        {/* Below Route is Query Params */}
        <Route exact path="/productDetails" element={<ProductDetails2/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
