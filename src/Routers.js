import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import NewProduct from "./pages/NewProduct";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Order from "./pages/Order";
import Orders from "./pages/Orders";
import Users from "./pages/Users";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import StackProduct from "./pages/StackProduct";
import ManagementOrders from "./pages/ManagementOrders";

import Context from "./context";

function Routers() {

    const { isAuth } = React.useContext(Context);

    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path="/about" element={<About />} />
                <Route path="/catalog" element={<Catalog />} />
                {isAuth && <Route path="/catalog/:category" element={<Catalog />} />}
                {isAuth && <Route path="/newProduct" element={<NewProduct />} />}
                {isAuth && <Route path="/cart" element={<Cart />} />}
                {isAuth && <Route path="/profile" element={<Profile />} />}
                <Route path="/contact" element={<Contact />} />
                {isAuth && <Route path="/order" element={<Order />} />}
                {isAuth && <Route path="/orders" element={<Orders />} />}
                {isAuth && <Route path="/users" element={<Users />} />}
                <Route path="/productDetails" element={<ProductDetails />} />
                {isAuth && <Route path="/stackProduct" element={<StackProduct />} />}
                {isAuth && <Route path="/managementOrders" element={<ManagementOrders />} />}
            </Route>
        </Routes>
    );
}

export default Routers;
