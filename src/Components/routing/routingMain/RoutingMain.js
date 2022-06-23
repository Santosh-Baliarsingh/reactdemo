import React from "react";
import { Route, Routes} from "react-router";
import About from "../about/About";
import ContactUs from "../contactUs/ContactUs";
import Home from "../home/Home";
import NotFound from "../notFound/NotFound";
import ProductList from "../productList/ProductList";
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
        <Route exact path="/ProductList" element={<ProductList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}