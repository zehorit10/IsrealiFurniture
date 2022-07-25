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
import Stock from "./pages/Stock";

function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path="/about" element={<About />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/catalog/:category" element={<Catalog />} />
                <Route path="/newProduct" element={<NewProduct />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/order" element={<Order />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/users" element={<Users />} />
                <Route path="/productDetails" element={<ProductDetails />} />
                <Route path="/stock" element={<Stock />} />
            </Route>
        </Routes>
    );
}

export default Routers;
