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
import Chat from "./pages/Chat";

import Context from "./context";

function Routers() {

    const { isAuth, isEmployee, isAdmin } = React.useContext(Context);

    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path="/about" element={<About />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/catalog/:category" element={<Catalog />} />
                {(isEmployee || isAdmin) && <Route path="/newProduct" element={<NewProduct />} />}
                {isAuth && <Route path="/cart" element={<Cart />} />}
                {isAuth && <Route path="/profile" element={<Profile />} />}
                <Route path="/contact" element={<Contact />} />
                {isAuth && <Route path="/order" element={<Order />} />}
                {isAuth && <Route path="/orders" element={<Orders />} />}
                <Route path="/users" element={<Users />} />
                <Route path="/productDetails" element={<ProductDetails />} />
                {(isEmployee || isAdmin) && <Route path="/stackProduct" element={<StackProduct />} />}
                {(isEmployee || isAdmin) && <Route path="/managementOrders" element={<ManagementOrders />} />}
                {<Route path="/chat" element={<Chat />} />}
            </Route>
        </Routes>
    );
}

export default Routers;
